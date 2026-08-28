import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { ArrowRight, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LessonCard } from "@/components/site/LessonCard";
import { lessonsQuery } from "@/lib/data";
import { BERUF_CATEGORIES, LEVEL_INFO, LEVELS } from "@/lib/taxonomy";
import beruflich from "@/assets/lesson-baustelle.jpg";

export const Route = createFileRoute("/beruf")({
  head: () => ({
    meta: [
      { title: "Deutsch im Beruf – Branchen-Deutsch für die Arbeit" },
      {
        name: "description",
        content:
          "Deutsch für Pflege, Gastronomie, Baustelle, Handel, Logistik, Büro, Reinigung und Technik – echte Arbeitssituationen mit Vokabeln und Quiz.",
      },
      { property: "og:title", content: "Deutsch im Beruf – RealLife German" },
      {
        property: "og:description",
        content:
          "Branchen-Deutsch für Pflege, Küche, Baustelle, Handel, Logistik, Büro und mehr – praxisnah und verständlich.",
      },
    ],
  }),
  component: BerufPage,
});

function BerufPage() {
  const { data } = useQuery(lessonsQuery());
  const berufSlugs = new Set(BERUF_CATEGORIES.map((c) => c.slug));
  const lessons = (data ?? []).filter((l) => berufSlugs.has(l.category_slug)).slice(0, 6);

  return (
    <div>
      <section className="border-b border-border bg-surface">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 md:grid-cols-2 md:py-20">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-xs uppercase tracking-widest text-muted-foreground">
              <Briefcase className="h-3.5 w-3.5" /> Deutsch im Beruf
            </div>
            <h1 className="mt-5 font-serif text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
              Die Sprache, die du am Arbeitsplatz wirklich brauchst.
            </h1>
            <p className="mt-4 text-base text-muted-foreground md:text-lg">
              Arbeitsanweisungen verstehen, mit Kollegen sprechen, Probleme melden, Übergabe machen –
              Branche für Branche, Satz für Satz.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link to="/lektionen" search={{ kategorie: "arbeit" }}>
                  Beruf-Lektionen ansehen <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/privatunterricht">Business-Deutsch Coaching</Link>
              </Button>
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl border border-border shadow-lg">
            <img
              src={beruflich}
              alt="Arbeitssituation auf einer Baustelle in Deutschland"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="font-serif text-2xl font-semibold md:text-3xl">Branchen &amp; Bereiche</h2>
        <p className="mt-2 text-muted-foreground">
          Jeder Bereich enthält typische Situationen, Fachwörter und Redewendungen.
        </p>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {BERUF_CATEGORIES.map((c) => (
            <div key={c.slug} className="rounded-2xl border border-border bg-card p-5">
              <h3 className="font-serif text-lg font-semibold">{c.name}</h3>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {c.children.slice(0, 6).map((s) => (
                  <span
                    key={s.slug}
                    className="rounded-full border border-border px-2.5 py-1 text-xs text-muted-foreground"
                  >
                    {s.name}
                  </span>
                ))}
                {c.children.length > 6 && (
                  <span className="px-1 py-1 text-xs text-muted-foreground">
                    +{c.children.length - 6}
                  </span>
                )}
              </div>
              <Link
                to="/lektionen"
                search={{ kategorie: c.slug }}
                className="mt-4 inline-flex items-center text-sm font-medium hover:underline"
              >
                Lektionen öffnen <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="font-serif text-2xl font-semibold md:text-3xl">Passend zu deinem Niveau</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {LEVELS.map((l) => (
              <Link
                key={l}
                to="/lektionen"
                search={{ level: l }}
                className="rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-0.5 hover:shadow-lg"
              >
                <div className="font-serif text-xl font-semibold">{LEVEL_INFO[l].label}</div>
                <p className="mt-2 text-sm text-muted-foreground">{LEVEL_INFO[l].description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {lessons.length > 0 && (
        <section className="mx-auto max-w-6xl px-4 py-14">
          <div className="flex items-end justify-between">
            <h2 className="font-serif text-2xl font-semibold md:text-3xl">Beliebte Beruf-Lektionen</h2>
            <Link to="/lektionen" className="text-sm text-muted-foreground hover:text-foreground">
              Alle ansehen
            </Link>
          </div>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {lessons.map((l) => (
              <LessonCard key={l.id} lesson={l} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
