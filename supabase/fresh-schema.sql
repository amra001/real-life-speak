-- Konsolidiertes Schema für das neue, eigene Supabase-Projekt.
-- Fasst die Struktur aus allen bisherigen Migrationen zusammen (ohne die
-- alten Demo-/Platzhalter-Inhalte), damit wir von einer sauberen Basis aus
-- mit den kuratierten 60 Themen weiterarbeiten.

CREATE TYPE public.app_role AS ENUM ('admin','user');

CREATE TABLE public.profiles (
  id UUID PRIMARY KEY,
  display_name TEXT,
  level TEXT NOT NULL DEFAULT 'A1',
  region TEXT NOT NULL DEFAULT 'de',
  translation_lang TEXT NOT NULL DEFAULT 'tr',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE ON public.profiles TO authenticated;
GRANT ALL ON public.profiles TO service_role;
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "own profile" ON public.profiles FOR ALL TO authenticated USING (id = auth.uid()) WITH CHECK (id = auth.uid());

CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL,
  role public.app_role NOT NULL,
  UNIQUE (user_id, role)
);
GRANT SELECT ON public.user_roles TO authenticated;
GRANT ALL ON public.user_roles TO service_role;
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "read own roles" ON public.user_roles FOR SELECT TO authenticated USING (user_id = auth.uid());

CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role public.app_role)
RETURNS BOOLEAN LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$
  SELECT EXISTS (SELECT 1 FROM public.user_roles WHERE user_id = _user_id AND role = _role)
$$;

CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
BEGIN
  INSERT INTO public.profiles (id, display_name)
  VALUES (NEW.id, COALESCE(NEW.raw_user_meta_data->>'display_name', split_part(NEW.email,'@',1)))
  ON CONFLICT (id) DO NOTHING;
  INSERT INTO public.user_roles (user_id, role) VALUES (NEW.id, 'user') ON CONFLICT DO NOTHING;
  RETURN NEW;
END; $$;
CREATE TRIGGER on_auth_user_created AFTER INSERT ON auth.users
FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

REVOKE EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) FROM anon, authenticated, PUBLIC;
REVOKE EXECUTE ON FUNCTION public.handle_new_user() FROM anon, authenticated, PUBLIC;

CREATE TABLE public.categories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT NOT NULL UNIQUE,
  name TEXT NOT NULL,
  parent_slug TEXT,
  sort INT NOT NULL DEFAULT 0
);
GRANT SELECT ON public.categories TO anon, authenticated;
GRANT ALL ON public.categories TO service_role;
ALTER TABLE public.categories ENABLE ROW LEVEL SECURITY;
CREATE POLICY "categories public read" ON public.categories FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY "categories admin write" ON public.categories FOR ALL TO authenticated USING (public.has_role(auth.uid(),'admin')) WITH CHECK (public.has_role(auth.uid(),'admin'));

CREATE TABLE public.lessons (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  description TEXT NOT NULL DEFAULT '',
  level TEXT NOT NULL DEFAULT 'A1',
  region TEXT NOT NULL DEFAULT 'de',
  category_slug TEXT NOT NULL,
  subcategory_slug TEXT,
  topic_slug TEXT,
  topic_title TEXT,
  duration_seconds INT NOT NULL DEFAULT 30,
  thumbnail_key TEXT,
  video_url TEXT,
  is_premium BOOLEAN NOT NULL DEFAULT false,
  status TEXT NOT NULL DEFAULT 'draft',
  worksheet_url TEXT,
  popularity INT NOT NULL DEFAULT 0,
  grammar_topics text[] NOT NULL DEFAULT '{}',
  grammar_notes jsonb NOT NULL DEFAULT '[]'::jsonb,
  place_items jsonb NOT NULL DEFAULT '[]'::jsonb,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.lessons TO authenticated;
GRANT SELECT ON public.lessons TO anon;
GRANT ALL ON public.lessons TO service_role;
ALTER TABLE public.lessons ENABLE ROW LEVEL SECURITY;
CREATE POLICY "lessons public read" ON public.lessons FOR SELECT TO anon, authenticated USING (status = 'published' OR public.has_role(auth.uid(),'admin'));
CREATE POLICY "lessons admin write" ON public.lessons FOR ALL TO authenticated USING (public.has_role(auth.uid(),'admin')) WITH CHECK (public.has_role(auth.uid(),'admin'));
CREATE UNIQUE INDEX lessons_topic_level_idx ON public.lessons (topic_slug, level) WHERE topic_slug IS NOT NULL;

CREATE TABLE public.lesson_scenes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  lesson_id UUID NOT NULL REFERENCES public.lessons(id) ON DELETE CASCADE,
  position INT NOT NULL DEFAULT 0,
  german_text TEXT NOT NULL,
  image_key TEXT,
  scene_group TEXT NOT NULL DEFAULT '',
  hint TEXT,
  translations JSONB NOT NULL DEFAULT '{}'::jsonb
);
CREATE TABLE public.vocabulary (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  lesson_id UUID NOT NULL REFERENCES public.lessons(id) ON DELETE CASCADE,
  position INT NOT NULL DEFAULT 0,
  term TEXT NOT NULL,
  word_class TEXT NOT NULL DEFAULT '',
  article TEXT NOT NULL DEFAULT '',
  plural TEXT NOT NULL DEFAULT '',
  example TEXT NOT NULL DEFAULT '',
  example_translations JSONB NOT NULL DEFAULT '{}'::jsonb,
  collocations text[] NOT NULL DEFAULT '{}',
  translations JSONB NOT NULL DEFAULT '{}'::jsonb
);
CREATE TABLE public.dialogs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  lesson_id UUID NOT NULL REFERENCES public.lessons(id) ON DELETE CASCADE,
  position INT NOT NULL DEFAULT 0,
  dialog_index integer NOT NULL DEFAULT 1,
  dialog_title text NOT NULL DEFAULT '',
  speaker TEXT NOT NULL DEFAULT 'A',
  speaker_role text NOT NULL DEFAULT '',
  german_text TEXT NOT NULL,
  translations JSONB NOT NULL DEFAULT '{}'::jsonb
);
CREATE TABLE public.quiz_questions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  lesson_id UUID NOT NULL REFERENCES public.lessons(id) ON DELETE CASCADE,
  position INT NOT NULL DEFAULT 0,
  kind TEXT NOT NULL DEFAULT 'multiple_choice',
  section text NOT NULL DEFAULT 'practice',
  prompt TEXT NOT NULL,
  explanation TEXT NOT NULL DEFAULT '',
  data jsonb NOT NULL DEFAULT '{}'::jsonb
);
CREATE TABLE public.quiz_answers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  question_id UUID NOT NULL REFERENCES public.quiz_questions(id) ON DELETE CASCADE,
  position INT NOT NULL DEFAULT 0,
  text TEXT NOT NULL,
  is_correct BOOLEAN NOT NULL DEFAULT false
);

GRANT SELECT, INSERT, UPDATE, DELETE ON public.lesson_scenes, public.vocabulary, public.dialogs, public.quiz_questions, public.quiz_answers TO authenticated;
GRANT SELECT ON public.lesson_scenes, public.vocabulary, public.dialogs, public.quiz_questions, public.quiz_answers TO anon;
GRANT ALL ON public.lesson_scenes, public.vocabulary, public.dialogs, public.quiz_questions, public.quiz_answers TO service_role;
ALTER TABLE public.lesson_scenes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.vocabulary ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.dialogs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.quiz_questions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.quiz_answers ENABLE ROW LEVEL SECURITY;

CREATE POLICY "scenes read" ON public.lesson_scenes FOR SELECT TO anon, authenticated USING (EXISTS (SELECT 1 FROM public.lessons l WHERE l.id = lesson_id AND (l.status='published' OR public.has_role(auth.uid(),'admin'))));
CREATE POLICY "scenes admin" ON public.lesson_scenes FOR ALL TO authenticated USING (public.has_role(auth.uid(),'admin')) WITH CHECK (public.has_role(auth.uid(),'admin'));
CREATE POLICY "vocab read" ON public.vocabulary FOR SELECT TO anon, authenticated USING (EXISTS (SELECT 1 FROM public.lessons l WHERE l.id = lesson_id AND (l.status='published' OR public.has_role(auth.uid(),'admin'))));
CREATE POLICY "vocab admin" ON public.vocabulary FOR ALL TO authenticated USING (public.has_role(auth.uid(),'admin')) WITH CHECK (public.has_role(auth.uid(),'admin'));
CREATE POLICY "dialogs read" ON public.dialogs FOR SELECT TO anon, authenticated USING (EXISTS (SELECT 1 FROM public.lessons l WHERE l.id = lesson_id AND (l.status='published' OR public.has_role(auth.uid(),'admin'))));
CREATE POLICY "dialogs admin" ON public.dialogs FOR ALL TO authenticated USING (public.has_role(auth.uid(),'admin')) WITH CHECK (public.has_role(auth.uid(),'admin'));
CREATE POLICY "questions read" ON public.quiz_questions FOR SELECT TO anon, authenticated USING (EXISTS (SELECT 1 FROM public.lessons l WHERE l.id = lesson_id AND (l.status='published' OR public.has_role(auth.uid(),'admin'))));
CREATE POLICY "questions admin" ON public.quiz_questions FOR ALL TO authenticated USING (public.has_role(auth.uid(),'admin')) WITH CHECK (public.has_role(auth.uid(),'admin'));
CREATE POLICY "answers read" ON public.quiz_answers FOR SELECT TO anon, authenticated USING (EXISTS (SELECT 1 FROM public.quiz_questions q JOIN public.lessons l ON l.id=q.lesson_id WHERE q.id = question_id AND (l.status='published' OR public.has_role(auth.uid(),'admin'))));
CREATE POLICY "answers admin" ON public.quiz_answers FOR ALL TO authenticated USING (public.has_role(auth.uid(),'admin')) WITH CHECK (public.has_role(auth.uid(),'admin'));

CREATE TABLE public.user_progress (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL,
  lesson_id UUID NOT NULL REFERENCES public.lessons(id) ON DELETE CASCADE,
  completed BOOLEAN NOT NULL DEFAULT false,
  quiz_score INT NOT NULL DEFAULT 0,
  quiz_total INT NOT NULL DEFAULT 0,
  seconds_learned INT NOT NULL DEFAULT 0,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (user_id, lesson_id)
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.user_progress TO authenticated;
GRANT ALL ON public.user_progress TO service_role;
ALTER TABLE public.user_progress ENABLE ROW LEVEL SECURITY;
CREATE POLICY "own progress" ON public.user_progress FOR ALL TO authenticated USING (user_id = auth.uid()) WITH CHECK (user_id = auth.uid());

CREATE TABLE public.favorites (
  user_id UUID NOT NULL,
  lesson_id UUID NOT NULL REFERENCES public.lessons(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  PRIMARY KEY (user_id, lesson_id)
);
GRANT SELECT, INSERT, DELETE ON public.favorites TO authenticated;
GRANT ALL ON public.favorites TO service_role;
ALTER TABLE public.favorites ENABLE ROW LEVEL SECURITY;
CREATE POLICY "own favorites" ON public.favorites FOR ALL TO authenticated USING (user_id = auth.uid()) WITH CHECK (user_id = auth.uid());

CREATE TABLE public.subscriptions (
  user_id UUID PRIMARY KEY,
  plan TEXT NOT NULL DEFAULT 'free',
  status TEXT NOT NULL DEFAULT 'active',
  started_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE ON public.subscriptions TO authenticated;
GRANT ALL ON public.subscriptions TO service_role;
ALTER TABLE public.subscriptions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "own subscription" ON public.subscriptions FOR ALL TO authenticated USING (user_id = auth.uid()) WITH CHECK (user_id = auth.uid());

CREATE TABLE public.products (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  description text not null default '',
  price_cents integer not null default 0,
  currency text not null default 'EUR',
  cta_label text not null default 'Anfrage senden',
  category text not null default 'bewerbung',
  is_active boolean not null default true,
  position integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
GRANT SELECT ON public.products TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.products TO authenticated;
GRANT ALL ON public.products TO service_role;
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
CREATE POLICY "products_public_read" ON public.products FOR SELECT TO anon, authenticated USING (is_active = true);
CREATE POLICY "products_admin_all" ON public.products FOR ALL TO authenticated
  USING (exists (select 1 from public.user_roles r where r.user_id = auth.uid() and r.role = 'admin'))
  WITH CHECK (exists (select 1 from public.user_roles r where r.user_id = auth.uid() and r.role = 'admin'));

CREATE TABLE public.inquiries (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete set null,
  kind text not null default 'privatunterricht',
  product_slug text,
  name text not null,
  email text not null,
  phone text,
  current_level text,
  goal text,
  lesson_type text,
  message text not null default '',
  status text not null default 'neu',
  created_at timestamptz not null default now()
);
GRANT INSERT ON public.inquiries TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.inquiries TO authenticated;
GRANT ALL ON public.inquiries TO service_role;
ALTER TABLE public.inquiries ENABLE ROW LEVEL SECURITY;
CREATE POLICY "inquiries_insert_anyone" ON public.inquiries FOR INSERT TO anon, authenticated WITH CHECK (true);
CREATE POLICY "inquiries_admin_read" ON public.inquiries FOR SELECT TO authenticated
  USING (exists (select 1 from public.user_roles r where r.user_id = auth.uid() and r.role = 'admin'));
CREATE POLICY "inquiries_admin_update" ON public.inquiries FOR UPDATE TO authenticated
  USING (exists (select 1 from public.user_roles r where r.user_id = auth.uid() and r.role = 'admin'))
  WITH CHECK (exists (select 1 from public.user_roles r where r.user_id = auth.uid() and r.role = 'admin'));
CREATE POLICY "inquiries_admin_delete" ON public.inquiries FOR DELETE TO authenticated
  USING (exists (select 1 from public.user_roles r where r.user_id = auth.uid() and r.role = 'admin'));

-- Kategorien (unverändert aus dem Original übernommen)
INSERT INTO public.categories (slug, name, parent_slug, sort) VALUES
('alltag','Alltag',NULL,1),
('gesundheit','Gesundheit',NULL,2),
('wohnen','Wohnen',NULL,3),
('verkehr','Verkehr & Reisen',NULL,4),
('schule-familie','Schule & Familie',NULL,5),
('arbeit','Arbeit',NULL,6),
('supermarkt','Supermarkt','alltag',1),
('baeckerei','Bäckerei','alltag',2),
('restaurant','Restaurant','alltag',3),
('cafe','Café','alltag',4),
('friseur','Friseur','alltag',5),
('kleidung','Kleidung kaufen','alltag',6),
('post','Post','alltag',7),
('bank','Bank','alltag',8),
('telefonieren','Telefonieren','alltag',9),
('termin','Termin vereinbaren','alltag',10),
('hausarzt','Hausarzt','gesundheit',1),
('facharzt','Facharzt','gesundheit',2),
('apotheke','Apotheke','gesundheit',3),
('krankenhaus','Krankenhaus','gesundheit',4),
('medikamente','Medikamente','gesundheit',6),
('wohnung-suchen','Wohnung suchen','wohnen',1),
('wohnung-besichtigen','Wohnung besichtigen','wohnen',2),
('vermieter','Vermieter anrufen','wohnen',3),
('mietvertrag','Mietvertrag','wohnen',4),
('hausverwaltung','Hausverwaltung','wohnen',5),
('nachbarn','Nachbarn','wohnen',6),
('reparatur','Reparatur melden','wohnen',7),
('heizung','Heizung','wohnen',8),
('strom','Strom','wohnen',9),
('wasser','Wasser','wohnen',10),
('bus','Bus','verkehr',1),
('strassenbahn','Straßenbahn','verkehr',2),
('zug','Zug','verkehr',3),
('bahnhof','Bahnhof','verkehr',4),
('flughafen','Flughafen','verkehr',5),
('taxi','Taxi','verkehr',6),
('hotel','Hotel','verkehr',9),
('mietwagen','Mietwagen','verkehr',10),
('reise','Reise','verkehr',11),
('kindergarten','Kindergarten','schule-familie',1),
('schule','Schule','schule-familie',2),
('elternsprechtag','Elternsprechtag','schule-familie',3),
('schulausflug','Schulausflug','schule-familie',7),
('hausaufgaben','Hausaufgaben','schule-familie',8),
('zeugnis','Zeugnis','schule-familie',9),
('familie','Familie','schule-familie',10),
('vorstellungsgespraech','Vorstellungsgespräch','arbeit',2),
('erster-arbeitstag','Erster Arbeitstag','arbeit',3),
('chef','Chef','arbeit',4),
('kollegen','Kollegen','arbeit',5),
('urlaub','Urlaub','arbeit',7),
('krankenstand','Krankenstand','arbeit',8),
('meetings','Meetings','arbeit',9),
('email','E-Mail','arbeit',10),
('lebenslauf','Lebenslauf','arbeit',11),
('reklamation','Reklamation','sonstiges',1),
('kundenberatung','Kundenberatung','sonstiges',2),
('freizeit','Freizeit','sonstiges',3),
('sport','Sport','sonstiges',4),
('hygiene','Hygiene','sonstiges',5),
('service','Service','sonstiges',6),
('kasse','An der Kasse','alltag',11),
('einkaufen','Einkaufen','alltag',12);

-- Bewerbungs-Produkte
INSERT INTO public.products (slug, title, description, price_cents, cta_label, category, position) VALUES
('lebenslauf', 'Lebenslauf erstellen', 'Professioneller, deutschsprachiger Lebenslauf – modern gestaltet und auf deine Zielstelle abgestimmt.', 4900, 'Anfrage senden', 'bewerbung', 1),
('bewerbungsschreiben', 'Bewerbungsschreiben erstellen', 'Individuelles Anschreiben in korrektem Deutsch, das deine Stärken klar auf den Punkt bringt.', 5900, 'Anfrage senden', 'bewerbung', 2),
('bewerbungspaket', 'Lebenslauf + Bewerbungspaket', 'Komplettpaket: Lebenslauf, Anschreiben und Feedback zu deinen Unterlagen.', 9900, 'Anfrage senden', 'bewerbung', 3),
('unterlagen-pruefen', 'Bewerbungsunterlagen prüfen', 'Wir prüfen deine bestehenden Unterlagen auf Sprache, Struktur und Wirkung.', 2900, 'Anfrage senden', 'bewerbung', 4),
('interview-vorbereitung', 'Vorbereitung Bewerbungsgespräch', 'Übungsgespräch mit typischen Fragen, Formulierungshilfen und persönlichem Feedback.', 6900, 'Termin anfragen', 'coaching', 5),
('business-coaching', 'Business-Deutsch Einzelcoaching', 'Einzelunterricht für Beruf, Meetings, Telefonate und Kommunikation am Arbeitsplatz.', 4500, 'Termin anfragen', 'coaching', 6);
