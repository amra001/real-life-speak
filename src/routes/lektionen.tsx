import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { LessonCard } from "@/components/site/LessonCard";
import { lessonsQuery } from "@/lib/data";
import { CATEGORIES, LEVELS, REGIONS } from "@/lib/taxonomy";

type Search = { kategorie?: string; level?: string; region?: string; q?: string };

export const Route = createFileRoute("/lektionen")({
  validateSearch: (search: Record<string, unknown>): Search => ({
    kategorie: typeof search.kategorie === "string" ? search.kategorie : undefined,
    level: typeof search.level === "string" ? search.level : undefined,
    region: typeof search.region === "string" ? search.region : undefined,
    q: typeof search.q === "string" ? search.q : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Lektionen-Bibliothek – RealLife German" },
      {
        name: "description",
        content:
          "Alle Video-Lektionen nach Thema, Niveau und Region filtern: Alltag, Gesundheit, Wohnen, Verkehr, Schule und Beruf.",
      },
      { property: "og:title", content: "Lektionen-Bibliothek – RealLife German" },
      {
        name: "og:description",
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

  const set = (patch: Search) =>
    navigate({ search: (prev) => ({ ...prev, ...patch }), replace: true });

  const lessons = (data ?? []).filter((l) => {
    if (search.kategorie && l.category_slug !== search.kategorie) return false;
    if (search.level && l.level !== search.level) return false;
    if (search.region && l.region !== search.region) return false;
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
          label="Thema"
          options={CATEGORIES.map((c) => ({ value: c.slug, label: c.name }))}
          value={search.kategorie}
          onChange={(v) => set({ kategorie: v })}
        />
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
      </div>

      {isLoading ? (
        <p className="mt-10 text-muted-foreground">Lektionen werden geladen …</p>
      ) : lessons.length === 0 ? (
        <div className="mt-10 rounded-2xl border border-dashed border-border p-10 text-center">
          <p className="text-muted-foreground">Keine Lektionen für diese Auswahl.</p>
          <Button
            variant="outline"
            className="mt-4"
            onClick={() => navigate({ search: {}, replace: true })}
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
  value?: string;
  onChange: (v: string | undefined) => void;
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
