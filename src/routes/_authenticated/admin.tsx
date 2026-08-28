import { createFileRoute, Link } from "@tanstack/react-router";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { Eye, EyeOff, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { supabase } from "@/integrations/supabase/client";
import {
  adminInquiriesQuery,
  adminLessonsQuery,
  adminProductsQuery,
  formatPrice,
} from "@/lib/data";
import { CATEGORIES, DURATIONS, LEVELS, REGIONS } from "@/lib/taxonomy";
import { THUMBNAIL_KEYS } from "@/lib/lesson-images";
import { useAuth, useIsAdmin } from "@/hooks/useAuth";
import { toast } from "sonner";


export const Route = createFileRoute("/_authenticated/admin")({
  head: () => ({
    meta: [
      { title: "Adminbereich – RealLife German" },
      { name: "description", content: "Lektionen anlegen, veröffentlichen und verwalten." },
      { property: "og:title", content: "Adminbereich – RealLife German" },
      { property: "og:description", content: "Interne Lektionsverwaltung." },
    ],
  }),
  component: Admin,
});

const EMPTY = {
  slug: "",
  title: "",
  description: "",
  level: "A1",
  region: "de",
  category_slug: "alltag",
  subcategory_slug: "supermarkt",
  duration_seconds: 60,
  thumbnail_key: "supermarkt",
  video_url: "",
  is_premium: false,
};

function Admin() {
  const { user } = useAuth();
  const isAdmin = useIsAdmin(user?.id);
  const queryClient = useQueryClient();
  const { data: lessons } = useQuery({ ...adminLessonsQuery(), enabled: isAdmin === true });
  const [form, setForm] = useState({ ...EMPTY });

  const invalidate = () => {
    void queryClient.invalidateQueries({ queryKey: ["admin", "lessons"] });
    void queryClient.invalidateQueries({ queryKey: ["lessons"] });
  };

  const create = useMutation({
    mutationFn: async () => {
      const { error } = await supabase.from("lessons").insert({
        ...form,
        video_url: form.video_url || null,
        status: "draft",
      });
      if (error) throw error;
    },
    onSuccess: () => {
      toast.success("Lektion als Entwurf angelegt.");
      setForm({ ...EMPTY });
      invalidate();
    },
    onError: (e: Error) => toast.error(e.message),
  });

  const toggle = useMutation({
    mutationFn: async ({ id, status }: { id: string; status: string }) => {
      const { error } = await supabase
        .from("lessons")
        .update({ status: status === "published" ? "draft" : "published" })
        .eq("id", id);
      if (error) throw error;
    },
    onSuccess: invalidate,
    onError: (e: Error) => toast.error(e.message),
  });

  const remove = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from("lessons").delete().eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => {
      toast.success("Lektion gelöscht.");
      invalidate();
    },
    onError: (e: Error) => toast.error(e.message),
  });

  if (isAdmin === null) return <div className="mx-auto max-w-4xl px-4 py-20">Prüfe Rechte …</div>;
  if (!isAdmin)
    return (
      <div className="mx-auto max-w-md px-4 py-24 text-center">
        <h1 className="font-serif text-2xl font-semibold">Kein Zugriff</h1>
        <p className="mt-2 text-muted-foreground">
          Dieser Bereich ist Administratoren vorbehalten.
        </p>
        <Button asChild className="mt-6">
          <Link to="/dashboard">Zum Dashboard</Link>
        </Button>
      </div>
    );

  const subcats = CATEGORIES.find((c) => c.slug === form.category_slug)?.children ?? [];

  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="font-serif text-3xl font-semibold md:text-4xl">Adminbereich</h1>
      <p className="mt-2 text-muted-foreground">
        Lektionen, Produkte und Anfragen verwalten.
      </p>

      <Tabs defaultValue="lektionen" className="mt-8">
        <TabsList>
          <TabsTrigger value="lektionen">Lektionen</TabsTrigger>
          <TabsTrigger value="produkte">Produkte &amp; Preise</TabsTrigger>
          <TabsTrigger value="anfragen">Anfragen</TabsTrigger>
        </TabsList>

        <TabsContent value="lektionen" className="mt-6">
      <div className="mt-8 rounded-2xl border border-border bg-card p-6">

        <h2 className="font-serif text-xl font-semibold">Neue Lektion</h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          <Field label="Titel">
            <Input
              value={form.title}
              onChange={(e) =>
                setForm((f) => ({
                  ...f,
                  title: e.target.value,
                  slug:
                    f.slug ||
                    e.target.value
                      .toLowerCase()
                      .replace(/[äöüß]/g, (m) => ({ ä: "ae", ö: "oe", ü: "ue", ß: "ss" })[m]!)
                      .replace(/[^a-z0-9]+/g, "-")
                      .replace(/^-|-$/g, ""),
                }))
              }
            />
          </Field>
          <Field label="Slug">
            <Input
              value={form.slug}
              onChange={(e) => setForm((f) => ({ ...f, slug: e.target.value }))}
            />
          </Field>
          <div className="sm:col-span-2">
            <Field label="Beschreibung">
              <Textarea
                value={form.description}
                onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))}
              />
            </Field>
          </div>
          <Field label="Niveau">
            <Picker
              value={form.level}
              onChange={(v) => setForm((f) => ({ ...f, level: v }))}
              options={LEVELS.map((l) => ({ value: l, label: l }))}
            />
          </Field>
          <Field label="Region">
            <Picker
              value={form.region}
              onChange={(v) => setForm((f) => ({ ...f, region: v }))}
              options={REGIONS.map((r) => ({ value: r.slug, label: r.label }))}
            />
          </Field>
          <Field label="Kategorie">
            <Picker
              value={form.category_slug}
              onChange={(v) =>
                setForm((f) => ({
                  ...f,
                  category_slug: v,
                  subcategory_slug: CATEGORIES.find((c) => c.slug === v)?.children[0]?.slug ?? "",
                }))
              }
              options={CATEGORIES.map((c) => ({ value: c.slug, label: c.name }))}
            />
          </Field>
          <Field label="Unterkategorie">
            <Picker
              value={form.subcategory_slug}
              onChange={(v) => setForm((f) => ({ ...f, subcategory_slug: v }))}
              options={subcats.map((c) => ({ value: c.slug, label: c.name }))}
            />
          </Field>
          <Field label="Länge">
            <Picker
              value={String(form.duration_seconds)}
              onChange={(v) => setForm((f) => ({ ...f, duration_seconds: Number(v) }))}
              options={DURATIONS.map((d) => ({ value: String(d.seconds), label: d.label }))}
            />
          </Field>
          <Field label="Titelbild">
            <Picker
              value={form.thumbnail_key}
              onChange={(v) => setForm((f) => ({ ...f, thumbnail_key: v }))}
              options={THUMBNAIL_KEYS.map((k) => ({ value: k, label: k }))}
            />
          </Field>
          <Field label="Video-URL (optional)">
            <Input
              value={form.video_url}
              onChange={(e) => setForm((f) => ({ ...f, video_url: e.target.value }))}
            />
          </Field>
          <Field label="Zugang">
            <Picker
              value={form.is_premium ? "premium" : "free"}
              onChange={(v) => setForm((f) => ({ ...f, is_premium: v === "premium" }))}
              options={[
                { value: "free", label: "Gratis" },
                { value: "premium", label: "Premium" },
              ]}
            />
          </Field>
        </div>
        <Button
          className="mt-6"
          disabled={!form.title || !form.slug || create.isPending}
          onClick={() => create.mutate()}
        >
          Lektion anlegen
        </Button>
      </div>

      <h2 className="mt-12 font-serif text-xl font-semibold">Alle Lektionen</h2>
      <div className="mt-4 space-y-3">
        {(lessons ?? []).map((l) => (
          <div
            key={l.id}
            className="flex flex-wrap items-center gap-3 rounded-xl border border-border bg-card p-4"
          >
            <div className="min-w-0 flex-1">
              <div className="truncate font-medium">{l.title}</div>
              <div className="truncate text-xs text-muted-foreground">/{l.slug}</div>
            </div>
            <Badge variant="secondary">{l.level}</Badge>
            <Badge variant={l.status === "published" ? "default" : "outline"}>
              {l.status === "published" ? "Veröffentlicht" : "Entwurf"}
            </Badge>
            <Button
              size="sm"
              variant="outline"
              onClick={() => toggle.mutate({ id: l.id, status: l.status })}
            >
              {l.status === "published" ? (
                <>
                  <EyeOff className="mr-2 h-4 w-4" /> Deaktivieren
                </>
              ) : (
                <>
                  <Eye className="mr-2 h-4 w-4" /> Veröffentlichen
                </>
              )}
            </Button>
            <Button
              size="sm"
              variant="ghost"
              onClick={() => {
                if (confirm(`„${l.title}“ wirklich löschen?`)) remove.mutate(l.id);
              }}
              aria-label="Löschen"
            >
              <Trash2 className="h-4 w-4 text-destructive" />
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <Label className="mb-2 block">{label}</Label>
      {children}
    </div>
  );
}

function Picker({
  value,
  onChange,
  options,
}: {
  value: string;
  onChange: (v: string) => void;
  options: { value: string; label: string }[];
}) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger>
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {options.map((o) => (
          <SelectItem key={o.value} value={o.value}>
            {o.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
