ALTER TABLE public.lessons
  ADD COLUMN IF NOT EXISTS topic_slug text,
  ADD COLUMN IF NOT EXISTS topic_title text;

ALTER TABLE public.vocabulary
  ADD COLUMN IF NOT EXISTS word_class text NOT NULL DEFAULT '',
  ADD COLUMN IF NOT EXISTS article text NOT NULL DEFAULT '',
  ADD COLUMN IF NOT EXISTS plural text NOT NULL DEFAULT '',
  ADD COLUMN IF NOT EXISTS example text NOT NULL DEFAULT '',
  ADD COLUMN IF NOT EXISTS example_translations jsonb NOT NULL DEFAULT '{}'::jsonb;

ALTER TABLE public.lesson_scenes
  ADD COLUMN IF NOT EXISTS image_key text;

UPDATE public.lessons
SET topic_slug = COALESCE(topic_slug, subcategory_slug, category_slug),
    topic_title = COALESCE(topic_title, title)
WHERE topic_slug IS NULL;

CREATE UNIQUE INDEX IF NOT EXISTS lessons_topic_level_idx
  ON public.lessons (topic_slug, level) WHERE topic_slug IS NOT NULL;