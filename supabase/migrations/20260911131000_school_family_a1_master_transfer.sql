-- RealLife German: Schule & Familie A1 – vollständig aus der MASTER_TRANSFER-Vorlage.
-- Keine automatisch erfundenen Inhalte. Alle Szenen, Wörter, Dialoge, Grammatikübungen,
-- Praxisaufgaben, Dialogbau-Aufgaben und Abschlusstests stammen aus der gelieferten Vorlage.

ALTER TABLE public.lesson_scenes ADD COLUMN IF NOT EXISTS hint text;

CREATE INDEX IF NOT EXISTS idx_lesson_scenes_lesson_id ON public.lesson_scenes(lesson_id);
CREATE INDEX IF NOT EXISTS idx_vocabulary_lesson_id ON public.vocabulary(lesson_id);
CREATE INDEX IF NOT EXISTS idx_dialogs_lesson_id ON public.dialogs(lesson_id);
CREATE INDEX IF NOT EXISTS idx_quiz_questions_lesson_id ON public.quiz_questions(lesson_id);
CREATE INDEX IF NOT EXISTS idx_quiz_answers_question_id ON public.quiz_answers(question_id);

CREATE OR REPLACE FUNCTION public._seed_school_family_a1(p_slug text, p jsonb)
RETURNS void
LANGUAGE plpgsql
AS $$
DECLARE
  lid uuid;
  gnotes jsonb;
  gtopics text[];
  places jsonb;
BEGIN
  SELECT id INTO lid
  FROM public.lessons
  WHERE slug=p_slug AND level='A1'
  LIMIT 1;

  IF lid IS NULL THEN
    RAISE EXCEPTION 'A1 lesson not found: %', p_slug;
  END IF;

  UPDATE public.lessons
  SET status='draft',
      title=p->>'t',
      description=p->>'d',
      updated_at=now()
  WHERE id=lid;

  DELETE FROM public.quiz_answers
  WHERE question_id IN (SELECT id FROM public.quiz_questions WHERE lesson_id=lid);
  DELETE FROM public.quiz_questions WHERE lesson_id=lid;
  DELETE FROM public.dialogs WHERE lesson_id=lid;
  DELETE FROM public.vocabulary WHERE lesson_id=lid;
  DELETE FROM public.lesson_scenes WHERE lesson_id=lid;

  INSERT INTO public.lesson_scenes
    (id,lesson_id,position,german_text,translations,image_key,scene_group,hint)
  SELECT
    gen_random_uuid(), lid, ord::int,
    val->>0, '{}'::jsonb, '', '', COALESCE(val->>1,'')
  FROM jsonb_array_elements(COALESCE(p->'s','[]'::jsonb))
       WITH ORDINALITY a(val,ord);

  INSERT INTO public.vocabulary
    (id,lesson_id,position,term,translations,word_class,article,plural,example,example_translations,collocations)
  SELECT
    gen_random_uuid(), lid, ord::int,
    CASE WHEN (val->>0) ~ '^(der|die|das) '
         THEN regexp_replace(val->>0,'^(der|die|das) ','')
         ELSE val->>0 END,
    '{}'::jsonb,
    COALESCE(val->>2,''),
    CASE WHEN (val->>0) ~ '^(der|die|das) '
         THEN split_part(val->>0,' ',1)
         ELSE '' END,
    CASE WHEN COALESCE(val->>1,'') IN ('—','-') THEN '' ELSE COALESCE(val->>1,'') END,
    regexp_replace(COALESCE(val->>3,''),'^Beispiel:\s*','','i'),
    '{}'::jsonb,
    ARRAY[]::text[]
  FROM jsonb_array_elements(COALESCE(p->'v','[]'::jsonb))
       WITH ORDINALITY a(val,ord);

  SELECT COALESCE(
    jsonb_agg(
      jsonb_build_object(
        'german_text', val#>>'{}',
        'preposition','',
        'image_key','schule',
        'translations','{}'::jsonb
      )
      ORDER BY ord
    ),
    '[]'::jsonb
  )
  INTO places
  FROM jsonb_array_elements(COALESCE(p->'p','[]'::jsonb))
       WITH ORDINALITY a(val,ord);

  INSERT INTO public.dialogs
    (id,lesson_id,position,speaker,german_text,translations,dialog_index,dialog_title,speaker_role)
  SELECT
    gen_random_uuid(), lid, ord::int,
    val->>1, val->>2, '{}'::jsonb,
    (val->>0)::int,
    COALESCE(val->>3,'Dialog '||(val->>0)),
    val->>1
  FROM jsonb_array_elements(COALESCE(p->'dgs','[]'::jsonb))
       WITH ORDINALITY a(val,ord);

  SELECT
    COALESCE(
      jsonb_agg(
        jsonb_build_object(
          'title',val->>0,
          'explanation',val->>1,
          'examples',to_jsonb(regexp_split_to_array(COALESCE(val->>2,''),'\s*·\s*'))
        )
        ORDER BY ord
      ),
      '[]'::jsonb
    ),
    COALESCE(array_agg(val->>0 ORDER BY ord), ARRAY[]::text[])
  INTO gnotes, gtopics
  FROM jsonb_array_elements(COALESCE(p->'gn','[]'::jsonb))
       WITH ORDINALITY a(val,ord);

  UPDATE public.lessons
  SET grammar_notes=gnotes,
      grammar_topics=gtopics,
      place_items=places
  WHERE id=lid;

  INSERT INTO public.quiz_questions
    (id,lesson_id,position,kind,prompt,explanation,data,section)
  SELECT
    gen_random_uuid(), lid,
    CASE
      WHEN jsonb_typeof(val->1)='array' THEN 60000+ord::int
      WHEN val->>0='grammar' THEN 40000+ord::int
      WHEN val->>0='practice' THEN 50000+ord::int
      WHEN val->>0='test' THEN 70000+ord::int
      ELSE 55000+ord::int
    END,
    CASE WHEN jsonb_typeof(val->1)='array' THEN 'dialog_order' ELSE 'single_choice' END,
    CASE WHEN jsonb_typeof(val->1)='array'
         THEN 'Baue den Dialog in die richtige Reihenfolge.'
         ELSE val->>1 END,
    CASE WHEN jsonb_typeof(val->1)='array'
         THEN 'Die Reihenfolge entspricht dem Dialog aus der Vorlage.'
         ELSE 'Richtig: '||(val->>2) END,
    CASE WHEN jsonb_typeof(val->1)='array'
         THEN jsonb_build_object('items',val->1)
         ELSE '{}'::jsonb END,
    val->>0
  FROM jsonb_array_elements(COALESCE(p->'q','[]'::jsonb))
       WITH ORDINALITY a(val,ord);

  INSERT INTO public.quiz_answers
    (id,question_id,position,text,is_correct)
  SELECT
    gen_random_uuid(), qq.id, ans.pos, ans.txt, ans.ok
  FROM jsonb_array_elements(COALESCE(p->'q','[]'::jsonb))
       WITH ORDINALITY a(val,ord)
  JOIN public.quiz_questions qq
    ON qq.lesson_id=lid
   AND qq.position =
      CASE
        WHEN val->>0='grammar' THEN 40000+ord::int
        WHEN val->>0='practice' THEN 50000+ord::int
        WHEN val->>0='test' THEN 70000+ord::int
        ELSE 55000+ord::int
      END
   AND jsonb_typeof(val->1)<>'array'
  CROSS JOIN LATERAL
    (VALUES
      (1,val->>2,true),
      (2,val->>3,false),
      (3,val->>4,false)
    ) ans(pos,txt,ok);

  UPDATE public.lessons
  SET status='published', updated_at=now()
  WHERE id=lid;
END
$$;
