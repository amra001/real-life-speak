import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, Lock, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { lessonQuery, type Question } from "@/lib/data";
import { lessonImage } from "@/lib/lesson-images";
import { categoryName, formatDuration, TRANSLATION_LANGS } from "@/lib/taxonomy";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export const Route = createFileRoute("/lektion/$slug")({
  head: ({ params }) => {
    const title = `Lektion: ${params.slug.replace(/-/g, " ")} – RealLife German`;
    return {
      meta: [
        { title },
        {
          name: "description",
          content:
            "Video-Lektion mit deutschen Untertiteln, Übersetzung, Vokabeln, Dialog und Quiz aus einer echten Alltagssituation.",
        },
        { property: "og:title", content: title },
        {
          property: "og:description",
          content: "Deutsch lernen an einer echten Situation – mit Vokabeln, Dialog und Quiz.",
        },
      ],
    };
  },
  component: LessonPage,
});

function LessonPage() {
  const { slug } = Route.useParams();
  const { data, isLoading } = useQuery(lessonQuery(slug));
  const { user } = useAuth();
  const [lang, setLang] = useState("tr");
  const [step, setStep] = useState(0);

  if (isLoading) return <div className="mx-auto max-w-4xl px-4 py-20">Lektion wird geladen …</div>;
  if (!data)
    return (
      <div className="mx-auto max-w-4xl px-4 py-20 text-center">
        <h1 className="font-serif text-2xl font-semibold">Lektion nicht gefunden</h1>
        <Button asChild className="mt-6">
          <Link to="/lektionen">Zur Bibliothek</Link>
        </Button>
      </div>
    );

  const { lesson, scenes, vocab, dialog, questions } = data;
  const locked = lesson.is_premium && !user;
  const scene = scenes[Math.min(step, Math.max(scenes.length - 1, 0))];
  const t = (tr: Record<string, string>) => (lang === "none" ? "" : (tr?.[lang] ?? ""));

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <Link
        to="/lektionen"
        className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground"
      >
        <ChevronLeft className="mr-1 h-4 w-4" /> Bibliothek
      </Link>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        <Badge variant="secondary">{lesson.level}</Badge>
        <Badge variant="outline">{categoryName(lesson.subcategory_slug ?? lesson.category_slug)}</Badge>
        <Badge variant="outline">{formatDuration(lesson.duration_seconds)}</Badge>
        {lesson.is_premium && (
          <Badge className="bg-accent text-accent-foreground">Premium</Badge>
        )}
      </div>
      <h1 className="mt-3 font-serif text-3xl font-semibold md:text-4xl">{lesson.title}</h1>
      <p className="mt-2 text-muted-foreground">{lesson.description}</p>

      <div className="mt-6 flex items-center justify-between gap-4">
        <div className="text-xs uppercase tracking-widest text-muted-foreground">Übersetzung</div>
        <Select value={lang} onValueChange={setLang}>
          <SelectTrigger className="w-52">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {TRANSLATION_LANGS.map((l) => (
              <SelectItem key={l.code} value={l.code}>
                {l.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {locked ? (
        <div className="mt-6 rounded-3xl border border-border bg-card p-10 text-center">
          <Lock className="mx-auto h-8 w-8 text-accent" />
          <h2 className="mt-4 font-serif text-xl font-semibold">Premium-Lektion</h2>
          <p className="mt-2 text-muted-foreground">
            Melde dich an, um diese Lektion vollständig anzusehen.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <Button asChild>
              <Link to="/auth">Anmelden</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/preise">Preise ansehen</Link>
            </Button>
          </div>
        </div>
      ) : (
        <>
          <div className="mt-6 overflow-hidden rounded-3xl border border-border bg-card">
            {lesson.video_url ? (
              <video src={lesson.video_url} controls className="aspect-video w-full bg-foreground" />
            ) : (
              <img
                src={lessonImage(lesson.thumbnail_key)}
                alt={lesson.title}
                className="aspect-video w-full object-cover"
              />
            )}
            {scene && (
              <div className="border-t border-border p-6">
                <div className="font-serif text-2xl leading-snug">{scene.german_text}</div>
                {t(scene.translations) && (
                  <div className="mt-2 text-sm text-muted-foreground">{t(scene.translations)}</div>
                )}
                <div className="mt-5 flex items-center gap-3">
                  <Button
                    variant="outline"
                    size="icon"
                    disabled={step === 0}
                    onClick={() => setStep((s) => s - 1)}
                    aria-label="Vorherige Szene"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Progress value={((step + 1) / scenes.length) * 100} className="flex-1" />
                  <span className="text-xs text-muted-foreground">
                    {step + 1}/{scenes.length}
                  </span>
                  <Button
                    variant="outline"
                    size="icon"
                    disabled={step >= scenes.length - 1}
                    onClick={() => setStep((s) => s + 1)}
                    aria-label="Nächste Szene"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            )}
          </div>

          <Tabs defaultValue="vokabeln" className="mt-8">
            <TabsList>
              <TabsTrigger value="vokabeln">Vokabeln</TabsTrigger>
              <TabsTrigger value="dialog">Dialog</TabsTrigger>
              <TabsTrigger value="quiz">Quiz</TabsTrigger>
            </TabsList>

            <TabsContent value="vokabeln" className="mt-5">
              <div className="grid gap-3 sm:grid-cols-2">
                {vocab.map((v) => (
                  <div key={v.id} className="rounded-xl border border-border bg-card p-4">
                    <div className="font-medium">{v.term}</div>
                    <div className="text-sm text-muted-foreground">{t(v.translations)}</div>
                  </div>
                ))}
                {!vocab.length && <p className="text-muted-foreground">Keine Vokabeln hinterlegt.</p>}
              </div>
            </TabsContent>

            <TabsContent value="dialog" className="mt-5 space-y-3">
              {dialog.map((d) => (
                <div
                  key={d.id}
                  className={
                    d.speaker === "A"
                      ? "max-w-[85%] rounded-2xl rounded-bl-sm border border-border bg-card p-4"
                      : "ml-auto max-w-[85%] rounded-2xl rounded-br-sm bg-muted p-4"
                  }
                >
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">
                    Person {d.speaker}
                  </div>
                  <div className="mt-1">{d.german_text}</div>
                  <div className="text-sm text-muted-foreground">{t(d.translations)}</div>
                </div>
              ))}
              {!dialog.length && <p className="text-muted-foreground">Kein Dialog hinterlegt.</p>}
            </TabsContent>

            <TabsContent value="quiz" className="mt-5">
              <Quiz questions={questions} lessonId={lesson.id} userId={user?.id} />
            </TabsContent>
          </Tabs>
        </>
      )}
    </div>
  );
}

function Quiz({
  questions,
  lessonId,
  userId,
}: {
  questions: Question[];
  lessonId: string;
  userId: string | undefined;
}) {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const sorted = useMemo(
    () =>
      questions.map((q) => ({
        ...q,
        quiz_answers: [...q.quiz_answers].sort((a, b) => a.position - b.position),
      })),
    [questions],
  );

  if (!sorted.length) return <p className="text-muted-foreground">Kein Quiz hinterlegt.</p>;

  const score = sorted.filter(
    (q) => q.quiz_answers.find((a) => a.id === answers[q.id])?.is_correct,
  ).length;

  async function submit() {
    setSubmitted(true);
    if (!userId) return;
    const correct = sorted.filter(
      (q) => q.quiz_answers.find((a) => a.id === answers[q.id])?.is_correct,
    ).length;
    const { error } = await supabase.from("user_progress").upsert(
      {
        user_id: userId,
        lesson_id: lessonId,
        completed: true,
        quiz_score: correct,
        quiz_total: sorted.length,
        updated_at: new Date().toISOString(),
      },
      { onConflict: "user_id,lesson_id" },
    );
    if (error) toast.error("Fortschritt konnte nicht gespeichert werden.");
    else toast.success("Fortschritt gespeichert.");
  }

  return (
    <div className="space-y-6">
      {sorted.map((q, i) => (
        <div key={q.id} className="rounded-2xl border border-border bg-card p-5">
          <div className="text-xs uppercase tracking-widest text-muted-foreground">
            Frage {i + 1}
          </div>
          <div className="mt-1 font-medium">{q.prompt}</div>
          <div className="mt-4 space-y-2">
            {q.quiz_answers.map((a) => {
              const selected = answers[q.id] === a.id;
              const state = submitted
                ? a.is_correct
                  ? "border-success bg-success/10"
                  : selected
                    ? "border-destructive bg-destructive/10"
                    : "border-border"
                : selected
                  ? "border-foreground"
                  : "border-border";
              return (
                <button
                  key={a.id}
                  disabled={submitted}
                  onClick={() => setAnswers((p) => ({ ...p, [q.id]: a.id }))}
                  className={`block w-full rounded-xl border px-4 py-3 text-left text-sm ${state}`}
                >
                  {a.text}
                </button>
              );
            })}
          </div>
          {submitted && q.explanation && (
            <p className="mt-3 text-sm text-muted-foreground">{q.explanation}</p>
          )}
        </div>
      ))}

      {submitted ? (
        <div className="flex flex-wrap items-center gap-4 rounded-2xl border border-border bg-card p-5">
          <div className="font-serif text-xl">
            {score} von {sorted.length} richtig
          </div>
          {!userId && (
            <span className="text-sm text-muted-foreground">
              Melde dich an, um deinen Fortschritt zu speichern.
            </span>
          )}
          <Button
            variant="outline"
            className="ml-auto"
            onClick={() => {
              setAnswers({});
              setSubmitted(false);
            }}
          >
            <RotateCcw className="mr-2 h-4 w-4" /> Nochmal
          </Button>
        </div>
      ) : (
        <Button
          onClick={submit}
          disabled={Object.keys(answers).length < sorted.length}
          className="w-full sm:w-auto"
        >
          Auswerten
        </Button>
      )}
    </div>
  );
}
