import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, Lock, RotateCcw, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TranslationControls } from "@/components/site/TranslationControls";
import { lessonQuery, type Question } from "@/lib/data";
import { lessonImage } from "@/lib/lesson-images";
import {
  categoryName,
  formatDuration,
  FREE_MAX_SECONDS,
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

function PremiumGate({ preview }: { preview: boolean }) {
  return (
    <div className="mt-6 rounded-3xl border border-border bg-card p-8 text-center md:p-10">
      <Lock className="mx-auto h-8 w-8 text-accent" />
      <h2 className="mt-4 font-serif text-xl font-semibold">
        Diese Lektion ist Teil von Premium.
      </h2>
      <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
        {preview
          ? "Du hast die kostenlose Vorschau gesehen. Mit Premium schaltest du die komplette Lektion, alle Vokabeln, den Dialog und das vollständige Quiz frei."
          : "Mit Premium erhältst du Zugriff auf die komplette Lernbibliothek, alle Kategorien, Berufsmodule, Übersetzungssprachen und Quiz."}
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <Button asChild>
          <Link to="/preise">
            <Sparkles className="mr-2 h-4 w-4" /> Premium freischalten
          </Link>
        </Button>
        <Button asChild variant="outline">
          <Link to="/lektionen">Kostenlose Lektionen</Link>
        </Button>
      </div>
    </div>
  );
}

function LessonPage() {
  const { slug } = Route.useParams();
  const { data, isLoading } = useQuery(lessonQuery(slug));
  const { user } = useAuth();
  const { isPremium } = usePremium();
  const { lang, setLang, visible, setVisible, translate } = useTranslationPreference();
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
  const region = REGIONS.find((r) => r.slug === lesson.region);
  const levelInfo = LEVEL_INFO[lesson.level as Level];

  // Free/Premium: Premium-Lektionen zeigen nur eine kurze Vorschau.
  const requiresPremium = lesson.is_premium || lesson.duration_seconds > FREE_MAX_SECONDS;
  const fullAccess = isPremium || !requiresPremium;
  const visibleScenes = fullAccess ? scenes : scenes.slice(0, FREE_PREVIEW_SCENES);
  const visibleVocab = fullAccess ? vocab : vocab.slice(0, 2);
  const visibleQuestions = fullAccess ? questions : questions.slice(0, 1);

  const safeStep = Math.min(step, Math.max(visibleScenes.length - 1, 0));
  const scene = visibleScenes[safeStep];

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
        <Badge variant="outline">
          {categoryName(lesson.subcategory_slug ?? lesson.category_slug)}
        </Badge>
        <Badge variant="outline">{formatDuration(lesson.duration_seconds)}</Badge>
        {region && (
          <Badge variant="outline">
            {region.flag} {region.label}
          </Badge>
        )}
        {requiresPremium ? (
          <Badge className="bg-accent text-accent-foreground">Premium</Badge>
        ) : (
          <Badge variant="outline">Gratis</Badge>
        )}
      </div>
      <h1 className="mt-3 font-serif text-3xl font-semibold md:text-4xl">{lesson.title}</h1>
      <p className="mt-2 text-muted-foreground">{lesson.description}</p>
      {levelInfo && (
        <p className="mt-2 text-sm text-muted-foreground">
          <span className="font-medium text-foreground">{levelInfo.label}:</span>{" "}
          {levelInfo.description}
        </p>
      )}

      <div className="mt-6">
        <TranslationControls
          lang={lang}
          setLang={setLang}
          visible={visible}
          setVisible={setVisible}
        />
      </div>

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
            {!fullAccess && (
              <div className="mb-3 inline-flex rounded-full bg-muted px-3 py-1 text-xs uppercase tracking-widest text-muted-foreground">
                Kostenlose Vorschau
              </div>
            )}
            <div className="font-serif text-2xl leading-snug">{scene.german_text}</div>
            {translate(scene.translations) && (
              <div className="mt-2 text-sm text-muted-foreground">
                {translate(scene.translations)}
              </div>
            )}
            <div className="mt-5 flex items-center gap-3">
              <Button
                variant="outline"
                size="icon"
                disabled={safeStep === 0}
                onClick={() => setStep((s) => Math.max(s - 1, 0))}
                aria-label="Vorherige Szene"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Progress
                value={((safeStep + 1) / Math.max(visibleScenes.length, 1)) * 100}
                className="flex-1"
              />
              <span className="text-xs text-muted-foreground">
                {safeStep + 1}/{visibleScenes.length}
              </span>
              <Button
                variant="outline"
                size="icon"
                disabled={safeStep >= visibleScenes.length - 1}
                onClick={() => setStep((s) => s + 1)}
                aria-label="Nächste Szene"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        )}
      </div>

      {!fullAccess && <PremiumGate preview={visibleScenes.length > 0} />}

      <Tabs defaultValue="vokabeln" className="mt-8">
        <TabsList>
          <TabsTrigger value="vokabeln">Vokabeln</TabsTrigger>
          <TabsTrigger value="dialog">Dialog</TabsTrigger>
          <TabsTrigger value="quiz">Quiz</TabsTrigger>
        </TabsList>

        <TabsContent value="vokabeln" className="mt-5">
          <div className="grid gap-3 sm:grid-cols-2">
            {visibleVocab.map((v) => (
              <div key={v.id} className="rounded-xl border border-border bg-card p-4">
                <div className="font-medium">{v.term}</div>
                <div className="text-sm text-muted-foreground">{translate(v.translations)}</div>
              </div>
            ))}
            {!visibleVocab.length && (
              <p className="text-muted-foreground">Keine Vokabeln hinterlegt.</p>
            )}
          </div>
          {!fullAccess && vocab.length > visibleVocab.length && (
            <p className="mt-4 text-sm text-muted-foreground">
              {vocab.length - visibleVocab.length} weitere Vokabeln sind Teil von Premium.
            </p>
          )}
        </TabsContent>

        <TabsContent value="dialog" className="mt-5 space-y-3">
          {fullAccess ? (
            <>
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
                  <div className="text-sm text-muted-foreground">{translate(d.translations)}</div>
                </div>
              ))}
              {!dialog.length && <p className="text-muted-foreground">Kein Dialog hinterlegt.</p>}
            </>
          ) : (
            <PremiumGate preview={false} />
          )}
        </TabsContent>

        <TabsContent value="quiz" className="mt-5">
          <Quiz
            questions={visibleQuestions}
            lessonId={lesson.id}
            userId={user?.id}
            locked={!fullAccess && questions.length > visibleQuestions.length}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}

const KIND_LABEL: Record<string, string> = {
  multiple_choice: "Multiple Choice",
  true_false: "Richtig oder falsch",
  gap: "Lückentext",
  complete: "Satz vervollständigen",
  listening: "Hörverstehen",
  order: "Reihenfolge",
  match: "Wort-Bild-Zuordnung",
};

function Quiz({
  questions,
  lessonId,
  userId,
  locked,
}: {
  questions: Question[];
  lessonId: string;
  userId: string | undefined;
  locked?: boolean;
}) {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [texts, setTexts] = useState<Record<string, string>>({});
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

  const isTextKind = (kind: string) => kind === "gap" || kind === "complete";

  const isCorrect = (q: (typeof sorted)[number]): boolean => {
    if (isTextKind(q.kind ?? "multiple_choice")) {
      const solution = q.quiz_answers.find((a) => a.is_correct)?.text ?? "";
      return (
        !!solution &&
        (texts[q.id] ?? "").trim().toLowerCase() === solution.trim().toLowerCase()
      );
    }
    return !!q.quiz_answers.find((a) => a.id === answers[q.id])?.is_correct;
  };

  const answeredCount = sorted.filter((q) =>
    isTextKind(q.kind ?? "multiple_choice") ? (texts[q.id] ?? "").trim() : answers[q.id],
  ).length;

  const score = sorted.filter(isCorrect).length;

  async function submit() {
    setSubmitted(true);
    if (!userId) return;
    const correct = sorted.filter(isCorrect).length;
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
      {sorted.map((q, i) => {
        const kind = q.kind ?? "multiple_choice";
        const correct = isCorrect(q);
        return (
          <div key={q.id} className="rounded-2xl border border-border bg-card p-5">
            <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground">
              <span>Frage {i + 1}</span>
              <Badge variant="outline" className="font-normal normal-case">
                {KIND_LABEL[kind] ?? "Multiple Choice"}
              </Badge>
            </div>
            <div className="mt-2 font-medium">{q.prompt}</div>

            {isTextKind(kind) ? (
              <Input
                className="mt-4"
                placeholder="Antwort eingeben"
                value={texts[q.id] ?? ""}
                disabled={submitted}
                onChange={(e) => setTexts((p) => ({ ...p, [q.id]: e.target.value }))}
              />
            ) : (
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
            )}

            {submitted && (
              <div className="mt-3 space-y-1">
                {isTextKind(kind) && (
                  <p className={`text-sm ${correct ? "text-success" : "text-destructive"}`}>
                    {correct
                      ? "Richtig!"
                      : `Richtige Antwort: ${q.quiz_answers.find((a) => a.is_correct)?.text ?? ""}`}
                  </p>
                )}
                {!correct && q.explanation && (
                  <p className="text-sm text-muted-foreground">{q.explanation}</p>
                )}
              </div>
            )}
          </div>
        );
      })}

      {locked && (
        <div className="rounded-2xl border border-dashed border-border p-5 text-sm text-muted-foreground">
          Das vollständige Quiz mit allen Aufgabentypen ist Teil von Premium.{" "}
          <Link to="/preise" className="font-medium text-foreground hover:underline">
            Premium freischalten
          </Link>
        </div>
      )}

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
              setTexts({});
              setSubmitted(false);
            }}
          >
            <RotateCcw className="mr-2 h-4 w-4" /> Nochmal
          </Button>
        </div>
      ) : (
        <Button
          onClick={submit}
          disabled={answeredCount < sorted.length}
          className="w-full sm:w-auto"
        >
          Auswerten
        </Button>
      )}
    </div>
  );
}
