import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, Lock, MapPin, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { TranslationControls } from "@/components/site/TranslationControls";
import { Translated } from "@/components/site/Translated";
import { Exercises } from "@/components/site/Exercises";
import {
  lessonQuery,
  topicLessonsQuery,
  type DialogLine,
  type GrammarNote,
  type PlaceItem,
  type Question,
  type Scene,
} from "@/lib/data";
import { lessonImage } from "@/lib/lesson-images";
import {
  categoryName,
  formatDuration,
  FREE_PREVIEW_SCENES,
  LEVEL_INFO,
  REGIONS,
  type Level,
} from "@/lib/taxonomy";
import { useAuth } from "@/hooks/useAuth";
import { usePremium } from "@/hooks/usePremium";
import { useTranslationPreference } from "@/hooks/usePreferences";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export const Route = createFileRoute("/lektion/$slug")({
  head: ({ params }) => ({
    meta: [
      { title: `Lektion: ${params.slug.replace(/-/g, " ")} – RealLife German` },
      { name: "description", content: "Deutsch lernen mit Fotostory, Wortschatz, Bildaufgaben, Grammatik, Dialogtraining und Abschlusstest." },
    ],
  }),
  component: LessonPage,
});

type Section = { id: string; label: string; render: () => React.ReactNode };
type DialogGroup = { title: string; lines: DialogLine[] };

const STANDARD_SITUATIONS = 15;
const STANDARD_PRACTICE_MIN = 20;
const STANDARD_TEST_COUNT = 50;

function isLovablePreviewHost() {
  if (typeof window === "undefined") return false;
  const host = window.location.hostname.toLowerCase();
  return host.startsWith("preview--") && host.endsWith(".lovable.app");
}

function PremiumGate({ preview }: { preview: boolean }) {
  return (
    <div className="mt-6 rounded-3xl border border-border bg-card p-8 text-center md:p-10">
      <Lock className="mx-auto h-8 w-8 text-accent" />
      <h2 className="mt-4 font-serif text-xl font-semibold">Diese Lektion ist Teil von Premium.</h2>
      <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
        {preview
          ? "Du hast die kostenlose Vorschau gesehen. Mit Premium schaltest du das komplette Lernmodul frei."
          : "Mit Premium erhältst du Zugriff auf die komplette Lernbibliothek."}
      </p>
      <Button asChild className="mt-6"><Link to="/preise"><Sparkles className="mr-2 h-4 w-4" />Premium freischalten</Link></Button>
    </div>
  );
}

function LessonPage() {
  const { slug } = Route.useParams();
  const { data, isLoading } = useQuery(lessonQuery(slug));
  const { user } = useAuth();
  const { isPremium } = usePremium();
  const { lang, setLang, visible, setVisible, translate, langLabel } = useTranslationPreference();
  const [sectionIndex, setSectionIndex] = useState(0);

  const tr = (t: Record<string, string> | null | undefined) => translate(t);
  const lesson = data?.lesson;
  const scenes = useMemo(() => data?.scenes ?? [], [data]);
  const dialogGroups = useMemo(() => {
    const map = new Map<number, DialogGroup>();
    for (const d of data?.dialog ?? []) {
      const idx = d.dialog_index ?? 1;
      if (!map.has(idx)) map.set(idx, { title: d.dialog_title || `Dialog ${idx}`, lines: [] });
      map.get(idx)?.lines.push(d);
    }
    return [...map.entries()].sort((a, b) => a[0] - b[0]).map(([, g]) => g);
  }, [data]);

  if (isLoading) return <div className="mx-auto max-w-4xl px-4 py-20">Lektion wird geladen …</div>;
  if (!data || !lesson) return <div className="mx-auto max-w-4xl px-4 py-20 text-center"><h1 className="font-serif text-2xl font-semibold">Lektion nicht gefunden</h1><Button asChild className="mt-6"><Link to="/lektionen">Zur Bibliothek</Link></Button></div>;

  const { vocab, questions } = data;
  const region = REGIONS.find((r) => r.slug === lesson.region);
  const levelInfo = LEVEL_INFO[lesson.level as Level];
  const previewEditorAccess = isLovablePreviewHost();
  const fullAccess = previewEditorAccess || isPremium || !lesson.is_premium;
  const visibleScenes = fullAccess ? scenes : scenes.slice(0, FREE_PREVIEW_SCENES);
  const placeItems = (lesson.place_items ?? []) as PlaceItem[];
  const grammarNotes = (lesson.grammar_notes ?? []) as GrammarNote[];

  const grammarQuestions = questions.filter((q) => q.section === "grammar");
  const placeQuestions = questions.filter((q) => q.section === "places");
  const dialogBuilderQuestions = questions.filter((q) => q.section === "dialog_builder");
  const rawTestQuestions = questions.filter((q) => q.section === "test");
  const rawPracticeQuestions = questions.filter((q) => !["grammar", "places", "dialog_builder", "test"].includes(q.section ?? ""));

  const fallbackPractice = makeStoryQuestions(scenes, "practice", Math.max(0, STANDARD_PRACTICE_MIN - rawPracticeQuestions.length));
  const practiceQuestions = [...rawPracticeQuestions, ...fallbackPractice];
  const fallbackTests = makeStoryQuestions(scenes, "test", Math.max(0, STANDARD_TEST_COUNT - rawTestQuestions.length));
  const testQuestions = [...rawTestQuestions, ...fallbackTests].slice(0, STANDARD_TEST_COUNT);
  const builder = dialogBuilderQuestions.length ? dialogBuilderQuestions : [buildDialogExercise(dialogGroups, scenes)].filter(Boolean) as Question[];

  const dialog1 = dialogGroups[0] ?? buildFallbackDialog("Dialog 1 · Alltagssituation", scenes, 0);
  const dialog2 = dialogGroups[1] ?? buildFallbackDialog("Dialog 2 · Rückfrage und Lösung", scenes, Math.max(0, Math.floor(scenes.length / 2)));

  const sections: Section[] = [
    {
      id: "situation",
      label: "Situation",
      render: () => <SceneStory scenes={visibleScenes} fallbackKey={lesson.thumbnail_key} translate={tr} langLabel={langLabel} preview={!fullAccess} />,
    },
    {
      id: "woerter",
      label: "Wörter lernen",
      render: () => fullAccess ? <VocabSection vocab={vocab} scenes={scenes} translate={tr} langLabel={langLabel} /> : <><VocabSection vocab={vocab.slice(0, 3)} scenes={scenes.slice(0, 3)} translate={tr} langLabel={langLabel} /><PremiumGate preview /></>,
    },
    {
      id: "orte",
      label: "Wo ist was?",
      render: () => fullAccess ? (
        <div className="space-y-6">
          {placeItems.length ? <PlaceSection items={placeItems} fallbackKey={lesson.thumbnail_key} translate={tr} langLabel={langLabel} /> : <FallbackPlaceSection fallbackKey={lesson.thumbnail_key} />}
          {placeQuestions.length > 0 && <div><h3 className="mb-3 font-serif text-xl font-semibold">Jetzt selbst üben</h3><p className="mb-4 text-sm text-muted-foreground">Schau bei jeder Aufgabe zuerst auf das Bild. Die Position im Bild entscheidet über die richtige Präposition.</p><Exercises questions={placeQuestions} lang={lang} /></div>}
        </div>
      ) : <PremiumGate preview />,
    },
    {
      id: "dialog-1",
      label: "Dialog 1",
      render: () => fullAccess ? <DialogSection group={dialog1} translate={tr} langLabel={langLabel} /> : <PremiumGate preview />,
    },
    {
      id: "dialog-2",
      label: "Dialog 2",
      render: () => fullAccess ? <DialogSection group={dialog2} translate={tr} langLabel={langLabel} /> : <PremiumGate preview />,
    },
    {
      id: "grammatik",
      label: "Sprache & Grammatik",
      render: () => fullAccess ? <div className="space-y-6"><GrammarSection notes={grammarNotes.length ? grammarNotes : levelGrammarNotes(lesson.level)} />{grammarQuestions.length > 0 && <div><h3 className="mb-3 font-serif text-xl font-semibold">Grammatik aktiv üben</h3><Exercises questions={grammarQuestions} lang={lang} /></div>}</div> : <PremiumGate preview />,
    },
    {
      id: "uebungen",
      label: "Übungen",
      render: () => fullAccess ? <Exercises questions={practiceQuestions} lang={lang} /> : <PremiumGate preview />,
    },
    {
      id: "dialog-bauen",
      label: "Dialog bauen",
      render: () => fullAccess ? <div><h3 className="font-serif text-xl font-semibold">Jetzt bist du dran</h3><p className="mt-2 mb-4 text-sm text-muted-foreground">Die Gesprächsteile sind gemischt. Klicke sie in einer natürlichen Reihenfolge an: Einstieg, Anliegen, Rückfrage, Lösung und Abschluss.</p><Exercises questions={builder} lang={lang} /></div> : <PremiumGate preview />,
    },
    {
      id: "test",
      label: "Abschlusstest",
      render: () => fullAccess ? <Exercises questions={testQuestions} lang={lang} title="Abschlusstest · 50 Fragen" onFinish={(score, total) => void saveProgress(score, total)} /> : <PremiumGate preview />,
    },
  ];

  async function saveProgress(score: number, total: number) {
    if (!user || !lesson) { toast.info("Melde dich an, um deinen Fortschritt zu speichern."); return; }
    const { error } = await supabase.from("user_progress").upsert({ user_id: user.id, lesson_id: lesson.id, completed: true, quiz_score: score, quiz_total: total, updated_at: new Date().toISOString() }, { onConflict: "user_id,lesson_id" });
    if (error) toast.error("Fortschritt konnte nicht gespeichert werden."); else toast.success("Fortschritt gespeichert.");
  }

  const current = Math.min(sectionIndex, sections.length - 1);
  const section = sections[current];

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <Link to="/lektionen" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground"><ChevronLeft className="mr-1 h-4 w-4" />Bibliothek</Link>
      <div className="mt-4 flex flex-wrap items-center gap-2">
        <Badge variant="secondary">{lesson.level}</Badge>
        <Badge variant="outline">{categoryName(lesson.subcategory_slug ?? lesson.category_slug)}</Badge>
        <Badge variant="outline">{formatDuration(lesson.duration_seconds)}</Badge>
        {region && <Badge variant="outline">{region.flag} {region.label}</Badge>}
        {previewEditorAccess && lesson.is_premium ? <Badge variant="outline">Vorschau · vollständig offen</Badge> : lesson.is_premium ? <Badge className="bg-accent text-accent-foreground">Premium</Badge> : <Badge variant="outline">Gratis</Badge>}
      </div>
      <h1 className="mt-3 font-serif text-3xl font-semibold md:text-4xl">{lesson.title}</h1>
      <p className="mt-2 text-muted-foreground">{lesson.description}</p>
      {levelInfo && <p className="mt-2 text-sm text-muted-foreground"><span className="font-medium text-foreground">{levelInfo.label}:</span> {levelInfo.description}</p>}
      {lesson.topic_slug && <LevelSwitch topicSlug={lesson.topic_slug} currentSlug={lesson.slug} />}

      <div className="mt-6"><TranslationControls lang={lang} setLang={setLang} visible={visible} setVisible={setVisible} /></div>

      <div className="mt-6 rounded-2xl border border-border bg-card p-4">
        <div className="flex flex-wrap gap-2">{sections.map((s, i) => <button key={s.id} onClick={() => setSectionIndex(i)} className={i === current ? "rounded-full bg-foreground px-3 py-1.5 text-sm text-background" : "rounded-full border border-border px-3 py-1.5 text-sm hover:bg-muted"}><span className="mr-1 text-xs opacity-70">{i + 1}</span>{s.label}</button>)}</div>
        <div className="mt-3 flex items-center gap-3"><Progress value={((current + 1) / sections.length) * 100} className="flex-1" /><span className="text-xs text-muted-foreground">Schritt {current + 1}/{sections.length}</span></div>
      </div>

      <div className="mt-6">{section?.render()}</div>
      <div className="mt-8 flex items-center justify-between"><Button variant="outline" disabled={current === 0} onClick={() => setSectionIndex(current - 1)}><ChevronLeft className="mr-1 h-4 w-4" />Zurück</Button><Button disabled={current >= sections.length - 1} onClick={() => setSectionIndex(current + 1)}>Weiter<ChevronRight className="ml-1 h-4 w-4" /></Button></div>
    </div>
  );
}

type VisualChapter = { imageKey: string | null; scenes: Scene[] };

function buildVisualChapters(scenes: Scene[], fallbackKey: string | null, target = STANDARD_SITUATIONS): VisualChapter[] {
  const ordered = [...scenes].sort((a, b) => a.position - b.position);
  if (!ordered.length) return [];
  const wanted = Math.max(1, target);
  const chapters: VisualChapter[] = [];

  if (ordered.length >= wanted) {
    for (let i = 0; i < wanted; i++) {
      const start = Math.floor((i * ordered.length) / wanted);
      const end = Math.max(start + 1, Math.floor(((i + 1) * ordered.length) / wanted));
      const slice = ordered.slice(start, end);
      chapters.push({ imageKey: slice[0]?.image_key ?? fallbackKey, scenes: slice });
    }
    return chapters;
  }

  for (let i = 0; i < wanted; i++) {
    if (i < ordered.length) {
      const scene = ordered[i] as Scene;
      chapters.push({ imageKey: scene.image_key ?? fallbackKey, scenes: [scene] });
      continue;
    }
    const source = ordered[(i - ordered.length) % ordered.length] as Scene;
    const review: Scene = {
      ...source,
      id: `${source.id}-lerncheck-${i + 1}`,
      position: 1000 + i,
      german_text: `Lerncheck: ${source.german_text}`,
      hint: source.hint ?? "Sprich den Satz laut nach und formuliere ihn danach mit eigenen Worten.",
    };
    chapters.push({ imageKey: source.image_key ?? fallbackKey, scenes: [review] });
  }
  return chapters;
}

function SceneStory({ scenes, fallbackKey, translate, langLabel, preview }: { scenes: Scene[]; fallbackKey: string | null; translate: (t: Record<string, string> | null | undefined) => string; langLabel: string; preview: boolean }) {
  const target = preview ? Math.max(1, Math.min(FREE_PREVIEW_SCENES, scenes.length)) : STANDARD_SITUATIONS;
  const chapters = useMemo(() => buildVisualChapters(scenes, fallbackKey, target), [scenes, fallbackKey, target]);
  const [index, setIndex] = useState(0);
  if (!chapters.length) return <p className="text-muted-foreground">Keine Szenen hinterlegt.</p>;
  const total = chapters.length;
  const chapter = chapters[Math.min(index, total - 1)];
  if (!chapter) return null;
  const first = chapter.scenes[0];

  return (
    <div className="overflow-hidden rounded-3xl border border-border bg-card">
      <img src={lessonImage(chapter.imageKey)} alt={first?.german_text ?? "Lernsituation"} className="aspect-video w-full object-cover" />
      <div className="border-t border-border p-6">
        {preview && <div className="mb-3 inline-flex rounded-full bg-muted px-3 py-1 text-xs uppercase tracking-widest text-muted-foreground">Kostenlose Vorschau</div>}
        <div className="mb-4 flex items-center justify-between gap-3">
          <div className="text-xs uppercase tracking-widest text-muted-foreground">Situation {index + 1} von {total}</div>
          <div className="text-xs text-muted-foreground">{chapter.scenes.length} Lernschritt{chapter.scenes.length === 1 ? "" : "e"}</div>
        </div>
        <div className="space-y-5">
          {chapter.scenes.map((scene, sceneIndex) => (
            <div key={scene.id} className={sceneIndex === 0 ? "" : "border-t border-border pt-5"}>
              <div className="font-serif text-2xl leading-snug">{scene.german_text}</div>
              <Translated text={translate(scene.translations)} langLabel={langLabel} />
              {scene.hint && <div className="mt-3 rounded-xl border border-border bg-muted/50 p-3 text-sm text-muted-foreground"><span className="mr-1 text-xs uppercase tracking-widest">Lerntipp</span>{scene.hint}</div>}
            </div>
          ))}
        </div>
        <div className="mt-6 flex items-center gap-3">
          <Button variant="outline" size="icon" disabled={index === 0} onClick={() => setIndex((i) => Math.max(i - 1, 0))}><ChevronLeft className="h-4 w-4" /></Button>
          <Progress value={((index + 1) / total) * 100} className="flex-1" />
          <span className="text-xs text-muted-foreground">Situation {index + 1}/{total}</span>
          <Button variant="outline" size="icon" disabled={index >= total - 1} onClick={() => setIndex((i) => Math.min(i + 1, total - 1))}><ChevronRight className="h-4 w-4" /></Button>
        </div>
      </div>
    </div>
  );
}

function VocabSection({ vocab, scenes, translate, langLabel }: { vocab: Array<{ id: string; article?: string | null; word?: string; term?: string; plural?: string | null; example?: string | null; translations?: Record<string, string> }>; scenes: Scene[]; translate: (t: Record<string, string> | null | undefined) => string; langLabel: string }) {
  if (!vocab.length) return <FallbackVocabSection scenes={scenes} />;
  return <div className="grid gap-3 md:grid-cols-2">{vocab.map((v) => { const word = v.word ?? v.term ?? ""; return <div key={v.id} className="rounded-2xl border border-border bg-card p-4"><div className="font-serif text-xl font-semibold">{v.article ? `${v.article} ` : ""}{word}</div>{v.plural && <div className="text-xs text-muted-foreground">Plural: {v.plural}</div>}{v.example && <p className="mt-2 text-sm">{v.example}</p>}<Translated text={translate(v.translations)} langLabel={langLabel} /></div>; })}</div>;
}

function FallbackVocabSection({ scenes }: { scenes: Scene[] }) {
  const stop = new Set(["aber", "auch", "dass", "dann", "eine", "einen", "einer", "einem", "eines", "oder", "sich", "nicht", "noch", "wird", "werden", "kann", "können", "möchte", "sagt", "fragt", "geht", "kommt", "macht"]);
  const words = scenes.flatMap((s) => s.german_text.replace(/[„“.,!?():]/g, " ").split(/\s+/)).map((w) => w.trim()).filter((w) => w.length > 4 && !stop.has(w.toLowerCase()));
  const unique = [...new Set(words.map((w) => w.toLowerCase()))].slice(0, 16);
  return <div><p className="mb-4 text-sm text-muted-foreground">Wichtige Wörter aus dieser Situation. Sprich sie laut und suche sie danach in den Sätzen wieder.</p><div className="flex flex-wrap gap-2">{unique.map((w) => <span key={w} className="rounded-full border border-border bg-card px-3 py-2 text-sm capitalize">{w}</span>)}</div></div>;
}

function PlaceSection({ items, fallbackKey, translate, langLabel }: { items: Array<PlaceItem & { id?: string; label?: string; sentence?: string }>; fallbackKey: string | null; translate: (t: Record<string, string> | null | undefined) => string; langLabel: string }) {
  return <div><h3 className="font-serif text-xl font-semibold">Wo ist was?</h3><div className="mt-4 grid gap-4 md:grid-cols-2">{items.map((it, i) => { const label = it.label ?? it.german_text ?? `Bildaufgabe ${i + 1}`; const sentence = it.sentence ?? (it.preposition ? `Präposition: ${it.preposition}` : "Beschreibe die Position im Bild."); return <div key={it.id ?? `${label}-${i}`} className="overflow-hidden rounded-2xl border border-border bg-card"><img src={lessonImage(it.image_key ?? fallbackKey)} alt={label} className="aspect-video w-full object-cover" /><div className="p-4"><div className="font-medium">{label}</div><div className="mt-1 text-sm text-muted-foreground">{sentence}</div><Translated text={translate(it.translations)} langLabel={langLabel} /></div></div>; })}</div></div>;
}

function FallbackPlaceSection({ fallbackKey }: { fallbackKey: string | null }) {
  const preps = [
    ["vor", "vor einer Person oder einem Ort"], ["hinter", "hinter einem Gegenstand oder einer Person"], ["neben", "direkt an der Seite"],
    ["zwischen", "in der Mitte von zwei Dingen"], ["auf", "auf einer Fläche"], ["in", "innerhalb eines Ortes"], ["gegenüber", "auf der anderen Seite"], ["an", "direkt an einer Stelle"],
  ];
  return <div><h3 className="font-serif text-xl font-semibold">Wo ist was?</h3><p className="mt-2 text-sm text-muted-foreground">Nutze das Bild als Orientierung und bilde eigene Sätze mit den wichtigsten Ortsangaben.</p><img src={lessonImage(fallbackKey)} alt="Orientierungsbild" className="mt-4 aspect-video w-full rounded-2xl border border-border object-cover" /><div className="mt-4 grid gap-3 sm:grid-cols-2">{preps.map(([p, e]) => <div key={p} className="rounded-xl border border-border bg-card p-3"><strong>{p}</strong><div className="mt-1 text-sm text-muted-foreground">{e}</div></div>)}</div></div>;
}

function dialogLineText(d: DialogLine): string {
  return ((d as unknown as { line?: string }).line ?? d.german_text ?? "").trim();
}

function DialogSection({ group, translate, langLabel }: { group: DialogGroup; translate: (t: Record<string, string> | null | undefined) => string; langLabel: string }) {
  return <div><h3 className="font-serif text-xl font-semibold">{group.title}</h3><div className="mt-4 space-y-3">{group.lines.map((d) => <div key={d.id} className="rounded-2xl border border-border bg-card p-4"><div className="text-xs uppercase tracking-widest text-muted-foreground">{d.speaker}</div><div className="mt-1 font-serif text-lg">{dialogLineText(d)}</div><Translated text={translate(d.translations)} langLabel={langLabel} /></div>)}</div></div>;
}

function buildFallbackDialog(title: string, scenes: Scene[], start: number): DialogGroup {
  const ordered = [...scenes].sort((a, b) => a.position - b.position);
  const base = ordered.slice(start, start + 10).length >= 4 ? ordered.slice(start, start + 10) : ordered.slice(0, 10);
  const lines = base.map((s, i) => ({
    id: `auto-dialog-${title}-${i}`,
    position: i + 1,
    dialog_index: title.includes("2") ? 2 : 1,
    dialog_title: title,
    speaker_role: i % 2 === 0 ? "lernende" : "gespraechspartner",
    speaker: i % 2 === 0 ? "Person A" : "Person B",
    german_text: s.german_text,
    translations: s.translations,
  })) as DialogLine[];
  return { title, lines };
}

function GrammarSection({ notes }: { notes: GrammarNote[] }) {
  return <div className="grid gap-3 md:grid-cols-2">{notes.map((n, i) => <div key={`${n.title}-${i}`} className="rounded-2xl border border-border bg-card p-4"><div className="font-medium">{n.title}</div><p className="mt-2 text-sm text-muted-foreground">{n.explanation}</p>{n.examples?.length ? <ul className="mt-3 space-y-1 text-sm">{n.examples.map((e) => <li key={e}>• {e}</li>)}</ul> : null}</div>)}</div>;
}

function levelGrammarNotes(level: string): GrammarNote[] {
  if (level === "A1") return [
    { title: "Artikel", explanation: "Lerne Nomen immer zusammen mit der, die oder das.", examples: ["der Termin", "die Karte", "das Ticket"] },
    { title: "Einfach fragen", explanation: "Kurze W-Fragen und Ja/Nein-Fragen helfen in Alltagssituationen.", examples: ["Wo ist …?", "Haben Sie …?", "Kann ich …?"] },
    { title: "Höflich bitten", explanation: "Mit bitte und einfachen Wendungen klingt eine Bitte freundlich.", examples: ["Ich hätte gern …", "Bitte helfen Sie mir.", "Danke."] },
  ];
  if (level === "A2") return [
    { title: "Akkusativ und Dativ", explanation: "Achte bei Artikeln auf die Funktion im Satz und auf Präpositionen.", examples: ["Ich brauche den Termin.", "Ich fahre mit dem Bus.", "Ich bin in der Praxis."] },
    { title: "Gründe nennen", explanation: "Mit weil erklärst du einen einfachen Grund. Das Verb steht im Nebensatz am Ende.", examples: ["Ich frage nach, weil ich unsicher bin.", "Ich komme später, weil der Bus verspätet ist."] },
    { title: "Vergleichen", explanation: "Mit Komparativ und als vergleichst du zwei Möglichkeiten.", examples: ["Diese Verbindung ist schneller als die andere.", "Das ist günstiger."] },
  ];
  return [
    { title: "Begründen und erklären", explanation: "Auf B1 verbindest du Informationen und erklärst Ursachen, Folgen und Probleme.", examples: ["Das ist problematisch, weil …", "Deshalb möchte ich …", "Obwohl …, kann ich …"] },
    { title: "Rückfragen und bestätigen", explanation: "Prüfe Informationen aktiv und formuliere Rückfragen höflich.", examples: ["Habe ich Sie richtig verstanden, dass …?", "Könnten Sie das genauer erklären?"] },
    { title: "Meinung und Lösung", explanation: "Äußere eine Einschätzung und begründe einen Lösungsvorschlag.", examples: ["Meiner Meinung nach wäre es besser, wenn …", "Ich würde vorschlagen, dass …"] },
  ];
}

function buildDialogExercise(groups: DialogGroup[], scenes: Scene[]): Question {
  const dialogLines = groups.flatMap((g) => g.lines).map((l) => `${l.speaker}: ${dialogLineText(l)}`).filter(Boolean).slice(0, 10);
  const items = dialogLines.length >= 4 ? dialogLines : [...scenes].sort((a, b) => a.position - b.position).slice(0, 8).map((s, i) => `${i % 2 === 0 ? "Person A" : "Person B"}: ${s.german_text}`);
  return {
    id: "auto-dialog-builder",
    position: 999,
    kind: "dialog_order",
    prompt: "Baue das Gespräch in die richtige Reihenfolge.",
    explanation: "Die Reihenfolge folgt einem natürlichen Gespräch: Einstieg, Anliegen, Rückfragen, Lösung und Abschluss.",
    section: "dialog_builder",
    data: { items },
    quiz_answers: [],
  };
}

function makeStoryQuestions(scenes: Scene[], section: "practice" | "test", count: number): Question[] {
  if (!scenes.length || count <= 0) return [];
  const ordered = [...scenes].sort((a, b) => a.position - b.position);
  const result: Question[] = [];
  for (let i = 0; i < count; i++) {
    const current = ordered[i % ordered.length] as Scene;
    if (i % 5 === 4 && ordered.length >= 3) {
      const a = ordered[i % ordered.length] as Scene;
      const b = ordered[(i + 1) % ordered.length] as Scene;
      const c = ordered[(i + 2) % ordered.length] as Scene;
      result.push({
        id: `auto-${section}-order-${i}`,
        position: 5000 + i,
        kind: "order",
        prompt: "Bringe diese drei Schritte in eine sinnvolle Reihenfolge.",
        explanation: "Orientiere dich am Ablauf der Situation.",
        section,
        data: { items: [a.german_text, b.german_text, c.german_text] },
        quiz_answers: [],
      });
      continue;
    }
    const distractors = [1, 2, 3].map((offset) => ordered[(i + offset * 3) % ordered.length] as Scene).filter((s) => s.id !== current.id).slice(0, 3);
    const answers = [current, ...distractors].map((s, idx) => ({ id: `auto-${section}-${i}-a${idx}`, position: idx + 1, text: s.german_text, is_correct: s.id === current.id }));
    result.push({
      id: `auto-${section}-choice-${i}`,
      position: 5000 + i,
      kind: "single_choice",
      prompt: i % 2 === 0 ? "Welche Aussage passt zu diesem Teil der Situation?" : "Welche Aussage gehört logisch in den Ablauf?",
      explanation: "Die richtige Antwort entspricht dem gelernten Ablauf und Wortschatz dieser Lektion.",
      section,
      data: current.image_key ? { image_key: current.image_key } : null,
      quiz_answers: answers,
    });
  }
  return result;
}

function LevelSwitch({ topicSlug, currentSlug }: { topicSlug: string; currentSlug: string }) {
  const { data } = useQuery(topicLessonsQuery(topicSlug));
  const siblings = data ?? [];
  if (siblings.length < 2) return null;
  return <div className="mt-5 flex flex-wrap items-center gap-2 rounded-2xl border border-border bg-card px-4 py-3"><span className="mr-1 text-xs uppercase tracking-widest text-muted-foreground">Niveau wählen</span>{siblings.map((s) => <Link key={s.id} to="/lektion/$slug" params={{ slug: s.slug }} className={s.slug === currentSlug ? "rounded-full bg-foreground px-3 py-1.5 text-sm text-background" : "rounded-full border border-border px-3 py-1.5 text-sm hover:bg-muted"}>{s.level}{s.is_premium ? " · Premium" : " · Gratis"}</Link>)}<Link to="/thema/$slug" params={{ slug: topicSlug }} className="ml-auto text-sm text-muted-foreground hover:text-foreground">Themenübersicht</Link></div>;
}
