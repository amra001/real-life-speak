-- ROLES
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

-- CATEGORIES
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

-- LESSONS
CREATE TABLE public.lessons (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  description TEXT NOT NULL DEFAULT '',
  level TEXT NOT NULL DEFAULT 'A1',
  region TEXT NOT NULL DEFAULT 'de',
  category_slug TEXT NOT NULL,
  subcategory_slug TEXT,
  duration_seconds INT NOT NULL DEFAULT 30,
  thumbnail_key TEXT,
  video_url TEXT,
  is_premium BOOLEAN NOT NULL DEFAULT false,
  status TEXT NOT NULL DEFAULT 'draft',
  worksheet_url TEXT,
  popularity INT NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.lessons TO authenticated;
GRANT SELECT ON public.lessons TO anon;
GRANT ALL ON public.lessons TO service_role;
ALTER TABLE public.lessons ENABLE ROW LEVEL SECURITY;
CREATE POLICY "lessons public read" ON public.lessons FOR SELECT TO anon, authenticated USING (status = 'published' OR public.has_role(auth.uid(),'admin'));
CREATE POLICY "lessons admin write" ON public.lessons FOR ALL TO authenticated USING (public.has_role(auth.uid(),'admin')) WITH CHECK (public.has_role(auth.uid(),'admin'));

CREATE TABLE public.lesson_scenes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  lesson_id UUID NOT NULL REFERENCES public.lessons(id) ON DELETE CASCADE,
  position INT NOT NULL DEFAULT 0,
  german_text TEXT NOT NULL,
  translations JSONB NOT NULL DEFAULT '{}'::jsonb
);
CREATE TABLE public.vocabulary (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  lesson_id UUID NOT NULL REFERENCES public.lessons(id) ON DELETE CASCADE,
  position INT NOT NULL DEFAULT 0,
  term TEXT NOT NULL,
  translations JSONB NOT NULL DEFAULT '{}'::jsonb
);
CREATE TABLE public.dialogs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  lesson_id UUID NOT NULL REFERENCES public.lessons(id) ON DELETE CASCADE,
  position INT NOT NULL DEFAULT 0,
  speaker TEXT NOT NULL DEFAULT 'A',
  german_text TEXT NOT NULL,
  translations JSONB NOT NULL DEFAULT '{}'::jsonb
);
CREATE TABLE public.quiz_questions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  lesson_id UUID NOT NULL REFERENCES public.lessons(id) ON DELETE CASCADE,
  position INT NOT NULL DEFAULT 0,
  kind TEXT NOT NULL DEFAULT 'multiple_choice',
  prompt TEXT NOT NULL,
  explanation TEXT NOT NULL DEFAULT ''
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

-- USER DATA
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

-- CATEGORY SEED
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
('schmerzen','Schmerzen beschreiben','gesundheit',5),
('medikamente','Medikamente','gesundheit',6),
('untersuchung','Untersuchung','gesundheit',7),
('rezept','Rezept','gesundheit',8),
('krankenstand','Krankenstand','gesundheit',9),
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
('weg-fragen','Weg fragen','verkehr',7),
('fahrkarte','Fahrkarte kaufen','verkehr',8),
('hotel','Hotel','verkehr',9),
('kindergarten','Kindergarten','schule-familie',1),
('schule','Schule','schule-familie',2),
('elternsprechtag','Elternsprechtag','schule-familie',3),
('lehrer','Lehrer sprechen','schule-familie',4),
('kind-krank','Krankheit des Kindes','schule-familie',5),
('entschuldigung','Entschuldigung schreiben','schule-familie',6),
('schulausflug','Schulausflug','schule-familie',7),
('hausaufgaben','Hausaufgaben','schule-familie',8),
('bewerbung','Bewerbung','arbeit',1),
('vorstellungsgespraech','Vorstellungsgespräch','arbeit',2),
('erster-arbeitstag','Erster Arbeitstag','arbeit',3),
('chef','Chef','arbeit',4),
('kollegen','Kollegen','arbeit',5),
('dienstplan','Dienstplan','arbeit',6),
('urlaub','Urlaub','arbeit',7),
('arbeitsanweisung','Arbeitsanweisung','arbeit',8),
('gastronomie','Küche & Gastronomie','arbeit',9),
('baustelle','Baustelle','arbeit',10),
('pflege','Pflege','arbeit',11),
('krankenhaus-beruf','Krankenhaus (Beruf)','arbeit',12),
('facility','Facility Management','arbeit',13),
('handel','Handel','arbeit',14),
('elektro','Elektro','arbeit',15);

-- DEMO LESSON
INSERT INTO public.lessons (id, slug, title, description, level, region, category_slug, subcategory_slug, duration_seconds, thumbnail_key, is_premium, status, popularity) VALUES
('11111111-1111-1111-1111-111111111111','im-supermarkt','Im Supermarkt','Einkaufswagen nehmen, Produkte suchen, an der Kasse bezahlen – der komplette Einkauf in einfachen Sätzen.','A1','de','alltag','supermarkt',30,'supermarkt',false,'published',120),
('22222222-2222-2222-2222-222222222222','in-der-baeckerei','In der Bäckerei','Brötchen, Semmeln und Kaffee bestellen – höflich fragen und bezahlen.','A1','de','alltag','baeckerei',60,'baeckerei',false,'published',80),
('33333333-3333-3333-3333-333333333333','beim-hausarzt','Beim Hausarzt','Termin, Anmeldung, Beschwerden beschreiben und Rezept bekommen.','A2','de','gesundheit','hausarzt',600,'hausarzt',true,'published',95),
('44444444-4444-4444-4444-444444444444','auf-der-baustelle','Auf der Baustelle','Werkzeug, Arbeitsanweisungen und Sicherheit auf der Baustelle verstehen.','B1','at','arbeit','baustelle',900,'baustelle',true,'published',60),
('55555555-5555-5555-5555-555555555555','das-vorstellungsgespraech','Das Vorstellungsgespräch','Sich vorstellen, Erfahrung erklären und Fragen beantworten.','B2','de','arbeit','vorstellungsgespraech',720,'bewerbung',true,'published',70);

INSERT INTO public.lesson_scenes (lesson_id, position, german_text, translations) VALUES
('11111111-1111-1111-1111-111111111111',1,'Ich gehe in den Supermarkt.','{"tr":"Süpermarkete gidiyorum.","ar":"أذهب إلى السوبر ماركت.","uk":"Я йду до супермаркету.","bks":"Idem u supermarket.","ro":"Merg la supermarket."}'),
('11111111-1111-1111-1111-111111111111',2,'Ich nehme einen Einkaufswagen.','{"tr":"Bir market arabası alıyorum.","ar":"آخذ عربة تسوق.","uk":"Я беру візок для покупок.","bks":"Uzimam kolica za kupovinu.","ro":"Iau un cărucior de cumpărături."}'),
('11111111-1111-1111-1111-111111111111',3,'Ich brauche Brot und Milch.','{"tr":"Ekmek ve süte ihtiyacım var.","ar":"أحتاج خبزاً وحليباً.","uk":"Мені потрібні хліб і молоко.","bks":"Trebam hljeb i mlijeko.","ro":"Am nevoie de pâine și lapte."}'),
('11111111-1111-1111-1111-111111111111',4,'Ich suche die Milch.','{"tr":"Sütü arıyorum.","ar":"أبحث عن الحليب.","uk":"Я шукаю молоко.","bks":"Tražim mlijeko.","ro":"Caut laptele."}'),
('11111111-1111-1111-1111-111111111111',5,'Ich gehe zur Kasse.','{"tr":"Kasaya gidiyorum.","ar":"أذهب إلى الصندوق.","uk":"Я йду до каси.","bks":"Idem na kasu.","ro":"Merg la casă."}'),
('11111111-1111-1111-1111-111111111111',6,'Ich bezahle mit Karte.','{"tr":"Kartla ödüyorum.","ar":"أدفع بالبطاقة.","uk":"Я плачу карткою.","bks":"Plaćam karticom.","ro":"Plătesc cu cardul."}');

INSERT INTO public.vocabulary (lesson_id, position, term, translations) VALUES
('11111111-1111-1111-1111-111111111111',1,'der Einkaufswagen','{"tr":"market arabası","ar":"عربة التسوق","uk":"візок","bks":"kolica","ro":"cărucior"}'),
('11111111-1111-1111-1111-111111111111',2,'die Kasse','{"tr":"kasa","ar":"الصندوق","uk":"каса","bks":"kasa","ro":"casa de marcat"}'),
('11111111-1111-1111-1111-111111111111',3,'das Brot','{"tr":"ekmek","ar":"الخبز","uk":"хліб","bks":"hljeb","ro":"pâine"}'),
('11111111-1111-1111-1111-111111111111',4,'die Milch','{"tr":"süt","ar":"الحليب","uk":"молоко","bks":"mlijeko","ro":"lapte"}'),
('11111111-1111-1111-1111-111111111111',5,'bezahlen','{"tr":"ödemek","ar":"يدفع","uk":"платити","bks":"platiti","ro":"a plăti"}');

INSERT INTO public.dialogs (lesson_id, position, speaker, german_text, translations) VALUES
('11111111-1111-1111-1111-111111111111',1,'A','Entschuldigung, wo finde ich die Milch?','{"tr":"Affedersiniz, sütü nerede bulabilirim?","ar":"عفواً، أين أجد الحليب؟","uk":"Перепрошую, де я знайду молоко?","bks":"Izvinite, gdje mogu naći mlijeko?","ro":"Scuzați-mă, unde găsesc laptele?"}'),
('11111111-1111-1111-1111-111111111111',2,'B','Die Milch finden Sie dort hinten.','{"tr":"Sütü arkada bulabilirsiniz.","ar":"تجد الحليب هناك في الخلف.","uk":"Молоко там позаду.","bks":"Mlijeko je tamo pozadi.","ro":"Găsiți laptele acolo în spate."}'),
('11111111-1111-1111-1111-111111111111',3,'A','Danke.','{"tr":"Teşekkürler.","ar":"شكراً.","uk":"Дякую.","bks":"Hvala.","ro":"Mulțumesc."}'),
('11111111-1111-1111-1111-111111111111',4,'B','Gerne.','{"tr":"Rica ederim.","ar":"على الرحب والسعة.","uk":"Будь ласка.","bks":"Nema na čemu.","ro":"Cu plăcere."}');

INSERT INTO public.quiz_questions (id, lesson_id, position, kind, prompt, explanation) VALUES
('aaaaaaa1-0000-0000-0000-000000000001','11111111-1111-1111-1111-111111111111',1,'multiple_choice','Was nimmt Anna?','Im Video sagt sie: „Ich nehme einen Einkaufswagen."'),
('aaaaaaa1-0000-0000-0000-000000000002','11111111-1111-1111-1111-111111111111',2,'fill_gap','Ich ___ die Milch in den Einkaufswagen.','„legen" benutzt man, wenn etwas flach hineingelegt wird.'),
('aaaaaaa1-0000-0000-0000-000000000003','11111111-1111-1111-1111-111111111111',3,'true_false','Anna bezahlt mit Bargeld.','Falsch – sie sagt: „Ich bezahle mit Karte."');

INSERT INTO public.quiz_answers (question_id, position, text, is_correct) VALUES
('aaaaaaa1-0000-0000-0000-000000000001',1,'einen Korb',false),
('aaaaaaa1-0000-0000-0000-000000000001',2,'einen Einkaufswagen',true),
('aaaaaaa1-0000-0000-0000-000000000001',3,'eine Tasche',false),
('aaaaaaa1-0000-0000-0000-000000000002',1,'lege',true),
('aaaaaaa1-0000-0000-0000-000000000002',2,'fahre',false),
('aaaaaaa1-0000-0000-0000-000000000002',3,'trinke',false),
('aaaaaaa1-0000-0000-0000-000000000003',1,'Richtig',false),
('aaaaaaa1-0000-0000-0000-000000000003',2,'Falsch',true);

INSERT INTO public.lesson_scenes (lesson_id, position, german_text, translations) VALUES
('22222222-2222-2222-2222-222222222222',1,'Guten Morgen, ich hätte gern drei Brötchen.','{"tr":"Günaydın, üç ekmek istiyorum.","bks":"Dobro jutro, htio bih tri peciva."}'),
('22222222-2222-2222-2222-222222222222',2,'Und einen Kaffee zum Mitnehmen, bitte.','{"tr":"Ve bir kahve, paket olsun lütfen.","bks":"I jednu kafu za ponijeti, molim."}'),
('33333333-3333-3333-3333-333333333333',1,'Guten Tag, ich habe einen Termin um zehn Uhr.','{"tr":"İyi günler, saat onda randevum var.","bks":"Dobar dan, imam termin u deset sati."}'),
('33333333-3333-3333-3333-333333333333',2,'Ich habe seit drei Tagen Halsschmerzen.','{"tr":"Üç gündür boğazım ağrıyor.","bks":"Boli me grlo već tri dana."}'),
('44444444-4444-4444-4444-444444444444',1,'Bitte hol mir die Bohrmaschine.','{"tr":"Lütfen bana matkabı getir.","bks":"Molim te donesi mi bušilicu."}'),
('44444444-4444-4444-4444-444444444444',2,'Der Helm ist auf der Baustelle Pflicht.','{"tr":"Şantiyede kask zorunludur.","bks":"Kaciga je obavezna na gradilištu."}'),
('55555555-5555-5555-5555-555555555555',1,'Ich arbeite seit fünf Jahren in der Pflege.','{"tr":"Beş yıldır bakım alanında çalışıyorum.","bks":"Radim pet godina u njezi."}'),
('55555555-5555-5555-5555-555555555555',2,'Meine Stärke ist die Arbeit im Team.','{"tr":"Güçlü yanım takım çalışması.","bks":"Moja snaga je rad u timu."}');