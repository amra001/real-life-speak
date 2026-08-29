import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import {
  ArrowRight,
  BookOpen,
  Briefcase,
  Bus,
  CheckCircle2,
  GraduationCap,
  HeartPulse,
  House,
  Package,
  Search,
  ShoppingBag,
  Sparkles,
  Target,
  Trophy,
  Utensils,
  Wrench,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TopicCard } from "@/components/site/TopicCard";
import { groupByTopic, lessonsQuery, type Topic } from "@/lib/data";
import {
  ALLTAG_CATEGORIES,
  BERUF_CATEGORIES,
  CATEGORIES,
  LEVELS,
  LEVEL_INFO,
  REGIONS,
  type Level,
} from "@/lib/taxonomy";

type SearchState = {
  kategorie?: string;
  unterthema?: string;
  level?: string;
  region?: string;
  zugang?: string;
  q?: string;
};

type QuickNeed = {
  label: string;
  subtitle: string;
  category: string;
  subcategory?: string;
  icon: typeof ShoppingBag;
};

export const Route = createFileRoute("/lektionen")({
  validateSearch: (search: Record<string, unknown>): SearchState => ({
    kategorie: typeof search["kategorie"] === "string" ? search["kategorie"] : undefined,
    unterthema: typeof search["unterthema"] === "string" ? search["unterthema"] : undefined,
    level: typeof search["level"] === "string" ? search["level"] : undefined,
    region: typeof search["region"] === "string" ? search["region"] : undefined,
    zugang: typeof search["zugang"] === "string" ? search["zugang"] : undefined,
    q: typeof search["q"] === "string" ? search["q"] : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Lektionen-Bibliothek – RealLife German" },
      {
        name: "description",
        content:
          "Deutsch für echte Situationen: Lernpfade für A1, A2 und B1, Alltag, Gesundheit, Wohnen, Verkehr, Schule und Deutsch im Beruf.",
      },
      { property: "og:title", content: "Lektionen-Bibliothek – RealLife German" },
      {
        property: "og:description",
        content: "Wähle, was du heute wirklich brauchst – und trainiere Deutsch in echten Situationen.",
      },
    ],
  }),
  component: Library,
});

const LEVEL_COPY: Record<"A1" | "A2" | "B1", { eyebrow: string; title: string; text: string; goal: string }> = {
  A1: {
    eyebrow: "Sicher starten",
    title: "Deutsch für die wichtigsten Momente",
    text: "Kurze, klare Sätze für Einkaufen, Wege, Termine, Gesundheit und die ersten Gespräche.",
    goal: "Konkrete Bedürfnisse ausdrücken",
  },
  A2: {
    eyebrow: "Routine gewinnen",
    title: "Selbstständiger durch den Alltag",
    text: "Informationen austauschen, nachfragen, vergleichen und vertraute Situationen sicherer meistern.",
    goal: "Alltagssituationen aktiv bewältigen",
  },
  B1: {
    eyebrow: "Selbstständig sprechen",
    title: "Probleme erklären und Lösungen finden",
    text: "Gründe nennen, Rückfragen stellen, Erfahrungen beschreiben und auch schwierigere Situationen lösen.",
    goal: "Zusammenhängend und sicher kommunizieren",
  },
};

const QUICK_NEEDS: QuickNeed[] = [
  { label: "Einkaufen", subtitle: "Supermarkt, Bäckerei & Kasse", category: "alltag", subcategory: "supermarkt", icon: ShoppingBag },
  { label: "Zum Arzt", subtitle: "Beschwerden erklären & verstehen", category: "gesundheit", subcategory: "hausarzt", icon: HeartPulse },
  { label: "Unterwegs", subtitle: "Bus, Bahnhof & Orientierung", category: "verkehr", subcategory: "bus", icon: Bus },
  { label: "Wohnen", subtitle: "Wohnung, Vermieter & Reparatur", category: "wohnen", icon: House },
  { label: "Schule & Familie", subtitle: "Lehrer, Elternabend & Alltag", category: "schule-familie", icon: GraduationCap },
  { label: "Bei der Arbeit", subtitle: "Anweisungen, Kollegen & Probleme", category: "arbeit", icon: Briefcase },
];

const LIFE_AREA_META = [
  { slug: "alltag", label: "Alltag", text: "Einkaufen, Restaurant, Bank und tägliche Gespräche", icon: ShoppingBag },
  { slug: "gesundheit", label: "Gesundheit", text: "Arzt, Apotheke, Beschwerden und Medikamente", icon: HeartPulse },
  { slug: "wohnen", label: "Wohnen", text: "Wohnung, Vermieter, Reparaturen und Umzug", icon: House },
  { slug: "verkehr", label: "Verkehr & Reisen", text: "Bus, Bahnhof, Tickets, Wege und Reisen", icon: Bus },
  { slug: "schule-familie", label: "Schule & Familie", text: "Schule, Elternsprechtag und Familienalltag", icon: GraduationCap },
];

const JOB_AREA_META = [
  { slug: "arbeit", label: "Allgemeine Arbeit", icon: Briefcase },
  { slug: "gastronomie", label: "Küche & Gastronomie", icon: Utensils },
  { slug: "baustelle", label: "Baustelle", icon: Wrench },
  { slug: "pflege", label: "Pflege", icon: HeartPulse },
  { slug: "krankenhaus-beruf", label: "Krankenhaus", icon: HeartPulse },
  { slug: "facility", label: "Facility Management", icon: Wrench },
  { slug: "handel", label: "Handel", icon: ShoppingBag },
  { slug: "logistik", label: "Logistik & Lager", icon: Package },
  { slug: "job-bewerbung", label: "Job & Bewerbung", icon: Target },
];

function Library() {
  const search = Route.useSearch();
  const navigate = useNavigate({ from: "/lektionen" });
  const { data, isLoading } = useQuery(lessonsQuery());

  const set = (patch: SearchState): void => {
    void navigate({ search: (prev) => ({ ...prev, ...patch }), replace: true });
  };

  const focusLibrary = (patch: SearchState) => {
    set(patch);
    window.setTimeout(() => document.getElementById("alle-lektionen")?.scrollIntoView({ behavior: "smooth", block: "start" }), 80);
  };

  const activeCategory = CATEGORIES.find((c) => c.slug === search.kategorie);

  const lessons = (data ?? []).filter((l) => {
    if (search.kategorie && l.category_slug !== search.kategorie) return false;
    if (search.unterthema && l.subcategory_slug !== search.unterthema) return false;
    if (search.level && l.level !== search.level) return false;
    if (search.region && l.region !== search.region) return false;
    if (search.zugang === "gratis" && l.is_premium) return false;
    if (search.zugang === "premium" && !l.is_premium) return false;
    if (search.q && !`${l.title} ${l.description}`.toLowerCase().includes(search.q.toLowerCase())) return false;
    return true;
  });

  const topics = groupByTopic(lessons);
  const allTopics = groupByTopic(data ?? []);

  const countForCategory = (slug: string) => allTopics.filter((t) => t.category_slug === slug).length;
  const availableJobAreas = JOB_AREA_META.filter((a) => countForCategory(a.slug) > 0);

  const pickTopics = (...keywords: string[]) => {
    const lower = keywords.map((k) => k.toLowerCase());
    return allTopics.filter((t) => lower.some((k) => `${t.slug} ${t.title}`.toLowerCase().includes(k))).slice(0, 6);
  };

  const starterTopics = pickTopics("baeck", "supermarkt", "bus", "apotheke", "hausarzt", "restaurant");
  const workTopics = allTopics.filter((t) => BERUF_CATEGORIES.some((c) => c.slug === t.category_slug)).slice(0, 6);
  const problemTopics = pickTopics("reparatur", "arzt", "apotheke", "bank", "bus", "wohnung");

  return (
    <div className="pb-16">
      <section className="border-b border-border bg-gradient-to-b from-card to-background">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <Badge variant="outline" className="mb-4 gap-1.5 bg-background/80 px-3 py-1.5">
            <Sparkles className="h-3.5 w-3.5" /> Deutsch, das du wirklich brauchst
          </Badge>
          <div className="max-w-4xl">
            <h1 className="font-serif text-4xl font-semibold tracking-tight md:text-6xl">Lerne nicht irgendein Deutsch. Lerne dein echtes Leben.</h1>
            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              Wähle eine Situation, trainiere Wortschatz, Dialoge und Grammatik und übe genau die Sprache, die du draußen wirklich brauchst.
            </p>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            <ValuePill icon={BookOpen} title="15 Situationen" text="pro Lernmodul" />
            <ValuePill icon={CheckCircle2} title="9 Lernbereiche" text="vom Wortschatz bis zum Test" />
            <ValuePill icon={Trophy} title="A1 · A2 · B1" text="klar nach Niveau aufgebaut" />
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4">
        <section className="py-10 md:py-12">
          <SectionHeading eyebrow="Dein Weg" title="Wähle deinen Lernpfad" text="Jedes Niveau hat ein klares Ziel. Du kannst frei stöbern oder dich Schritt für Schritt entlang deines Niveaus bewegen." />
          <div className="mt-6 grid gap-5 lg:grid-cols-3">
            {(["A1", "A2", "B1"] as const).map((lvl) => {
              const count = allTopics.filter((t) => t.levels.some((l) => l.level === lvl)).length;
              const copy = LEVEL_COPY[lvl];
              const active = search.level === lvl;
              return (
                <button
                  key={lvl}
                  onClick={() => focusLibrary({ level: active ? undefined : lvl })}
                  className={active ? "group rounded-3xl border border-foreground bg-foreground p-6 text-left text-background shadow-lg" : "group rounded-3xl border border-border bg-card p-6 text-left transition-all hover:-translate-y-1 hover:shadow-lg"}
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className={active ? "text-xs uppercase tracking-[0.2em] text-background/65" : "text-xs uppercase tracking-[0.2em] text-muted-foreground"}>{copy.eyebrow}</div>
                    <span className={active ? "rounded-full bg-background/10 px-3 py-1 text-sm font-semibold" : "rounded-full bg-muted px-3 py-1 text-sm font-semibold"}>{lvl}</span>
                  </div>
                  <h2 className="mt-5 font-serif text-2xl font-semibold">{copy.title}</h2>
                  <p className={active ? "mt-3 text-sm leading-relaxed text-background/75" : "mt-3 text-sm leading-relaxed text-muted-foreground"}>{copy.text}</p>
                  <div className={active ? "mt-5 border-t border-background/15 pt-4" : "mt-5 border-t border-border pt-4"}>
                    <div className="flex items-center gap-2 text-sm font-medium"><Target className="h-4 w-4" /> {copy.goal}</div>
                    <div className={active ? "mt-2 text-sm text-background/65" : "mt-2 text-sm text-muted-foreground"}>{count} Themen verfügbar</div>
                  </div>
                </button>
              );
            })}
          </div>
        </section>

        <section className="border-y border-border py-10 md:py-12">
          <SectionHeading eyebrow="Sofort finden" title="Was brauchst du heute?" text="Nicht nach Grammatik suchen – sondern nach der Situation, die du gerade lösen möchtest." />
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {QUICK_NEEDS.map((need) => {
              const Icon = need.icon;
              return (
                <button key={need.label} onClick={() => focusLibrary({ kategorie: need.category, unterthema: need.subcategory })} className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-4 text-left transition-all hover:-translate-y-0.5 hover:border-foreground/30 hover:shadow-md">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-muted"><Icon className="h-5 w-5" /></div>
                  <div className="min-w-0 flex-1"><div className="font-medium">{need.label}</div><div className="mt-0.5 text-sm text-muted-foreground">{need.subtitle}</div></div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1" />
                </button>
              );
            })}
          </div>
        </section>

        <section className="py-10 md:py-12">
          <SectionHeading eyebrow="Echtes Leben" title="Deutsch für deinen Alltag" text="Jeder Bereich bündelt konkrete Situationen. Du lernst nicht isolierte Wörter, sondern komplette Abläufe und Gespräche." />
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {LIFE_AREA_META.map((area) => {
              const Icon = area.icon;
              const count = countForCategory(area.slug);
              return (
                <button key={area.slug} onClick={() => focusLibrary({ kategorie: area.slug, unterthema: undefined })} className="group rounded-3xl border border-border bg-card p-5 text-left transition-all hover:-translate-y-1 hover:shadow-lg">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-muted"><Icon className="h-5 w-5" /></div>
                  <h3 className="mt-4 font-serif text-xl font-semibold">{area.label}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{area.text}</p>
                  <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground"><span>{count} Themen</span><ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></div>
                </button>
              );
            })}
          </div>
        </section>

        <section className="rounded-[2rem] border border-border bg-foreground px-5 py-8 text-background md:px-8 md:py-10">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.6fr] lg:items-start">
            <div>
              <div className="text-xs uppercase tracking-[0.22em] text-background/55">Deutsch im Beruf</div>
              <h2 className="mt-3 font-serif text-3xl font-semibold md:text-4xl">Sprache, die am Arbeitsplatz funktioniert.</h2>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-background/70 md:text-base">Arbeitsanweisungen verstehen, Rückfragen stellen, Probleme erklären und mit Kollegen, Kunden oder Patienten kommunizieren.</p>
              <div className="mt-6 flex items-center gap-2 text-sm text-background/75"><CheckCircle2 className="h-4 w-4" /> Alltagssprache + echte Berufssituationen</div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
              {(availableJobAreas.length ? availableJobAreas : JOB_AREA_META.slice(0, 6)).map((area) => {
                const Icon = area.icon;
                return (
                  <button key={area.slug} onClick={() => focusLibrary({ kategorie: area.slug, unterthema: undefined })} className="group rounded-2xl border border-background/15 bg-background/5 p-4 text-left transition hover:bg-background/10">
                    <div className="flex items-center gap-3"><Icon className="h-5 w-5" /><span className="font-medium">{area.label}</span></div>
                    <div className="mt-3 flex items-center justify-between text-xs text-background/55"><span>{countForCategory(area.slug)} Themen</span><ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></div>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {(starterTopics.length > 0 || workTopics.length > 0 || problemTopics.length > 0) && (
          <section className="py-10 md:py-12">
            <SectionHeading eyebrow="Kuratierte Sammlungen" title="Schneller zum richtigen Training" text="Für typische Ziele haben wir passende Themen gebündelt. So musst du nicht erst durch die ganze Bibliothek suchen." />
            <div className="mt-6 grid gap-5 lg:grid-cols-3">
              <CollectionCard title="Perfekt für den Start" text="Die Situationen, die du im Alltag besonders schnell brauchst." icon={Sparkles} topics={starterTopics} />
              <CollectionCard title="Deutsch für den Job" text="Sicherer kommunizieren, verstehen und nachfragen am Arbeitsplatz." icon={Briefcase} topics={workTopics} />
              <CollectionCard title="Wenn etwas nicht nach Plan läuft" text="Probleme erklären, nachfragen und gemeinsam eine Lösung finden." icon={Wrench} topics={problemTopics} />
            </div>
          </section>
        )}

        <section id="alle-lektionen" className="scroll-mt-6 border-t border-border py-10 md:py-12">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <SectionHeading eyebrow="Alle Lektionen" title="Finde genau dein Thema" text="Suche frei oder filtere nach Lebensbereich, Beruf, Niveau, Region und Zugang." />
            {(search.kategorie || search.unterthema || search.level || search.region || search.zugang || search.q) && (
              <Button variant="outline" onClick={() => void navigate({ search: {}, replace: true })}>Alle Filter zurücksetzen</Button>
            )}
          </div>

          <div className="mt-6 space-y-5 rounded-3xl border border-border bg-card p-5 md:p-6">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input className="h-12 rounded-2xl pl-11" placeholder="Suchen, z. B. Supermarkt, Hausarzt oder Bewerbung" value={search.q ?? ""} onChange={(e) => set({ q: e.target.value || undefined })} />
            </div>
            <FilterRow label="Alltag" options={ALLTAG_CATEGORIES.map((c) => ({ value: c.slug, label: c.name }))} value={search.kategorie} onChange={(v) => set({ kategorie: v, unterthema: undefined })} />
            <FilterRow label="Beruf" options={BERUF_CATEGORIES.map((c) => ({ value: c.slug, label: c.name }))} value={search.kategorie} onChange={(v) => set({ kategorie: v, unterthema: undefined })} />
            {activeCategory && <FilterRow label={`Unterthema · ${activeCategory.name}`} options={activeCategory.children.map((c) => ({ value: c.slug, label: c.name }))} value={search.unterthema} onChange={(v) => set({ unterthema: v })} />}
            <div className="grid gap-5 border-t border-border pt-5 md:grid-cols-3">
              <FilterRow label="Niveau" options={LEVELS.map((l) => ({ value: l, label: l }))} value={search.level} onChange={(v) => set({ level: v })} />
              <FilterRow label="Region" options={REGIONS.map((r) => ({ value: r.slug, label: `${r.flag} ${r.label}` }))} value={search.region} onChange={(v) => set({ region: v })} />
              <FilterRow label="Zugang" options={[{ value: "gratis", label: "Gratis testen" }, { value: "premium", label: "Premium" }]} value={search.zugang} onChange={(v) => set({ zugang: v })} />
            </div>
          </div>

          {search.level && LEVEL_INFO[search.level as Level] && (
            <div className="mt-5 rounded-2xl border border-border bg-muted/40 p-4 text-sm text-muted-foreground"><span className="font-medium text-foreground">{LEVEL_INFO[search.level as Level].label}:</span> {LEVEL_INFO[search.level as Level].description}</div>
          )}

          {isLoading ? (
            <p className="mt-10 text-muted-foreground">Lektionen werden geladen …</p>
          ) : topics.length === 0 ? (
            <div className="mt-10 rounded-3xl border border-dashed border-border p-10 text-center"><p className="text-muted-foreground">Für diese Auswahl gibt es aktuell keine passenden Themen.</p><Button variant="outline" className="mt-4" onClick={() => void navigate({ search: {}, replace: true })}>Filter zurücksetzen</Button></div>
          ) : (
            <>
              <div className="mt-8 flex flex-wrap items-center justify-between gap-3"><div><div className="font-serif text-2xl font-semibold">{topics.length} passende Themen</div><div className="mt-1 text-sm text-muted-foreground">Jedes Modul führt durch Situation, Wortschatz, Dialoge, Grammatik, Übungen und Abschlusstest.</div></div><Badge variant="outline" className="px-3 py-1.5">15 Situationen · 9 Lernbereiche</Badge></div>
              <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{topics.map((t) => <TopicCard key={t.slug} topic={t} />)}</div>
            </>
          )}
        </section>
      </div>
    </div>
  );
}

function ValuePill({ icon: Icon, title, text }: { icon: typeof BookOpen; title: string; text: string }) {
  return <div className="flex items-center gap-3 rounded-2xl border border-border bg-background/85 p-4 shadow-sm"><div className="flex h-10 w-10 items-center justify-center rounded-xl bg-muted"><Icon className="h-5 w-5" /></div><div><div className="font-medium">{title}</div><div className="text-sm text-muted-foreground">{text}</div></div></div>;
}

function SectionHeading({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return <div className="max-w-3xl"><div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">{eyebrow}</div><h2 className="mt-2 font-serif text-3xl font-semibold md:text-4xl">{title}</h2><p className="mt-3 leading-relaxed text-muted-foreground">{text}</p></div>;
}

function CollectionCard({ title, text, icon: Icon, topics }: { title: string; text: string; icon: typeof Sparkles; topics: Topic[] }) {
  return <div className="rounded-3xl border border-border bg-card p-5"><div className="flex h-10 w-10 items-center justify-center rounded-xl bg-muted"><Icon className="h-5 w-5" /></div><h3 className="mt-4 font-serif text-xl font-semibold">{title}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p><div className="mt-5 space-y-2">{topics.slice(0, 5).map((topic) => <Link key={topic.slug} to="/thema/$slug" params={{ slug: topic.slug }} className="group flex items-center justify-between gap-3 rounded-xl border border-border px-3 py-2.5 text-sm hover:bg-muted"><span className="line-clamp-1 font-medium">{topic.title}</span><ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1" /></Link>)}</div></div>;
}

function FilterRow({ label, options, value, onChange }: { label: string; options: { value: string; label: string }[]; value?: string; onChange: (v: string | undefined) => void | Promise<void> }) {
  return <div><div className="mb-2 text-xs uppercase tracking-widest text-muted-foreground">{label}</div><div className="flex flex-wrap gap-2">{options.map((o) => { const active = value === o.value; return <button key={o.value} onClick={() => onChange(active ? undefined : o.value)} className={active ? "rounded-full bg-foreground px-3 py-1.5 text-sm text-background" : "rounded-full border border-border px-3 py-1.5 text-sm hover:bg-muted"}>{o.label}</button>; })}</div></div>;
}
