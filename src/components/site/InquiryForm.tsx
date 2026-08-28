import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { LEVELS } from "@/lib/taxonomy";

export const LESSON_TYPES = [
  "Deutsch für den Alltag",
  "Prüfungsvorbereitung (A1–B2)",
  "Deutsch für Kinder",
  "Deutsch für Jugendliche",
  "Business-Deutsch",
  "Deutsch für den Beruf",
  "Bewerbungsvorbereitung",
  "Bewerbungsgespräch",
  "Kommunikation mit Arbeitgebern",
  "Texte schreiben & korrigieren",
] as const;

export function InquiryForm({
  kind = "privatunterricht",
  productSlug,
  title = "Anfrage senden",
  compact = false,
}: {
  kind?: string;
  productSlug?: string;
  title?: string;
  compact?: boolean;
}) {
  const { user } = useAuth();
  const [sending, setSending] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: user?.email ?? "",
    phone: "",
    current_level: "",
    goal: "",
    lesson_type: "",
    message: "",
  });

  const set = (k: keyof typeof form, v: string) => setForm((f) => ({ ...f, [k]: v }));

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim()) {
      toast.error("Bitte Name und E-Mail ausfüllen.");
      return;
    }
    setSending(true);
    const { error } = await supabase.from("inquiries").insert({
      user_id: user?.id ?? null,
      kind,
      product_slug: productSlug ?? null,
      name: form.name.trim(),
      email: form.email.trim(),
      phone: form.phone.trim() || null,
      current_level: form.current_level || null,
      goal: form.goal.trim() || null,
      lesson_type: form.lesson_type || null,
      message: form.message.trim(),
    });
    setSending(false);
    if (error) {
      toast.error("Anfrage konnte nicht gesendet werden.");
      return;
    }
    toast.success("Danke! Deine Anfrage ist angekommen – ich melde mich per E-Mail.");
    setForm({
      name: "",
      email: user?.email ?? "",
      phone: "",
      current_level: "",
      goal: "",
      lesson_type: "",
      message: "",
    });
  }

  return (
    <form
      onSubmit={submit}
      className="rounded-3xl border border-border bg-card p-6 md:p-8"
      id="anfrage"
    >
      <h2 className="font-serif text-2xl font-semibold">{title}</h2>
      <p className="mt-1 text-sm text-muted-foreground">
        Unverbindlich und kostenlos – ich antworte persönlich.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <Field label="Name">
          <Input value={form.name} onChange={(e) => set("name", e.target.value)} required />
        </Field>
        <Field label="E-Mail">
          <Input
            type="email"
            value={form.email}
            onChange={(e) => set("email", e.target.value)}
            required
          />
        </Field>
        <Field label="Telefonnummer (optional)">
          <Input value={form.phone} onChange={(e) => set("phone", e.target.value)} />
        </Field>

        {!compact && (
          <>
            <Field label="Aktuelles Sprachniveau">
              <Select
                value={form.current_level}
                onValueChange={(v) => set("current_level", v)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Bitte wählen" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="unbekannt">Weiß ich nicht</SelectItem>
                  {LEVELS.map((l) => (
                    <SelectItem key={l} value={l}>
                      {l}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </Field>
            <Field label="Gewünschter Unterricht">
              <Select value={form.lesson_type} onValueChange={(v) => set("lesson_type", v)}>
                <SelectTrigger>
                  <SelectValue placeholder="Bitte wählen" />
                </SelectTrigger>
                <SelectContent>
                  {LESSON_TYPES.map((t) => (
                    <SelectItem key={t} value={t}>
                      {t}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </Field>
            <Field label="Dein Ziel">
              <Input
                placeholder="z. B. B1-Prüfung, Job im Pflegebereich"
                value={form.goal}
                onChange={(e) => set("goal", e.target.value)}
              />
            </Field>
          </>
        )}
      </div>

      <div className="mt-4">
        <Field label="Nachricht">
          <Textarea
            rows={4}
            value={form.message}
            onChange={(e) => set("message", e.target.value)}
            placeholder="Erzähl kurz, was du brauchst."
          />
        </Field>
      </div>

      <Button type="submit" size="lg" className="mt-6 w-full sm:w-auto" disabled={sending}>
        {sending ? "Wird gesendet …" : "Kostenlos unverbindlich anfragen"}
      </Button>
    </form>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="space-y-2">
      <Label className="text-sm">{label}</Label>
      {children}
    </div>
  );
}
