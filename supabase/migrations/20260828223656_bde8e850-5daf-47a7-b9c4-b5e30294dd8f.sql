
ALTER TABLE public.lesson_scenes ADD COLUMN IF NOT EXISTS scene_group text NOT NULL DEFAULT '';
ALTER TABLE public.dialogs ADD COLUMN IF NOT EXISTS dialog_index integer NOT NULL DEFAULT 1;
ALTER TABLE public.dialogs ADD COLUMN IF NOT EXISTS dialog_title text NOT NULL DEFAULT '';
ALTER TABLE public.dialogs ADD COLUMN IF NOT EXISTS speaker_role text NOT NULL DEFAULT '';
ALTER TABLE public.quiz_questions ADD COLUMN IF NOT EXISTS data jsonb NOT NULL DEFAULT '{}'::jsonb;
ALTER TABLE public.quiz_questions ADD COLUMN IF NOT EXISTS section text NOT NULL DEFAULT 'uebungen';
ALTER TABLE public.vocabulary ADD COLUMN IF NOT EXISTS collocations text[] NOT NULL DEFAULT '{}';
ALTER TABLE public.lessons ADD COLUMN IF NOT EXISTS grammar_topics text[] NOT NULL DEFAULT '{}';
ALTER TABLE public.lessons ADD COLUMN IF NOT EXISTS grammar_notes jsonb NOT NULL DEFAULT '[]'::jsonb;
ALTER TABLE public.lessons ADD COLUMN IF NOT EXISTS place_items jsonb NOT NULL DEFAULT '[]'::jsonb;
