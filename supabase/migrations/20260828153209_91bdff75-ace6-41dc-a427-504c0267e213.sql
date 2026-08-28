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

INSERT INTO public.products (slug, title, description, price_cents, cta_label, category, position) VALUES
('lebenslauf', 'Lebenslauf erstellen', 'Professioneller, deutschsprachiger Lebenslauf – modern gestaltet und auf deine Zielstelle abgestimmt.', 4900, 'Anfrage senden', 'bewerbung', 1),
('bewerbungsschreiben', 'Bewerbungsschreiben erstellen', 'Individuelles Anschreiben in korrektem Deutsch, das deine Stärken klar auf den Punkt bringt.', 5900, 'Anfrage senden', 'bewerbung', 2),
('bewerbungspaket', 'Lebenslauf + Bewerbungspaket', 'Komplettpaket: Lebenslauf, Anschreiben und Feedback zu deinen Unterlagen.', 9900, 'Anfrage senden', 'bewerbung', 3),
('unterlagen-pruefen', 'Bewerbungsunterlagen prüfen', 'Wir prüfen deine bestehenden Unterlagen auf Sprache, Struktur und Wirkung.', 2900, 'Anfrage senden', 'bewerbung', 4),
('interview-vorbereitung', 'Vorbereitung Bewerbungsgespräch', 'Übungsgespräch mit typischen Fragen, Formulierungshilfen und persönlichem Feedback.', 6900, 'Termin anfragen', 'coaching', 5),
('business-coaching', 'Business-Deutsch Einzelcoaching', 'Einzelunterricht für Beruf, Meetings, Telefonate und Kommunikation am Arbeitsplatz.', 4500, 'Termin anfragen', 'coaching', 6);