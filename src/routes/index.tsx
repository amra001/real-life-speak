import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { ArrowRight, BookOpen, GraduationCap, Headphones, ListChecks } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LessonCard } from "@/components/site/LessonCard";
import { lessonsQuery } from "@/lib/data";
import { CATEGORIES, LEVELS } from "@/lib/taxonomy";
import heroImage from "@/assets/lesson-supermarkt.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "RealLife German – Deutsch lernen mit echten Alltagssituationen" },
      {
        name: "description",
        content:
          "Deutsch lernen mit vorproduzierten Video-Lektionen aus Alltag und Beruf: sehen, hören, lesen, verstehen und mit Quiz trainieren. A1 bis B2.",
      },
      { property: "og:title", content: "RealLife German – Deutsch für echte Situationen" },
      {
        property: "og:description",
        content:
          "Video-Lektionen aus Supermarkt, Arztpraxis, Baustelle und Bewerbung – mit Vokabeln, Dialogen und Quiz.",
      },
    ],
  }),
  component: Home,
});

const STEPS = [
  { icon: Headphones, title: "Situation ansehen", text: "Kurze Szene aus dem echten Leben." },
  { icon: BookOpen, title: "Text & Übersetzung", text: "Deutsch groß, Übersetzung darunter." },
  { icon: ListChecks, title: "Vokabeln & Dialog", text: "Die wichtigsten Sätze zum Nachsprechen." },
  { icon: GraduationCap, title: "Quiz", text: "Verständnis prüfen, Fortschritt speichern." },
];

function Home() {
  const { data: lessons } = useQuery(lessonsQuery());
  const free = (lessons ?? []).filter((l) => !l.is_premium);
  const work = (lessons ?? []).filter((l) => l.category_slug === "arbeit");

  return (
    <div>
      <section className="border-b border-border bg-surface">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-xs uppercase tracking-widest text-muted-foreground">
              A1 – B2 · Deutschland & Österreich
            </div>
            <h1 className="mt-5 font-serif text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
              Deutsch lernen, wie es wirklich gesprochen wird.
            </h1>
            <p className="mt-4 max-w-lg text-base text-muted-foreground md:text-lg">
              Keine trockene Grammatik. Echte Situationen aus Supermarkt, Arztpraxis, Baustelle und
              Bewerbungsgespräch – als kurze Video-Lektionen mit Untertiteln, Vokabeln und Quiz.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link to="/lektionen">
                  Lektionen entdecken <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/lektion/$slug" params={{ slug: "im-supermarkt" }}>
                  Beispiel-Lektion ansehen
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-3xl border border-border shadow-lg">
            <img
              src={heroImage}
              alt="Alltagsszene im deutschen Supermarkt"
              className="aspect-[4/3] w-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-foreground/80 p-4 text-background">
              <div className="font-serif text-lg">„Wo finde ich die Milch?“</div>
              <div className="text-sm opacity-80">Süt nerede? · أين الحليب؟</div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="font-serif text-2xl font-semibold md:text-3xl">So funktioniert es</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s) => (
            <div key={s.title} className="rounded-2xl border border-border bg-card p-5">
              <s.icon className="h-6 w-6 text-accent" />
              <div className="mt-4 font-medium">{s.title}</div>
              <p className="mt-1 text-sm text-muted-foreground">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-4">
        <h2 className="font-serif text-2xl font-semibold md:text-3xl">Themenbereiche</h2>
        <div className="mt-6 flex flex-wrap gap-2">
          {CATEGORIES.map((c) => (
            <Link
              key={c.slug}
              to="/lektionen"
              search={{ kategorie: c.slug }}
              className="rounded-full border border-border bg-card px-4 py-2 text-sm transition-colors hover:bg-muted"
            >
              {c.name}
            </Link>
          ))}
          {LEVELS.map((l) => (
            <Link
              key={l}
              to="/lektionen"
              search={{ level: l }}
              className="rounded-full border border-border bg-card px-4 py-2 text-sm transition-colors hover:bg-muted"
            >
              Niveau {l}
            </Link>
          ))}
        </div>
      </section>

      <Shelf title="Kostenlos starten" lessons={free} />
      <Shelf title="Deutsch für den Beruf" lessons={work} />
    </div>
  );
}

function Shelf({ title, lessons }: { title: string; lessons: { id: string }[] }) {
  if (!lessons.length) return null;
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <div className="flex items-end justify-between">
        <h2 className="font-serif text-2xl font-semibold md:text-3xl">{title}</h2>
        <Link to="/lektionen" className="text-sm text-muted-foreground hover:text-foreground">
          Alle ansehen
        </Link>
      </div>
      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {(lessons as never[]).map((l: never) => (
          <LessonCard key={(l as { id: string }).id} lesson={l} />
        ))}
      </div>
    </section>
  );
}
