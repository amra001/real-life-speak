import { applyTopicSceneImages } from "./scene-types";
import { getA1MasterOverride } from "./static/a1-master";
import { lessonQuery as databaseLessonQuery } from "./data";

export * from "./data";

export const lessonQuery = (slug: string) => {
  const base = databaseLessonQuery(slug);

  return {
    ...base,
    queryKey: ["lesson", slug, "curated-a1-master"],
    queryFn: async () => {
      const result = await base.queryFn();
      if (!result?.lesson || result.lesson.level !== "A1") return result;

      const override = await getA1MasterOverride(result.lesson.category_slug, slug);
      if (!override) return result;

      const lesson = {
        ...result.lesson,
        ...override.lesson,
      };

      return {
        lesson,
        scenes: applyTopicSceneImages(
          lesson.topic_slug ?? null,
          lesson.thumbnail_key ?? null,
          override.scenes,
        ),
        vocab: override.vocab,
        dialog: override.dialog,
        questions: override.questions,
      };
    },
  };
};
