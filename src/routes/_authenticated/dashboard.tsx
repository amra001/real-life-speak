import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { Award, Clock, Star, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { LessonCard } from "@/components/site/LessonCard";
import { supabase } from "@/integrations/supabase/client";
import { lessonsQuery, type Lesson } from "@/lib/data";
import { useAuth, useIsAdmin } from "@/hooks/useAuth";

export const Route = createFileRoute("/_authenticated/dashboard")({
  head: () => ({
    meta: [
      { title: "Mein Lernfortschritt – RealLife German" },
      {
        name: "description",
        content: "Übersicht über abgeschlossene Lektionen, Quiz-Ergebnisse, Lernzeit und Favoriten.",
      },
      { property: "og:title", content: "Mein Lernfortschritt – RealLife German" },
      { property: "og:description", content: "Dein persönlicher Lernbereich." },
    ],
  }),
  component: Dashboard,
});

function Dashboard() {
  const { user } = useAuth();
  const isAdmin = useIsAdmin(user?.id);
  const { data: lessons } = useQuery(lessonsQuery());

  const { data: progress } = useQuery({
    queryKey: ["progress", user?.id],
    enabled: !!user,
    queryFn: async () => {
      const { data, error } = await supabase.from("user_progress").select("*");
      if (error) throw error;
      return data ?? [];
    },
  });

  const { data: favorites } = useQuery({
    queryKey: ["favorites", user?.id],
    enabled: !!user,
    queryFn: async () => {
      const { data, error } = await supabase.from("favorites").select("lesson_id");
      if (error) throw error;
      return (data ?? []).map((f) => f.lesson_id);
    },
  });

  const done = (progress ?? []).filter((p) => p.completed).length;
  const total = lessons?.length ?? 0;
  const scoreSum = (progress ?? []).reduce((a, p) => a + p.quiz_score, 0);
  const scoreTotal = (progress ?? []).reduce((a, p) => a + p.quiz_total, 0);
  const minutes = Math.round((progress ?? []).reduce((a, p) => a + p.seconds_learned, 0) / 60);
  const favLessons = (lessons ?? []).filter((l) => (favorites ?? []).includes(l.id));
  const next = (lessons ?? []).filter(
    (l) => !(progress ?? []).some((p) => p.lesson_id === l.id && p.completed),
  );

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="font-serif text-3xl font-semibold md:text-4xl">Dein Lernfortschritt</h1>
          <p className="mt-2 text-muted-foreground">{user?.email}</p>
        </div>
        {isAdmin && (
          <Button asChild variant="outline">
            <Link to="/admin">Adminbereich</Link>
          </Button>
        )}
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Stat icon={Trophy} label="Abgeschlossen" value={`${done} / ${total}`} />
        <Stat
          icon={Award}
          label="Quiz richtig"
          value={scoreTotal ? `${Math.round((scoreSum / scoreTotal) * 100)} %` : "–"}
        />
        <Stat icon={Clock} label="Lernzeit" value={`${minutes} Min.`} />
        <Stat icon={Star} label="Favoriten" value={String(favLessons.length)} />
      </div>

      <div className="mt-8 rounded-2xl border border-border bg-card p-6">
        <div className="flex justify-between text-sm">
          <span>Gesamtfortschritt</span>
          <span className="text-muted-foreground">
            {total ? Math.round((done / total) * 100) : 0} %
          </span>
        </div>
        <Progress className="mt-3" value={total ? (done / total) * 100 : 0} />
      </div>

      <Section title="Weiterlernen" lessons={next.slice(0, 3)} />
      <Section title="Favoriten" lessons={favLessons} />
    </div>
  );
}

function Stat({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Trophy;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5">
      <Icon className="h-5 w-5 text-accent" />
      <div className="mt-3 text-2xl font-semibold">{value}</div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </div>
  );
}

function Section({ title, lessons }: { title: string; lessons: Lesson[] }) {
  if (!lessons.length) return null;
  return (
    <section className="mt-12">
      <h2 className="font-serif text-2xl font-semibold">{title}</h2>
      <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {lessons.map((l) => (
          <LessonCard key={l.id} lesson={l} />
        ))}
      </div>
    </section>
  );
}
