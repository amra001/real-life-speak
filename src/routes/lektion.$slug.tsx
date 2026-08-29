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
    const map = new Map<number, { title: string; lines: DialogLine[] }>();
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
  const fullAccess = isPremium || !lesson.is_premium;
  const visibleScenes = fullAccess ? scenes : scenes.slice(0, FREE_PREVIEW_SCENES);
  const placeItems = (lesson.place_items ?? []) as PlaceItem[];
  const grammarNotes = (lesson.grammar_notes ?? []) as GrammarNote[];

  const grammarQuestions = questions.filter((q) => q.section === "grammar");
  const placeQuestions = questions.filter((q) => q.section === "places");
  const dialogBuilderQuestions = questions.filter((q) => q.section === "dialog_builder");
  const testQuestions = questions.filter((q) => q.section === "test");
  const practiceQuestions = questions.filter((q) => !["grammar", "places", "dialog_builder", "test"].includes(q.section ?? ""));

  const sections: Section[] = [];
  sections.push({ id: "situation", label: "Situation", render: () => <SceneStory scenes={visibleScenes} fallbackKey={lesson.thumbnail_key} translate={tr} langLabel={langLabel} preview={!fullAccess} /> });
  sections.push({ id: "woerter", label: "Wörter lernen", render: () => fullAccess ? <VocabSection vocab={vocab} translate={tr} langLabel={langLabel} /> : <><VocabSection vocab={vocab.slice(0, 3)} translate={tr} langLabel={langLabel} /><PremiumGate preview /></> });

  if (placeItems.length || placeQuestions.length) sections.push({
    id: "orte",
    label: "Wo ist was?",
    render: () => fullAccess ? <div className="space-y-6"><PlaceSection items={placeItems} fallbackKey={lesson.thumbnail_key} translate={tr} langLabel={langLabel} />{placeQuestions.length > 0 && <div><h3 className="mb-3 font-serif text-xl font-semibold">Jetzt selbst üben</h3><p className="mb-4 text-sm text-muted-foreground">Schau bei jeder Aufgabe zuerst auf das Bild. Die Position im Bild entscheidet über die richtige Präposition.</p><Exercises questions={placeQuestions} lang={lang} /></div>}</div> : <PremiumGate preview />,
  });

  dialogGroups.forEach((g, i) => sections.push({ id: `dialog-${i + 1}`, label: `Dialog ${i + 1}`, render: () => fullAccess ? <DialogSection group={g} translate={tr} langLabel={langLabel} /> : <PremiumGate preview /> }));

  if (grammarNotes.length || grammarQuestions.length) sections.push({
    id: "grammatik",
    label: "Sprache & Grammatik",
    render: () => fullAccess ? <div className="space-y-6"><GrammarSection notes={grammarNotes} />{grammarQuestions.length > 0 && <div><h3 className="mb-3 font-serif text-xl font-semibold">Grammatik aktiv üben</h3><Exercises questions={grammarQuestions} lang={lang} /></div>}</div> : <PremiumGate preview />,
  });

  if (practiceQuestions.length) sections.push({ id: "uebungen", label: "Übungen", render: () => fullAccess ? <Exercises questions={practiceQuestions} lang={lang} /> : <PremiumGate preview /> });

  const builder = dialogBuilderQuestions.length ? dialogBuilderQuestions : (() => {
    const fallback = buildDialogExercise(dialogGroups);
    return fallback ? [fallback] : [];
  })();
  if (builder.length) sections.push({
    id: "dialog-bauen",
    label: "Dialog bauen",
    render: () => fullAccess ? <div><h3 className="font-serif text-xl font-semibold">Jetzt bist du dran</h3><p className="mt-2 mb-4 text-sm text-muted-foreground">Die Gesprächsteile sind gemischt. Ordne sie so, dass ein realistischer Einkauf mit logisch passenden Fragen und Antworten entsteht.</p><Exercises questions={builder} lang={lang} /></div> : <PremiumGate preview />,
  });

  if (testQuestions.length) sections.push({ id: "test", label: "Abschlusstest", render: () => fullAccess ? <Exercises questions={testQuestions} lang={lang} title="Abschlusstest" onFinish={(score, total) => void saveProgress(score, total)} /> : <PremiumGate preview /> });

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
        {lesson.is_premium ? <Badge className="bg-accent text-accent-foreground">Premium</Badge> : <Badge variant="outline">Gratis</Badge>}
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

function buildVisualChapters(scenes: Scene[], fallbackKey: string | null): VisualChapter[] {
  const ordered = [...scenes].sort((a, b) => a.position - b.position);
  const chapters: VisualChapter[] = [];
  const MAX_TEXTS_PER_IMAGE = 4;

  for (const scene of ordered) {
    const imageKey = scene.image_key ?? fallbackKey;
    const last = chapters[chapters.length - 1];
    if (last && last.imageKey === imageKey && last.scenes.length < MAX_TEXTS_PER_IMAGE) {
      last.scenes.push(scene);
    } else {
      chapters.push({ imageKey, scenes: [scene] });
    }
  }
  return chapters;
}

function SceneStory({ scenes, fallbackKey, translate, langLabel, preview }: { scenes: Scene[]; fallbackKey: string | null; translate: (t: Record<string, string> | null | undefined) => string; langLabel: string; preview: boolean }) {
  const chapters = useMemo(() => buildVisualChapters(scenes, fallbackKey), [scenes, fallbackKey]);
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

function VocabSection({ vocab, translate, langLabel }: { vocab: import("@/lib/data").Vocab[]; translate: (t: Record<string, string> | null | undefined) => string; langLabel: string }) {
  if (!vocab.length) return <p className="text-muted-foreground">Keine Vokabeln hinterlegt.</p>;
  return <div className="grid gap-3 sm:grid-cols-2">{vocab.map((v) => <div key={v.id} className="rounded-xl border border-border bg-card p-4"><div className="font-medium">{v.article ? `${v.article} ` : ""}{v.term.replace(/^(der|die|das)\s+/i, "")}</div><div className="mt-0.5 flex flex-wrap gap-2 text-xs text-muted-foreground">{v.word_class && <span className="rounded-full bg-muted px-2 py-0.5">{v.word_class}</span>}{v.plural && <span className="rounded-full bg-muted px-2 py-0.5">Pl.: {v.plural}</span>}</div><Translated text={translate(v.translations)} langLabel={langLabel} />{v.example && <div className="mt-3 border-t border-border pt-3"><div className="text-sm">{v.example}</div><Translated text={translate(v.example_translations)} langLabel={langLabel} className="mt-0.5 text-sm text-muted-foreground" /></div>}</div>)}</div>;
}

function PlaceSection({ items, fallbackKey, translate, langLabel }: { items: PlaceItem[]; fallbackKey: string | null; translate: (t: Record<string, string> | null | undefined) => string; langLabel: string }) {
  if (!items.length) return null;
  return <div><h3 className="flex items-center gap-2 font-serif text-xl font-semibold"><MapPin className="h-4 w-4" />Wo ist was? – zuerst ansehen</h3><p className="mt-2 text-sm text-muted-foreground">Lerne die Beispiele mit dem Bild. Danach kommen 10 Bildaufgaben, bei denen du die Präposition selbst wählen musst.</p><div className="mt-4 grid gap-4 sm:grid-cols-2">{items.map((it, i) => <div key={i} className="overflow-hidden rounded-2xl border border-border bg-card"><img src={lessonImage(it.image_key ?? fallbackKey)} alt={it.german_text} className="aspect-video w-full object-cover" /><div className="p-4"><div>{it.german_text} <Badge variant="outline" className="ml-1 font-normal">{it.preposition}</Badge></div><Translated text={translate(it.translations)} langLabel={langLabel} /></div></div>)}</div></div>;
}

function DialogSection({ group, translate, langLabel }: { group: { title: string; lines: DialogLine[] }; translate: (t: Record<string, string> | null | undefined) => string; langLabel: string }) {
  return <div className="space-y-3"><h3 className="font-serif text-xl font-semibold">{group.title}</h3>{group.lines.map((d) => <div key={d.id} className={d.speaker === "A" ? "max-w-[85%] rounded-2xl rounded-bl-sm border border-border bg-card p-4" : "ml-auto max-w-[85%] rounded-2xl rounded-br-sm bg-muted p-4"}><div className="text-xs uppercase tracking-widest text-muted-foreground">{d.speaker_role || `Person ${d.speaker}`}</div><div className="mt-1">{d.german_text}</div><Translated text={translate(d.translations)} langLabel={langLabel} /></div>)}</div>;
}

function GrammarSection({ notes }: { notes: GrammarNote[] }) {
  return <div className="space-y-4">{notes.map((n, i) => <div key={i} className="rounded-2xl border border-border bg-card p-5"><h3 className="font-serif text-lg font-semibold">{n.title}</h3><p className="mt-2 text-sm text-muted-foreground">{n.explanation}</p><ul className="mt-3 space-y-1 text-sm">{(n.examples ?? []).map((e, j) => <li key={j}>· {e}</li>)}</ul></div>)}</div>;
}

function buildDialogExercise(groups: { title: string; lines: DialogLine[] }[]): Question | null {
  const group = groups.find((g) => g.lines.length >= 6);
  if (!group) return null;
  return { id: `dialog-builder-${group.title}`, position: 0, kind: "dialog_order", prompt: `Bringe den Dialog „${group.title}“ in die richtige Reihenfolge.`, explanation: "Achte auf logisch passende Fragen und Antworten.", section: "dialog_builder", data: { items: group.lines.slice(0, 12).map((l) => `${l.speaker_role || `Person ${l.speaker}`}: ${l.german_text}`) }, quiz_answers: [] };
}

function LevelSwitch({ topicSlug, currentSlug }: { topicSlug: string; currentSlug: string }) {
  const { data } = useQuery(topicLessonsQuery(topicSlug));
  const siblings = (data ?? []).slice().sort((a, b) => a.level.localeCompare(b.level));
  if (siblings.length < 2) return null;
  return <div className="mt-5 flex flex-wrap items-center gap-2 rounded-2xl border border-border bg-card px-4 py-3"><span className="mr-1 text-xs uppercase tracking-widest text-muted-foreground">Niveau wählen</span>{siblings.map((s) => <Link key={s.id} to="/lektion/$slug" params={{ slug: s.slug }} className={s.slug === currentSlug ? "rounded-full bg-foreground px-3 py-1.5 text-sm text-background" : "rounded-full border border-border px-3 py-1.5 text-sm hover:bg-muted"}>{s.level}{s.is_premium ? " · Premium" : " · Gratis"}</Link>)}<Link to="/thema/$slug" params={{ slug: topicSlug }} className="ml-auto text-sm text-muted-foreground hover:text-foreground">Themenübersicht</Link></div>;
}
