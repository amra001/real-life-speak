import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import {
  ArrowRight,
  BookOpen,
  Briefcase,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Search,
  Sparkles,
  Trophy,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TopicCard } from "@/components/site/TopicCard";
import { groupByTopic, lessonsQuery } from "@/lib/data";
import {
  ALLTAG_CATEGORIES,
  BERUF_CATEGORIES,
  CATEGORIES,
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

type AreaMode = "alltag" | "beruf" | undefined;

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
      { title: "Lektionen – RealLife German" },
      {
        name: "description",
        content: "Finde schnell das Deutsch, das du im Alltag oder Beruf wirklich brauchst – klar nach A1, A2 und B1 geordnet.",
      },
    ],
  }),
  component: Library,
});

const LEVEL_COPY: Record<"A1" | "A2" | "B1", { title: string; text: string }> = {
  A1: { title: "Sicher starten", text: "Kurze, klare Sätze für die wichtigsten Situationen." },
  A2: { title: "Selbstständiger werden", text: "Nachfragen, verstehen und Alltag sicherer meistern." },
  B1: { title: "Sicher kommunizieren", text: "Probleme erklären, Gründe nennen und Lösungen finden." },
};

function Library() {
  const search = Route.useSearch();
  const navigate = useNavigate({ from: "/lektionen" });
  const { data, isLoading } = useQuery(lessonsQuery());
  const [showMoreFilters, setShowMoreFilters] = useState(Boolean(search.region || search.zugang));

  const categoryIsAlltag = ALLTAG_CATEGORIES.some((c) => c.slug === search.kategorie);
  const categoryIsBeruf = BERUF_CATEGORIES.some((c) => c.slug === search.kategorie);
  const [areaMode, setAreaMode] = useState<AreaMode>(categoryIsAlltag ? "alltag" : categoryIsBeruf ? "beruf" : undefined);

  const set = (patch: SearchState): void => {
    void navigate({ search: (prev) => ({ ...prev, ...patch }), replace: true });
  };

  const clearAll = () => {
    setAreaMode(undefined);
    setShowMoreFilters(false);
    void navigate({ search: {}, replace: true });
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
  const resultReady = Boolean(search.kategorie || search.q);

  const selectArea = (mode: AreaMode) => {
    setAreaMode(mode);
    set({ kategorie: undefined, unterthema: undefined });
  };

  const selectCategory = (slug: string) => {
    set({ kategorie: search.kategorie === slug ? undefined : slug, unterthema: undefined });
    window.setTimeout(() => document.getElementById("ergebnisse")?.scrollIntoView({ behavior: "smooth", block: "start" }), 80);
  };

  return (
    <div className="pb-16">
      <section className="border-b border-border bg-gradient-to-b from-card to-background">
        <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
          <Badge variant="outline" className="mb-4 gap-1.5 bg-background/80 px-3 py-1.5">
            <Sparkles className="h-3.5 w-3.5" /> Deutsch, das du wirklich brauchst
          </Badge>
          <h1 className="max-w-4xl font-serif text-4xl font-semibold tracking-tight md:text-6xl">
            Was möchtest du heute lernen?
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            Drei Entscheidungen statt hundert Möglichkeiten. Wähle dein Niveau, deinen Bereich und dann dein Thema.
          </p>
          <div className="mt-7 flex flex-wrap gap-3 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-2"><BookOpen className="h-4 w-4" /> 15 Situationen pro Modul</span>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-2"><CheckCircle2 className="h-4 w-4" /> 9 Lernbereiche</span>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-2"><Trophy className="h-4 w-4" /> A1 · A2 · B1</span>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-6xl px-4">
        <section className="py-8 md:py-10">
          <div className="rounded-[2rem] border border-border bg-card p-5 shadow-sm md:p-8">
            <div className="flex flex-col gap-2 border-b border-border pb-6 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Dein Weg</div>
                <h2 className="mt-2 font-serif text-3xl font-semibold md:text-4xl">In 3 Schritten zum passenden Thema</h2>
              </div>
              {(search.kategorie || search.unterthema || search.level || search.region || search.zugang || search.q) && (
                <Button variant="ghost" onClick={clearAll}>Auswahl zurücksetzen</Button>
              )}
            </div>

            <div className="py-6">
              <StepHeader number="1" title="Welches Niveau lernst du?" optional="optional" />
              <div className="mt-4 grid gap-3 md:grid-cols-3">
                {(["A1", "A2", "B1"] as const).map((lvl) => {
                  const active = search.level === lvl;
                  const copy = LEVEL_COPY[lvl];
                  return (
                    <button
                      key={lvl}
                      onClick={() => set({ level: active ? undefined : lvl })}
                      className={active ? "rounded-2xl border border-foreground bg-foreground p-4 text-left text-background" : "rounded-2xl border border-border bg-background p-4 text-left transition hover:border-foreground/30 hover:shadow-sm"}
                    >
                      <div className="flex items-center justify-between gap-3">
                        <span className="text-xl font-semibold">{lvl}</span>
                        {active && <CheckCircle2 className="h-5 w-5" />}
                      </div>
                      <div className="mt-2 font-medium">{copy.title}</div>
                      <div className={active ? "mt-1 text-sm text-background/70" : "mt-1 text-sm text-muted-foreground"}>{copy.text}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="border-t border-border py-6">
              <StepHeader number="2" title="Wo brauchst du Deutsch?" />
              <div className="mt-4 grid gap-3 md:grid-cols-2">
                <button
                  onClick={() => selectArea(areaMode === "alltag" ? undefined : "alltag")}
                  className={areaMode === "alltag" ? "flex items-center gap-4 rounded-2xl border border-foreground bg-foreground p-5 text-left text-background" : "flex items-center gap-4 rounded-2xl border border-border bg-background p-5 text-left transition hover:border-foreground/30 hover:shadow-sm"}
                >
                  <div className={areaMode === "alltag" ? "flex h-12 w-12 items-center justify-center rounded-2xl bg-background/10" : "flex h-12 w-12 items-center justify-center rounded-2xl bg-muted"}><BookOpen className="h-6 w-6" /></div>
                  <div className="flex-1"><div className="text-lg font-semibold">Alltag & Leben</div><div className={areaMode === "alltag" ? "mt-1 text-sm text-background/70" : "mt-1 text-sm text-muted-foreground"}>Einkaufen, Arzt, Wohnen, unterwegs, Schule & Familie</div></div>
                  <ArrowRight className="h-5 w-5" />
                </button>
                <button
                  onClick={() => selectArea(areaMode === "beruf" ? undefined : "beruf")}
                  className={areaMode === "beruf" ? "flex items-center gap-4 rounded-2xl border border-foreground bg-foreground p-5 text-left text-background" : "flex items-center gap-4 rounded-2xl border border-border bg-background p-5 text-left transition hover:border-foreground/30 hover:shadow-sm"}
                >
                  <div className={areaMode === "beruf" ? "flex h-12 w-12 items-center justify-center rounded-2xl bg-background/10" : "flex h-12 w-12 items-center justify-center rounded-2xl bg-muted"}><Briefcase className="h-6 w-6" /></div>
                  <div className="flex-1"><div className="text-lg font-semibold">Deutsch im Beruf</div><div className={areaMode === "beruf" ? "mt-1 text-sm text-background/70" : "mt-1 text-sm text-muted-foreground"}>Arbeitsplatz, Gastronomie, Pflege, Handel, Technik und mehr</div></div>
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </div>

            {areaMode && (
              <div className="border-t border-border py-6">
                <StepHeader number="3" title={areaMode === "alltag" ? "Wähle deinen Lebensbereich" : "Wähle deinen Berufsbereich"} />
                <div className="mt-4 flex flex-wrap gap-2">
                  {(areaMode === "alltag" ? ALLTAG_CATEGORIES : BERUF_CATEGORIES).map((category) => {
                    const active = search.kategorie === category.slug;
                    return (
                      <button
                        key={category.slug}
                        onClick={() => selectCategory(category.slug)}
                        className={active ? "rounded-full bg-foreground px-4 py-2.5 text-sm font-medium text-background" : "rounded-full border border-border bg-background px-4 py-2.5 text-sm font-medium transition hover:bg-muted"}
                      >
                        {category.name}
                      </button>
                    );
                  })}
                </div>

                {activeCategory && activeCategory.children.length > 0 && (
                  <div className="mt-5 rounded-2xl bg-muted/55 p-4">
                    <div className="mb-3 text-xs font-medium uppercase tracking-widest text-muted-foreground">Noch genauer wählen · optional</div>
                    <div className="flex flex-wrap gap-2">
                      {activeCategory.children.map((child) => {
                        const active = search.unterthema === child.slug;
                        return (
                          <button key={child.slug} onClick={() => set({ unterthema: active ? undefined : child.slug })} className={active ? "rounded-full bg-foreground px-3 py-2 text-sm text-background" : "rounded-full border border-border bg-card px-3 py-2 text-sm hover:bg-background"}>
                            {child.name}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            )}

            <div className="border-t border-border pt-6">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input className="h-13 rounded-2xl pl-11" placeholder="Oder direkt suchen: Supermarkt, Hausarzt, Bewerbung …" value={search.q ?? ""} onChange={(e) => set({ q: e.target.value || undefined })} />
              </div>

              <button onClick={() => setShowMoreFilters((v) => !v)} className="mt-4 flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground">
                {showMoreFilters ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                Weitere Filter {search.region || search.zugang ? "· aktiv" : ""}
              </button>

              {showMoreFilters && (
                <div className="mt-4 grid gap-5 rounded-2xl border border-border bg-muted/30 p-4 md:grid-cols-2">
                  <FilterRow label="Region" options={REGIONS.map((r) => ({ value: r.slug, label: `${r.flag} ${r.label}` }))} value={search.region} onChange={(v) => set({ region: v })} />
                  <FilterRow label="Zugang" options={[{ value: "gratis", label: "Gratis testen" }, { value: "premium", label: "Premium" }]} value={search.zugang} onChange={(v) => set({ zugang: v })} />
                </div>
              )}
            </div>
          </div>
        </section>

        <section id="ergebnisse" className="scroll-mt-6 border-t border-border py-8 md:py-10">
          {!resultReady ? (
            <div className="rounded-3xl border border-dashed border-border bg-muted/25 p-8 text-center md:p-12">
              <div className="font-serif text-2xl font-semibold">Wähle oben einen Bereich oder nutze die Suche.</div>
              <p className="mx-auto mt-2 max-w-xl text-muted-foreground">Dann zeigen wir dir nur die Themen, die wirklich zu deiner Auswahl passen – nicht die ganze Bibliothek auf einmal.</p>
            </div>
          ) : isLoading ? (
            <p className="text-muted-foreground">Lektionen werden geladen …</p>
          ) : topics.length === 0 ? (
            <div className="rounded-3xl border border-dashed border-border p-10 text-center"><p className="text-muted-foreground">Für diese Auswahl gibt es aktuell keine passenden Themen.</p><Button variant="outline" className="mt-4" onClick={clearAll}>Auswahl zurücksetzen</Button></div>
          ) : (
            <>
              <div className="flex flex-col justify-between gap-3 md:flex-row md:items-end">
                <div>
                  <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Deine Auswahl</div>
                  <h2 className="mt-2 font-serif text-3xl font-semibold">{topics.length} passende Themen</h2>
                  {search.level && LEVEL_INFO[search.level as Level] && <p className="mt-2 text-sm text-muted-foreground">{LEVEL_INFO[search.level as Level].label}: {LEVEL_INFO[search.level as Level].description}</p>}
                </div>
                <Badge variant="outline" className="w-fit px-3 py-1.5">15 Situationen · 9 Lernbereiche</Badge>
              </div>
              <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{topics.map((topic) => <TopicCard key={topic.slug} topic={topic} />)}</div>
            </>
          )}
        </section>
      </main>
    </div>
  );
}

function StepHeader({ number, title, optional }: { number: string; title: string; optional?: string }) {
  return <div className="flex items-center gap-3"><div className="flex h-8 w-8 items-center justify-center rounded-full bg-foreground text-sm font-semibold text-background">{number}</div><div className="text-lg font-semibold">{title}</div>{optional && <span className="text-sm text-muted-foreground">· {optional}</span>}</div>;
}

function FilterRow({ label, options, value, onChange }: { label: string; options: { value: string; label: string }[]; value?: string; onChange: (v: string | undefined) => void | Promise<void> }) {
  return <div><div className="mb-2 text-xs uppercase tracking-widest text-muted-foreground">{label}</div><div className="flex flex-wrap gap-2">{options.map((option) => { const active = value === option.value; return <button key={option.value} onClick={() => onChange(active ? undefined : option.value)} className={active ? "rounded-full bg-foreground px-3 py-2 text-sm text-background" : "rounded-full border border-border bg-card px-3 py-2 text-sm hover:bg-background"}>{option.label}</button>; })}</div></div>;
}
