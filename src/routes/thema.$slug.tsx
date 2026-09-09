import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { ChevronLeft, Lock, PlayCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { lessonImage } from "@/lib/lesson-images";
import { topicOverviewQuery } from "@/lib/data";
import { categoryName, formatDuration, LEVEL_INFO, REGIONS, type Level } from "@/lib/taxonomy";

function topicImage(key: string | null | undefined): string {
  if (key?.startsWith("data:image/")) return key;
  return lessonImage(key);
}

export const Route = createFileRoute("/thema/$slug")({
  head: ({ params }) => {
    const name = params.slug.replace(/-/g, " ");
    return {
      meta: [
        { title: `${name} – Lernmodule A1, A2, B1 | RealLife German` },
        {
          name: "description",
          content: `Alle Lernmodule zum Thema ${name}: Szenen, Vokabeln, Präpositionen, mehrere Dialoge, Grammatik, Übungen und Abschlusstest – auf A1, A2 und B1.`,
        },
        { property: "og:title", content: `${name} – Lernmodule A1, A2, B1` },
        {
          property: "og:description",
          content: `Deutsch lernen in echten Situationen: ${name} auf drei Niveaustufen.`,
        },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: TopicPage,
});

function TopicPage() {
  const { slug } = Route.useParams();
  const { data, isLoading } = useQuery(topicOverviewQuery(slug));

  if (isLoading) return <div className="mx-auto max-w-5xl px-4 py-20">Thema wird geladen …</div>;
  const levels = data ?? [];
  const first = levels[0];
  if (!first)
    return (
      <div className="mx-auto max-w-4xl px-4 py-20 text-center">
        <h1 className="font-serif text-2xl font-semibold">Thema nicht gefunden</h1>
        <Button asChild className="mt-6">
          <Link to="/lektionen">Zur Bibliothek</Link>
        </Button>
      </div>
    );

  const region = REGIONS.find((r) => r.slug === first.region);

  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <Link
        to="/lektionen"
        className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground"
      >
        <ChevronLeft className="mr-1 h-4 w-4" /> Bibliothek
      </Link>

      <div className="mt-4 grid gap-6 md:grid-cols-[1.2fr_1fr] md:items-center">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="outline">
              {categoryName(first.subcategory_slug ?? first.category_slug)}
            </Badge>
            {region && (
              <Badge variant="outline">
                {region.flag} {region.label}
              </Badge>
            )}
          </div>
          <h1 className="mt-3 font-serif text-3xl font-semibold md:text-4xl">
            {first.topic_title ?? first.title}
          </h1>
          <p className="mt-2 text-muted-foreground">{first.description}</p>
          <p className="mt-3 text-sm text-muted-foreground">
            Wähle dein Niveau. Jedes Modul führt dich durch Situation, Wortschatz, „Wo ist was?“,
            mehrere Dialoge, Grammatik, Übungen und einen Abschlusstest.
          </p>
        </div>
        <img
          src={topicImage(first.thumbnail_key)}
          alt={first.topic_title ?? first.title}
          className="aspect-video w-full rounded-2xl border border-border object-cover"
        />
      </div>

      <div className="mt-10 space-y-4">
        {levels.map((l) => {
          const info = LEVEL_INFO[l.level as Level];
          return (
            <div
              key={l.id}
              className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-5 md:flex-row md:items-center"
            >
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="secondary">{l.level}</Badge>
                  <span className="font-serif text-lg font-semibold">{l.title}</span>
                  {l.is_premium ? (
                    <Badge className="bg-accent text-accent-foreground">
                      <Lock className="mr-1 h-3 w-3" /> Premium
                    </Badge>
                  ) : (
                    <Badge variant="outline">Gratis</Badge>
                  )}
                </div>
                {info && <p className="mt-1 text-sm text-muted-foreground">{info.short}</p>}
                <p className="mt-2 text-sm text-muted-foreground">
                  {formatDuration(l.duration_seconds)} · {l.scenes} Szenen · {l.vocab} Vokabeln ·{" "}
                  {l.dialogs} Dialogzeilen · {l.questions} Übungen
                </p>
                {!!(l.grammar_topics ?? []).length && (
                  <p className="mt-1 text-sm text-muted-foreground">
                    Grammatik: {(l.grammar_topics ?? []).join(", ")}
                  </p>
                )}
              </div>
              <Button asChild className="md:self-center">
                <Link to="/lektion/$slug" params={{ slug: l.slug }}>
                  <PlayCircle className="mr-2 h-4 w-4" /> {l.level} starten
                </Link>
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
