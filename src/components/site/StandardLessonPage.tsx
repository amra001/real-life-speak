import { useEffect, useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { ChevronLeft, ChevronRight, Lock, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { TranslationControls } from "@/components/site/TranslationControls";
import { Translated } from "@/components/site/Translated";
import { Exercises } from "@/components/site/Exercises";
import { lessonImage } from "@/lib/lesson-images";
import { lessonQuery, topicLessonsQuery, type Lesson, type Scene, type Vocab, type DialogLine, type Question } from "@/lib/data";
import { lessonOverrideRegistry } from "@/lib/static/registry";
import { categoryName, formatDuration, LEVEL_INFO, REGIONS, type TranslationLang } from "@/lib/taxonomy";
import { useAuth } from "@/hooks/useAuth";
import { usePremium } from "@/hooks/usePremium";
import { useTranslationPreference } from "@/hooks/usePreferences";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const SITUATIONS = 15;
const PRACTICE_MIN = 20;
const TEST_COUNT = 50;
const CURATED_SCENE_TOPICS = new Set(["baeckerei", "bus", "supermarkt", "apotheke", "kindergarten"]);

type AnyScene = {
  id: string;
  position: number;
  german_text: string;
  image_key?: string | null;
  translations?: Record<string, string>;
  hint?: string | null | undefined;
};

type AnyDialog = {
  id: string;
  position: number;
  dialog_index?: number | null;
  dialog_title?: string | null;
  speaker?: string | null;
  german_text?: string | null;
  line?: string | null;
  translations?: Record<string, string>;
};

type DialogGroup = { title: string; lines: AnyDialog[] };
type Section = { id: string; label: string; render: () => React.ReactNode };

function previewHost() {
  if (typeof window === "undefined") return false;
  const host = window.location.hostname.toLowerCase();
  return host.includes("preview") && host.endsWith("lovable.app");
}

function normalizeScenes(raw: AnyScene[], fallbackKey: string | null): AnyScene[] {
  const ordered = [...raw].sort((a, b) => a.position - b.position);
  if (!ordered.length) return [];
  if (ordered.length === SITUATIONS) return ordered;
  if (ordered.length > SITUATIONS) {
    return Array.from({ length: SITUATIONS }, (_, i) => {
      const start = Math.floor((i * ordered.length) / SITUATIONS);
      return ordered[start] as AnyScene;
    });
  }
  const focus = [
    "Achte auf den Ort und die Personen.", "Achte auf die wichtigsten Wörter.", "Sprich den Satz einmal laut nach.",
    "Welche Information ist hier wichtig?", "Wie würdest du in dieser Situation reagieren?", "Achte auf die höfliche Formulierung.",
    "Merke dir die Schlüsselwörter.", "Was passiert als Nächstes?", "Formuliere denselben Inhalt mit eigenen Worten.",
    "Welche Frage könnte man hier stellen?", "Welche Antwort wäre passend?", "Achte auf Artikel und Präpositionen.",
    "Welche Alternative könnte es geben?", "Was ist das Ziel der Person?", "Fasse die Situation in einem Satz zusammen.",
  ];
  return Array.from({ length: SITUATIONS }, (_, i) => {
    const src = ordered[i % ordered.length] as AnyScene;
    return { ...src, id: `${src.id}-std-${i + 1}`, position: i + 1, image_key: src.image_key ?? fallbackKey, hint: i < ordered.length ? src.hint : focus[i] };
  });
}

function makeFallbackDialog(title: string, scenes: AnyScene[], offset: number): DialogGroup {
  const pool = scenes.slice(offset, offset + 8).length >= 4 ? scenes.slice(offset, offset + 8) : scenes.slice(0, 8);
  return { title, lines: pool.map((s, i) => ({ id: `${title}-${i}`, position: i + 1, dialog_index: title.includes("2") ? 2 : 1, dialog_title: title, speaker: i % 2 === 0 ? "Person A" : "Person B", german_text: s.german_text, translations: s.translations ?? {} })) };
}

function lineText(d: AnyDialog) { return (d.german_text ?? d.line ?? "").trim(); }

function groupDialogs(raw: AnyDialog[]): DialogGroup[] {
  const map = new Map<number, DialogGroup>();
  for (const d of raw) {
    const idx = d.dialog_index ?? 1;
    if (!map.has(idx)) map.set(idx, { title: d.dialog_title || `Dialog ${idx}`, lines: [] });
    map.get(idx)?.lines.push(d);
  }
  return [...map.entries()].sort((a, b) => a[0] - b[0]).map(([, g]) => g);
}

function levelGrammar(level: string) {
  if (level === "A1") return [
    { title: "Artikel", text: "Lerne Nomen immer mit der, die oder das.", ex: "der Bus · die Apotheke · das Ticket" },
    { title: "Einfach fragen", text: "Kurze W-Fragen und Ja/Nein-Fragen helfen im Alltag.", ex: "Wo ist …? · Haben Sie …? · Kann ich …?" },
    { title: "Höflich bitten", text: "Mit bitte und einfachen Wendungen klingt eine Bitte freundlich.", ex: "Ich hätte gern … · Können Sie mir helfen?" },
    { title: "Ort", text: "Mit in, auf, vor, hinter und neben beschreibst du Positionen.", ex: "im Bus · an der Kasse · vor der Praxis" },
  ];
  if (level === "A2") return [
    { title: "Akkusativ & Dativ", text: "Achte auf Artikel nach Verben und Präpositionen.", ex: "Ich brauche den Termin. · Ich fahre mit dem Bus." },
    { title: "Gründe", text: "Mit weil erklärst du einfache Gründe.", ex: "Ich frage nach, weil ich unsicher bin." },
    { title: "Vergleichen", text: "Mit Komparativ und als vergleichst du Möglichkeiten.", ex: "Diese Verbindung ist schneller als die andere." },
    { title: "Reihenfolge", text: "Mit zuerst, dann, danach und zum Schluss erzählst du Abläufe.", ex: "Zuerst frage ich, danach bezahle ich." },
  ];
  return [
    { title: "Begründen", text: "Auf B1 erklärst du Ursachen, Folgen und Probleme.", ex: "Das ist problematisch, weil … · Deshalb möchte ich …" },
    { title: "Rückfragen", text: "Prüfe Informationen und frage höflich nach.", ex: "Habe ich richtig verstanden, dass …?" },
    { title: "Meinung", text: "Äußere eine Einschätzung und begründe sie kurz.", ex: "Meiner Meinung nach wäre es besser, wenn …" },
    { title: "Lösungen", text: "Schlage Alternativen vor und reagiere darauf.", ex: "Ich würde vorschlagen, dass …" },
  ];
}

function autoQuestions(scenes: AnyScene[], section: "practice" | "test", count: number) {
  if (!scenes.length || count <= 0) return [];
  return Array.from({ length: count }, (_, i) => {
    const current = scenes[i % scenes.length] as AnyScene;
    if (i % 6 === 5) {
      const items = [0, 1, 2].map((n) => scenes[(i + n) % scenes.length]?.german_text ?? "");
      return { id: `auto-${section}-order-${i}`, position: 5000 + i, kind: "order", prompt: "Bringe die Schritte in eine sinnvolle Reihenfolge.", explanation: "Orientiere dich am Ablauf der Situation.", section, data: { items }, quiz_answers: [] };
    }
    const others = [1, 3, 5].map((n) => scenes[(i + n) % scenes.length] as AnyScene).filter(Boolean);
    const answers = [current, ...others].slice(0, 4).map((s, idx) => ({ id: `auto-${section}-${i}-${idx}`, position: idx + 1, text: s.german_text, is_correct: idx === 0 }));
    return { id: `auto-${section}-choice-${i}`, position: 5000 + i, kind: "single_choice", prompt: i % 2 === 0 ? "Welche Aussage passt zur Situation?" : "Welche Aussage gehört logisch in den Ablauf?", explanation: "Die richtige Antwort entspricht der gelernten Situation.", section, data: null, quiz_answers: answers };
  });
}

function dialogBuilder(dialogs: DialogGroup[], scenes: AnyScene[]) {
  const lines = dialogs.flatMap((g) => g.lines).map((d) => `${d.speaker ?? "Person"}: ${lineText(d)}`).filter(Boolean).slice(0, 10);
  const items = lines.length >= 4 ? lines : scenes.slice(0, 8).map((s, i) => `${i % 2 === 0 ? "Person A" : "Person B"}: ${s.german_text}`);
  return [{ id: "auto-dialog-builder", position: 9000, kind: "dialog_order", prompt: "Baue den Dialog in die richtige Reihenfolge.", explanation: "Achte auf Begrüßung, Anliegen, Rückfragen, Lösung und Abschluss.", section: "dialog_builder", data: { items }, quiz_answers: [] }];
}

function PremiumGate() {
  return <div className="rounded-3xl border border-border bg-card p-8 text-center"><Lock className="mx-auto h-8 w-8"/><h3 className="mt-3 font-serif text-xl font-semibold">Premium-Lektion</h3><p className="mt-2 text-sm text-muted-foreground">Mit Premium wird die vollständige Lektion freigeschaltet.</p><Button asChild className="mt-5"><Link to="/preise"><Sparkles className="mr-2 h-4 w-4"/>Premium ansehen</Link></Button></div>;
}

/**
 * Plain client-only data loader for a single lesson, deliberately not built
 * on useQuery/react-query: on this route, useQuery reproducibly surfaced a
 * bare "Failed to fetch" for every lesson (registry-based and DB-based
 * alike) for real users, while a manual call to the exact same fetch logic
 * always succeeded. Rather than keep patching an integration that can't be
 * pinned down, this loads data directly with a plain effect + retry loop.
 */
function useLessonData(slug: string) {
  const [state, setState] = useState<{ data: unknown; error: unknown; loading: boolean }>({
    data: undefined,
    error: undefined,
    loading: true,
  });
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    let cancelled = false;
    setState((s) => ({ ...s, loading: true }));

    const run = async (retriesLeft: number): Promise<void> => {
      try {
        const result = await lessonQuery(slug).queryFn();
        if (!cancelled) setState({ data: result, error: undefined, loading: false });
      } catch (err) {
        if (cancelled) return;
        if (retriesLeft > 0) {
          await new Promise((r) => setTimeout(r, 400));
          if (!cancelled) return run(retriesLeft - 1);
        } else {
          setState({ data: undefined, error: err, loading: false });
        }
      }
    };
    void run(2);

    return () => {
      cancelled = true;
    };
  }, [slug, attempt]);

  const retry = () => setAttempt((a) => a + 1);

  return { ...state, retry };
}

export function StandardLessonPage({ slug }: { slug: string }) {
  // Registry-based lessons are plain in-memory data — no fetch, no loading
  // state, no race condition possible. Read them synchronously and skip the
  // async loader entirely; the hook below still runs (rules of hooks) but its
  // result is ignored whenever a registry entry exists.
  const registryData = lessonOverrideRegistry[slug] as
    | { lesson: Lesson; scenes: Scene[]; vocab: Vocab[]; dialog: DialogLine[]; questions: Question[] }
    | undefined;
  const asyncResult = useLessonData(slug);
  const rawData = registryData ?? asyncResult.data;
  const isPending = registryData ? false : asyncResult.loading;
  const error = registryData ? undefined : asyncResult.error;
  const retry = asyncResult.retry;
  const data = rawData as { lesson: Lesson; scenes: Scene[]; vocab: Vocab[]; dialog: DialogLine[]; questions: Question[] } | undefined | null;
  const isError = !!error;
  const { user } = useAuth();
  const { isPremium } = usePremium();
  const { lang, setLang, visible, setVisible, translate, langLabel } = useTranslationPreference();
  const [tab, setTab] = useState(0);
  if (isPending) return <div className="mx-auto max-w-5xl px-4 py-20">Lektion wird geladen …</div>;
  if (!data?.lesson) {
    return (
      <div className="mx-auto max-w-5xl px-4 py-20 text-center">
        <p>{isError ? "Die Lektion konnte gerade nicht geladen werden." : "Lektion nicht gefunden."}</p>
        {isError && (
          <Button className="mt-4" variant="outline" onClick={retry}>
            Erneut versuchen
          </Button>
        )}
      </div>
    );
  }

  const lesson = data.lesson as any;
  const fullAccess = previewHost() || isPremium || !lesson.is_premium;
  const scenes = normalizeScenes((data.scenes ?? []) as AnyScene[], lesson.thumbnail_key ?? null);
  const rawDialogs = groupDialogs((data.dialog ?? []) as AnyDialog[]);
  const d1 = rawDialogs[0] ?? makeFallbackDialog("Dialog 1 · Alltag", scenes, 0);
  const d2 = rawDialogs[1] ?? makeFallbackDialog("Dialog 2 · Rückfrage und Lösung", scenes, 7);
  const vocab = (data.vocab ?? []) as any[];
  const questions = (data.questions ?? []) as any[];
  const placeItems = (lesson.place_items ?? []) as any[];
  const grammarNotes = (lesson.grammar_notes ?? []) as any[];
  const rawPractice = questions.filter((q) => !["grammar", "places", "dialog_builder", "test"].includes(q.section ?? ""));
  const rawTests = questions.filter((q) => q.section === "test");
  const placeQuestions = questions.filter((q) => q.section === "places");
  const grammarQuestions = questions.filter((q) => q.section === "grammar");
  const builderQuestions = questions.filter((q) => q.section === "dialog_builder");
  const isA1 = lesson.level === "A1";
  const practice = isA1 ? rawPractice : [...rawPractice, ...autoQuestions(scenes, "practice", Math.max(0, PRACTICE_MIN - rawPractice.length))];
  const tests = isA1 ? rawTests : [...rawTests, ...autoQuestions(scenes, "test", Math.max(0, TEST_COUNT - rawTests.length))].slice(0, TEST_COUNT);
  const builder = isA1 ? builderQuestions : (builderQuestions.length ? builderQuestions : dialogBuilder(rawDialogs, scenes));
  const tr = (value?: Record<string, string>) => translate(value ?? {});
  const levelInfo = LEVEL_INFO[lesson.level as keyof typeof LEVEL_INFO];
  const region = REGIONS.find((r) => r.slug === lesson.region);
  const showSceneImages = CURATED_SCENE_TOPICS.has(lesson.topic_slug ?? "");

  const sections: Section[] = [
    { id: "situation", label: "Situation", render: () => <SituationSection scenes={scenes} fallbackKey={lesson.thumbnail_key} translate={tr} langLabel={langLabel} lang={lang} translationEnabled={visible} showImages={showSceneImages} /> },
    { id: "vocab", label: "Wörter lernen", render: () => fullAccess ? <VocabSection vocab={vocab} scenes={scenes} translate={tr} langLabel={langLabel} lang={lang} translationEnabled={visible}/> : <PremiumGate/> },
    { id: "places", label: "Wo ist was?", render: () => fullAccess ? <PlacesSection items={placeItems} questions={placeQuestions} fallbackKey={lesson.thumbnail_key} lang={lang} translate={tr} langLabel={langLabel}/> : <PremiumGate/> },
    { id: "dialog1", label: "Dialog 1", render: () => fullAccess ? <DialogSection group={d1} translate={tr} langLabel={langLabel} lang={lang} translationEnabled={visible}/> : <PremiumGate/> },
    { id: "dialog2", label: "Dialog 2", render: () => fullAccess ? <DialogSection group={d2} translate={tr} langLabel={langLabel} lang={lang} translationEnabled={visible}/> : <PremiumGate/> },
    { id: "grammar", label: "Sprache & Grammatik", render: () => fullAccess ? <GrammarSection level={lesson.level} notes={grammarNotes} questions={grammarQuestions} lang={lang}/> : <PremiumGate/> },
    { id: "practice", label: "Übungen", render: () => fullAccess ? <Exercises questions={practice} lang={lang}/> : <PremiumGate/> },
    { id: "builder", label: "Dialog bauen", render: () => fullAccess ? <div><h3 className="font-serif text-xl font-semibold">Dialog selbst bauen</h3><p className="mt-2 mb-4 text-sm text-muted-foreground">Klicke die Gesprächsteile in die richtige Reihenfolge.</p><Exercises questions={builder} lang={lang}/></div> : <PremiumGate/> },
    { id: "test", label: "Abschlusstest", render: () => fullAccess ? <Exercises questions={tests} lang={lang} title={`Abschlusstest · ${tests.length} Fragen`} onFinish={(score: number, total: number) => void save(score, total)}/> : <PremiumGate/> },
  ];

  async function save(score: number, total: number) {
    if (!user) { toast.info("Melde dich an, um deinen Fortschritt zu speichern."); return; }
    const { error } = await supabase.from("user_progress").upsert({ user_id: user.id, lesson_id: lesson.id, completed: true, quiz_score: score, quiz_total: total, updated_at: new Date().toISOString() }, { onConflict: "user_id,lesson_id" });
    if (error) toast.error("Fortschritt konnte nicht gespeichert werden."); else toast.success("Fortschritt gespeichert.");
  }

  const current = Math.min(tab, 8);
  return <div className="mx-auto max-w-5xl px-4 py-10">
    <Link to="/lektionen" className="inline-flex items-center text-sm text-muted-foreground"><ChevronLeft className="mr-1 h-4 w-4"/>Bibliothek</Link>
    <div className="mt-4 flex flex-wrap gap-2"><Badge variant="secondary">{lesson.level}</Badge><Badge variant="outline">{categoryName(lesson.subcategory_slug ?? lesson.category_slug)}</Badge><Badge variant="outline">{formatDuration(lesson.duration_seconds)}</Badge>{region && <Badge variant="outline">{region.flag} {region.label}</Badge>}{previewHost() && <Badge variant="outline">Vorschau · komplett offen</Badge>}</div>
    <h1 className="mt-3 font-serif text-3xl font-semibold md:text-4xl">{lesson.title}</h1>
    <p className="mt-2 text-muted-foreground">{lesson.description}</p>
    {levelInfo && <p className="mt-2 text-sm text-muted-foreground"><strong className="text-foreground">{levelInfo.label}:</strong> {levelInfo.description}</p>}
    {lesson.topic_slug && <LevelSwitch topicSlug={lesson.topic_slug} currentSlug={lesson.slug}/>} 
    <div className="mt-6"><TranslationControls lang={lang} setLang={setLang} visible={visible} setVisible={setVisible}/></div>
    <div className="mt-6 rounded-3xl border border-border bg-card p-5 shadow-sm"><div className="flex flex-wrap gap-2">{sections.map((s, i) => <button key={s.id} type="button" onClick={() => setTab(i)} className={i === current ? "rounded-full bg-foreground px-4 py-2 text-sm text-background" : "rounded-full border border-border px-4 py-2 text-sm hover:bg-muted"}><span className="mr-1 opacity-70">{i + 1}</span>{s.label}</button>)}</div><div className="mt-4 flex items-center gap-3"><Progress value={((current + 1) / 9) * 100} className="flex-1"/><span className="text-sm text-muted-foreground">Schritt {current + 1}/9</span></div></div>
    <div className="mt-7">{sections[current]?.render()}</div>
    <div className="mt-8 flex justify-between"><Button variant="outline" disabled={current === 0} onClick={() => setTab(current - 1)}><ChevronLeft className="mr-1 h-4 w-4"/>Zurück</Button><Button disabled={current === 8} onClick={() => setTab(current + 1)}>Weiter<ChevronRight className="ml-1 h-4 w-4"/></Button></div>
  </div>;
}

function SituationSection({ scenes, fallbackKey, translate, langLabel, lang, translationEnabled, showImages }: { scenes: AnyScene[]; fallbackKey: string | null; translate: (v?: Record<string, string>) => string; langLabel: string; lang: TranslationLang; translationEnabled: boolean; showImages: boolean }) {
  const [index, setIndex] = useState(0);
  if (!scenes.length) return <p className="text-muted-foreground">Noch keine Situationen hinterlegt.</p>;
  const s = scenes[Math.min(index, scenes.length - 1)] as AnyScene;
  return <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm">{showImages && <img src={lessonImage(s.image_key ?? fallbackKey)} alt={s.german_text} className="aspect-video w-full object-cover"/>}<div className="p-6"><div className="text-xs uppercase tracking-widest text-muted-foreground">Situation {index + 1} von 15</div><div className="mt-3 font-serif text-2xl leading-snug">{s.german_text}</div><Translated text={translate(s.translations)} langLabel={langLabel} sourceType="scene" sourceId={s.id} lang={lang} enabled={translationEnabled}/>{s.hint && <div className="mt-4 rounded-xl bg-muted p-3 text-sm text-muted-foreground"><strong className="mr-2">Lerntipp:</strong>{s.hint}</div>}<div className="mt-6 flex items-center gap-3"><Button variant="outline" size="icon" disabled={index === 0} onClick={() => setIndex(Math.max(0, index - 1))}><ChevronLeft className="h-4 w-4"/></Button><Progress value={((index + 1) / 15) * 100} className="flex-1"/><span className="text-sm text-muted-foreground">{index + 1}/15</span><Button variant="outline" size="icon" disabled={index === 14} onClick={() => setIndex(Math.min(14, index + 1))}><ChevronRight className="h-4 w-4"/></Button></div></div></div>;
}

function VocabSection({ vocab, scenes, translate, langLabel, lang, translationEnabled }: { vocab: any[]; scenes: AnyScene[]; translate: (v?: Record<string, string>) => string; langLabel: string; lang: TranslationLang; translationEnabled: boolean }) {
  if (!vocab.length) { const words = [...new Set(scenes.flatMap((s) => s.german_text.replace(/[„“.,!?():]/g, " ").split(/\s+/)).filter((w) => w.length > 5).map((w) => w.toLowerCase()))].slice(0, 20); return <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">{words.map((w) => <div key={w} className="rounded-2xl border border-border bg-card p-4 font-medium capitalize">{w}</div>)}</div>; }
  return <div className="grid gap-3 md:grid-cols-2">{vocab.map((v, i) => { const term = v.term ?? v.word ?? ""; return <div key={v.id ?? i} className="rounded-2xl border border-border bg-card p-4"><div className="font-serif text-xl font-semibold">{v.article ? `${v.article} ` : ""}{term}</div>{v.plural && <div className="text-xs text-muted-foreground">Plural: {v.plural}</div>}{v.example && <p className="mt-2 text-sm">{v.example}</p>}<Translated text={translate(v.translations)} langLabel={langLabel} sourceType="vocab" sourceId={v.id} lang={lang} enabled={translationEnabled}/></div>; })}</div>;
}

function PlacesSection({ items, questions, fallbackKey, lang, translate, langLabel }: { items: any[]; questions: any[]; fallbackKey: string | null; lang: any; translate: (v?: Record<string, string>) => string; langLabel: string }) {
  const preps = ["vor", "hinter", "neben", "zwischen", "auf", "in", "gegenüber", "an"];
  return <div className="space-y-6"><h3 className="font-serif text-xl font-semibold">Wo ist was?</h3>{items.length ? <div className="grid gap-4 md:grid-cols-2">{items.map((it, i) => { const imgKey = it.image_key ?? fallbackKey; return <div key={it.id ?? i} className="overflow-hidden rounded-2xl border border-border bg-card">{imgKey && <img src={lessonImage(imgKey)} alt={it.label ?? it.german_text ?? "Bildaufgabe"} className="aspect-video w-full object-cover"/>}<div className="p-4"><div className="font-medium">{it.label ?? it.german_text}</div><p className="mt-1 text-sm text-muted-foreground">{it.sentence ?? (it.preposition ? `Präposition: ${it.preposition}` : "Beschreibe die Position.")}</p><Translated text={translate(it.translations)} langLabel={langLabel}/></div></div>; })}</div> : <div>{fallbackKey && <img src={lessonImage(fallbackKey)} alt="Orientierung" className="aspect-video w-full rounded-2xl border border-border object-cover"/>}<div className="mt-4 flex flex-wrap gap-2">{preps.map((p) => <span key={p} className="rounded-full border border-border bg-card px-3 py-2 text-sm">{p}</span>)}</div></div>}{questions.length > 0 && <Exercises questions={questions} lang={lang}/>}</div>;
}

function DialogSection({ group, translate, langLabel, lang, translationEnabled }: { group: DialogGroup; translate: (v?: Record<string, string>) => string; langLabel: string; lang: TranslationLang; translationEnabled: boolean }) {
  return <div><h3 className="font-serif text-xl font-semibold">{group.title}</h3><div className="mt-4 space-y-3">{group.lines.map((d, i) => <div key={d.id ?? i} className="rounded-2xl border border-border bg-card p-4"><div className="text-xs uppercase tracking-widest text-muted-foreground">{d.speaker ?? (i % 2 === 0 ? "Person A" : "Person B")}</div><div className="mt-1 font-serif text-lg">{lineText(d)}</div><Translated text={translate(d.translations)} langLabel={langLabel} sourceType="dialog" sourceId={d.id} lang={lang} enabled={translationEnabled}/></div>)}</div></div>;
}

function GrammarSection({ level, notes, questions, lang }: { level: string; notes: any[]; questions: any[]; lang: any }) {
  const cards = notes.length ? notes.map((n) => ({ title: n.title, text: n.explanation, ex: (n.examples ?? []).join(" · ") })) : levelGrammar(level);
  return <div className="space-y-6"><div className="grid gap-3 md:grid-cols-2">{cards.map((c, i) => <div key={`${c.title}-${i}`} className="rounded-2xl border border-border bg-card p-4"><div className="font-medium">{c.title}</div><p className="mt-2 text-sm text-muted-foreground">{c.text}</p>{c.ex && <p className="mt-3 text-sm">{c.ex}</p>}</div>)}</div>{questions.length > 0 && <Exercises questions={questions} lang={lang}/>}</div>;
}

function LevelSwitch({ topicSlug, currentSlug }: { topicSlug: string; currentSlug: string }) {
  const { data } = useQuery(topicLessonsQuery(topicSlug)); const siblings = data ?? []; if (siblings.length < 2) return null;
  return <div className="mt-5 flex flex-wrap items-center gap-2 rounded-2xl border border-border bg-card px-4 py-3"><span className="mr-1 text-xs uppercase tracking-widest text-muted-foreground">Niveau wählen</span>{siblings.map((s: any) => <Link key={s.id} to="/lektion/$slug" params={{ slug: s.slug }} className={s.slug === currentSlug ? "rounded-full bg-foreground px-3 py-1.5 text-sm text-background" : "rounded-full border border-border px-3 py-1.5 text-sm hover:bg-muted"}>{s.level}{s.is_premium ? " · Premium" : " · Gratis"}</Link>)}</div>;
}
