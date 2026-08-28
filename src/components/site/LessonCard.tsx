import { Link } from "@tanstack/react-router";
import { Lock, Play } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { lessonImage } from "@/lib/lesson-images";
import { categoryName, formatDuration } from "@/lib/taxonomy";
import type { Lesson } from "@/lib/data";

export function LessonCard({ lesson }: { lesson: Lesson }) {
  return (
    <Link
      to="/lektion/$slug"
      params={{ slug: lesson.slug }}
      className="group block overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-0.5 hover:shadow-lg"
    >
      <div className="relative aspect-video overflow-hidden bg-muted">
        <img
          src={lessonImage(lesson.thumbnail_key)}
          alt={lesson.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute left-3 top-3 flex gap-2">
          <Badge variant="secondary">{lesson.level}</Badge>
          {lesson.is_premium ? (
            <Badge className="bg-accent text-accent-foreground">
              <Lock className="mr-1 h-3 w-3" /> Premium
            </Badge>
          ) : (
            <Badge variant="outline" className="bg-card">
              Gratis
            </Badge>
          )}
        </div>
        <div className="absolute bottom-3 right-3 rounded-full bg-foreground/85 px-2.5 py-1 text-xs font-medium text-background">
          {formatDuration(lesson.duration_seconds)}
        </div>
        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-background/90">
            <Play className="h-5 w-5 fill-foreground" />
          </span>
        </div>
      </div>
      <div className="p-4">
        <div className="text-xs uppercase tracking-wide text-muted-foreground">
          {categoryName(lesson.subcategory_slug ?? lesson.category_slug)}
        </div>
        <h3 className="mt-1 font-serif text-lg font-semibold leading-snug">{lesson.title}</h3>
        <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{lesson.description}</p>
      </div>
    </Link>
  );
}
