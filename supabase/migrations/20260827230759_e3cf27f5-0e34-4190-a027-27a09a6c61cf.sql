CREATE OR REPLACE VIEW public.dummy_noop AS SELECT 1 AS x;
DROP VIEW public.dummy_noop;

-- lessons
DROP POLICY "lessons public read" ON public.lessons;
DROP POLICY "lessons admin write" ON public.lessons;
CREATE POLICY "lessons public read" ON public.lessons FOR SELECT TO anon, authenticated USING (status = 'published');
CREATE POLICY "lessons admin all" ON public.lessons FOR ALL TO authenticated
  USING (EXISTS (SELECT 1 FROM public.user_roles r WHERE r.user_id = auth.uid() AND r.role = 'admin'))
  WITH CHECK (EXISTS (SELECT 1 FROM public.user_roles r WHERE r.user_id = auth.uid() AND r.role = 'admin'));

-- categories
DROP POLICY "categories admin write" ON public.categories;
CREATE POLICY "categories admin all" ON public.categories FOR ALL TO authenticated
  USING (EXISTS (SELECT 1 FROM public.user_roles r WHERE r.user_id = auth.uid() AND r.role = 'admin'))
  WITH CHECK (EXISTS (SELECT 1 FROM public.user_roles r WHERE r.user_id = auth.uid() AND r.role = 'admin'));

-- child content tables
DROP POLICY "scenes read" ON public.lesson_scenes;
DROP POLICY "scenes admin" ON public.lesson_scenes;
CREATE POLICY "scenes read" ON public.lesson_scenes FOR SELECT TO anon, authenticated USING (EXISTS (SELECT 1 FROM public.lessons l WHERE l.id = lesson_id AND l.status='published'));
CREATE POLICY "scenes admin" ON public.lesson_scenes FOR ALL TO authenticated
  USING (EXISTS (SELECT 1 FROM public.user_roles r WHERE r.user_id = auth.uid() AND r.role='admin'))
  WITH CHECK (EXISTS (SELECT 1 FROM public.user_roles r WHERE r.user_id = auth.uid() AND r.role='admin'));

DROP POLICY "vocab read" ON public.vocabulary;
DROP POLICY "vocab admin" ON public.vocabulary;
CREATE POLICY "vocab read" ON public.vocabulary FOR SELECT TO anon, authenticated USING (EXISTS (SELECT 1 FROM public.lessons l WHERE l.id = lesson_id AND l.status='published'));
CREATE POLICY "vocab admin" ON public.vocabulary FOR ALL TO authenticated
  USING (EXISTS (SELECT 1 FROM public.user_roles r WHERE r.user_id = auth.uid() AND r.role='admin'))
  WITH CHECK (EXISTS (SELECT 1 FROM public.user_roles r WHERE r.user_id = auth.uid() AND r.role='admin'));

DROP POLICY "dialogs read" ON public.dialogs;
DROP POLICY "dialogs admin" ON public.dialogs;
CREATE POLICY "dialogs read" ON public.dialogs FOR SELECT TO anon, authenticated USING (EXISTS (SELECT 1 FROM public.lessons l WHERE l.id = lesson_id AND l.status='published'));
CREATE POLICY "dialogs admin" ON public.dialogs FOR ALL TO authenticated
  USING (EXISTS (SELECT 1 FROM public.user_roles r WHERE r.user_id = auth.uid() AND r.role='admin'))
  WITH CHECK (EXISTS (SELECT 1 FROM public.user_roles r WHERE r.user_id = auth.uid() AND r.role='admin'));

DROP POLICY "questions read" ON public.quiz_questions;
DROP POLICY "questions admin" ON public.quiz_questions;
CREATE POLICY "questions read" ON public.quiz_questions FOR SELECT TO anon, authenticated USING (EXISTS (SELECT 1 FROM public.lessons l WHERE l.id = lesson_id AND l.status='published'));
CREATE POLICY "questions admin" ON public.quiz_questions FOR ALL TO authenticated
  USING (EXISTS (SELECT 1 FROM public.user_roles r WHERE r.user_id = auth.uid() AND r.role='admin'))
  WITH CHECK (EXISTS (SELECT 1 FROM public.user_roles r WHERE r.user_id = auth.uid() AND r.role='admin'));

DROP POLICY "answers read" ON public.quiz_answers;
DROP POLICY "answers admin" ON public.quiz_answers;
CREATE POLICY "answers read" ON public.quiz_answers FOR SELECT TO anon, authenticated USING (EXISTS (SELECT 1 FROM public.quiz_questions q JOIN public.lessons l ON l.id=q.lesson_id WHERE q.id = question_id AND l.status='published'));
CREATE POLICY "answers admin" ON public.quiz_answers FOR ALL TO authenticated
  USING (EXISTS (SELECT 1 FROM public.user_roles r WHERE r.user_id = auth.uid() AND r.role='admin'))
  WITH CHECK (EXISTS (SELECT 1 FROM public.user_roles r WHERE r.user_id = auth.uid() AND r.role='admin'));