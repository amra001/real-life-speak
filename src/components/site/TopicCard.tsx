import { Link } from "@tanstack/react-router";
import { Lock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { lessonImage } from "@/lib/lesson-images";
import { generatedSchoolFamilyImage } from "@/lib/generated-school-family-images";
import { categoryName } from "@/lib/taxonomy";
import type { Topic } from "@/lib/data";

function topicImage(key: string | null | undefined): string {
  if (key?.startsWith("data:image/")) return key;
  return lessonImage(key);
}

/** Eine Karte pro Thema – die Niveaus A1/A2/B1 liegen auf der Themenseite. */
export function TopicCard({ topic }: { topic: Topic }) {
  const generatedImage = generatedSchoolFamilyImage(topic.slug);

  return (
    <Link
      to="/thema/$slug"
      params={{ slug: topic.slug }}
      className="group block overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-0.5 hover:shadow-lg"
    >
      <div className="relative aspect-video overflow-hidden bg-muted">
        <img
          src={generatedImage ?? topicImage(topic.thumbnail_key)}
          alt={topic.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute left-3 top-3 flex flex-wrap gap-2">
          {topic.levels.map((l) => (
            <Badge key={l.id} variant="secondary">
              {l.level}
            </Badge>
          ))}
        </div>
        <div className="absolute bottom-3 right-3">
          {topic.hasFree ? (
            <Badge variant="outline" className="bg-card">
              Gratis testen
            </Badge>
          ) : (
            <Badge className="bg-accent text-accent-foreground">
              <Lock className="mr-1 h-3 w-3" /> Premium
            </Badge>
          )}
        </div>
      </div>
      <div className="p-4">
        <div className="text-xs uppercase tracking-wide text-muted-foreground">
          {categoryName(topic.subcategory_slug ?? topic.category_slug)}
        </div>
        <h3 className="mt-1 font-serif text-lg font-semibold leading-snug">{topic.title}</h3>
        <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{topic.description}</p>
        <p className="mt-3 text-xs text-muted-foreground">
          {topic.levels.length} Lernmodule · {topic.levels.map((l) => l.level).join(" · ")}
        </p>
        <p className="mt-1 text-xs font-medium text-foreground/70">15 Situationen · 9 Lernbereiche</p>
      </div>
    </Link>
  );
}
