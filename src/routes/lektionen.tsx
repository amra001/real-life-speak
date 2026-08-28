import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { LessonCard } from "@/components/site/LessonCard";
import { lessonsQuery } from "@/lib/data";
import {
  ALLTAG_CATEGORIES,
  BERUF_CATEGORIES,
  CATEGORIES,
  FREE_MAX_SECONDS,
  LEVELS,
  LEVEL_INFO,
  REGIONS,
  type Level,
} from "@/lib/taxonomy";

type Search = {
  kategorie?: string | undefined;
  unterthema?: string | undefined;
  level?: string | undefined;
  region?: string | undefined;
  zugang?: string | undefined;
  q?: string | undefined;
};

export const Route = createFileRoute("/lektionen")({
  validateSearch: (search: Record<string, unknown>): Search => ({
    kategorie: typeof search['kategorie'] === "string" ? search['kategorie'] : undefined,
    unterthema: typeof search['unterthema'] === "string" ? search['unterthema'] : undefined,
    level: typeof search['level'] === "string" ? search['level'] : undefined,
    region: typeof search['region'] === "string" ? search['region'] : undefined,
    zugang: typeof search['zugang'] === "string" ? search['zugang'] : undefined,
    q: typeof search['q'] === "string" ? search['q'] : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Lektionen-Bibliothek – RealLife German" },
      {
        name: "description",
        content:
          "Alle Video-Lektionen nach Thema, Niveau, Region und Zugang filtern: Alltag, Gesundheit, Wohnen, Verkehr, Schule und alle Berufsbereiche.",
      },
      { property: "og:title", content: "Lektionen-Bibliothek – RealLife German" },
      {
        property: "og:description",
        content: "Deutsch-Lektionen aus echten Situationen, filterbar nach Thema und Niveau.",
      },
    ],
  }),
  component: Library,
});

function Library() {
  const search = Route.useSearch();
  const navigate = useNavigate({ from: "/lektionen" });
  const { data, isLoading } = useQuery(lessonsQuery());

  const set = (patch: Search): void => {
    void navigate({ search: (prev) => ({ ...prev, ...patch }), replace: true });
  };

  const activeCategory = CATEGORIES.find((c) => c.slug === search.kategorie);

  const lessons = (data ?? []).filter((l) => {
    if (search.kategorie && l.category_slug !== search.kategorie) return false;
    if (search.unterthema && l.subcategory_slug !== search.unterthema) return false;
    if (search.level && l.level !== search.level) return false;
    if (search.region && l.region !== search.region) return false;
    if (search.zugang === "gratis" && (l.is_premium || l.duration_seconds > FREE_MAX_SECONDS))
      return false;
    if (search.zugang === "premium" && !l.is_premium) return false;
    if (search.q && !`${l.title} ${l.description}`.toLowerCase().includes(search.q.toLowerCase()))
      return false;
    return true;
  });

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="font-serif text-3xl font-semibold md:text-4xl">Lektionen-Bibliothek</h1>
      <p className="mt-2 text-muted-foreground">
        Wähle Thema, Niveau und Region – und starte mit einer echten Situation.
      </p>

      <div className="mt-8 space-y-4 rounded-2xl border border-border bg-card p-5">
        <Input
          placeholder="Suchen, z. B. Supermarkt oder Arzt"
          value={search.q ?? ""}
          onChange={(e) => set({ q: e.target.value || undefined })}
        />
        <FilterRow
          label="Alltag"
          options={ALLTAG_CATEGORIES.map((c) => ({ value: c.slug, label: c.name }))}
          value={search.kategorie}
          onChange={(v) => set({ kategorie: v, unterthema: undefined })}
        />
        <FilterRow
          label="Beruf"
          options={BERUF_CATEGORIES.map((c) => ({ value: c.slug, label: c.name }))}
          value={search.kategorie}
          onChange={(v) => set({ kategorie: v, unterthema: undefined })}
        />
        {activeCategory && (
          <FilterRow
            label={`Unterthema · ${activeCategory.name}`}
            options={activeCategory.children.map((c) => ({ value: c.slug, label: c.name }))}
            value={search.unterthema}
            onChange={(v) => set({ unterthema: v })}
          />
        )}
        <FilterRow
          label="Niveau"
          options={LEVELS.map((l) => ({ value: l, label: l }))}
          value={search.level}
          onChange={(v) => set({ level: v })}
        />
        <FilterRow
          label="Region"
          options={REGIONS.map((r) => ({ value: r.slug, label: `${r.flag} ${r.label}` }))}
          value={search.region}
          onChange={(v) => set({ region: v })}
        />
        <FilterRow
          label="Zugang"
          options={[
            { value: "gratis", label: "Kostenlos (bis 1:30 Min.)" },
            { value: "premium", label: "Premium" },
          ]}
          value={search.zugang}
          onChange={(v) => set({ zugang: v })}
        />
      </div>

      {search.level && LEVEL_INFO[search.level as Level] && (
        <p className="mt-6 rounded-2xl border border-border bg-surface p-4 text-sm text-muted-foreground">
          <span className="font-medium text-foreground">
            {LEVEL_INFO[search.level as Level].label}:
          </span>{" "}
          {LEVEL_INFO[search.level as Level].description}
        </p>
      )}

      {isLoading ? (
        <p className="mt-10 text-muted-foreground">Lektionen werden geladen …</p>
      ) : lessons.length === 0 ? (
        <div className="mt-10 rounded-2xl border border-dashed border-border p-10 text-center">
          <p className="text-muted-foreground">Keine Lektionen für diese Auswahl.</p>
          <Button
            variant="outline"
            className="mt-4"
            onClick={() => void navigate({ search: {}, replace: true })}
          >
            Filter zurücksetzen
          </Button>
        </div>
      ) : (
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {lessons.map((l) => (
            <LessonCard key={l.id} lesson={l} />
          ))}
        </div>
      )}
    </div>
  );
}

function FilterRow({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: { value: string; label: string }[];
  value?: string | undefined;
  onChange: (v: string | undefined) => void | Promise<void>;
}) {
  return (
    <div>
      <div className="mb-2 text-xs uppercase tracking-widest text-muted-foreground">{label}</div>
      <div className="flex flex-wrap gap-2">
        {options.map((o) => {
          const active = value === o.value;
          return (
            <button
              key={o.value}
              onClick={() => onChange(active ? undefined : o.value)}
              className={
                active
                  ? "rounded-full bg-foreground px-3 py-1.5 text-sm text-background"
                  : "rounded-full border border-border px-3 py-1.5 text-sm hover:bg-muted"
              }
            >
              {o.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
