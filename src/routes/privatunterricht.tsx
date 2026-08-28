import { createFileRoute } from "@tanstack/react-router";
import { Check, GraduationCap, Heart, Languages, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { InquiryForm, LESSON_TYPES } from "@/components/site/InquiryForm";
import portrait from "@/assets/lesson-bewerbung.jpg";

export const Route = createFileRoute("/privatunterricht")({
  head: () => ({
    meta: [
      { title: "Privatunterricht Deutsch – persönlich und individuell" },
      {
        name: "description",
        content:
          "Deutsch-Privatunterricht mit 5 Jahren Erfahrung an einer privaten Sprachschule: Alltag, Prüfungen A1–B2, Kinder, Business-Deutsch und Bewerbungsvorbereitung.",
      },
      { property: "og:title", content: "Privatunterricht – RealLife German" },
      {
        property: "og:description",
        content:
          "Deutsch lernen, passend zu deinem Leben – individueller Unterricht für Alltag, Prüfung, Beruf und Bewerbung.",
      },
    ],
  }),
  component: PrivatunterrichtPage,
});

const REASONS = [
  "5 Jahre Unterrichtserfahrung an einer privaten Sprachschule",
  "Unterricht mit Erwachsenen und Kindern",
  "Erfahrung mit Lernenden aus vielen Ländern",
  "Fokus auf praktische Sprache statt trockener Theorie",
  "Alltag, Beruf, Prüfung und Bewerbung aus einer Hand",
  "Individuelle Unterstützung im eigenen Tempo",
  "Verständliche Erklärungen, auch bei schwierigen Themen",
];

function PrivatunterrichtPage() {
  return (
    <div>
      <section className="border-b border-border bg-surface">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 md:grid-cols-2 md:py-20">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-xs uppercase tracking-widest text-muted-foreground">
              <Heart className="h-3.5 w-3.5" /> Persönlicher Unterricht
            </div>
            <h1 className="mt-5 font-serif text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
              Deutsch lernen, passend zu deinem Leben.
            </h1>
            <p className="mt-4 text-base text-muted-foreground md:text-lg">
              Ich habe fünf Jahre an einer privaten Sprachschule Deutsch unterrichtet und Menschen aus
              vielen verschiedenen Ländern begleitet – Erwachsene ebenso wie Kinder. Der Unterricht
              wird individuell an dein Ziel angepasst.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <a href="#anfrage">Privatunterricht anfragen</a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="#anfrage">Kostenlos unverbindlich anfragen</a>
              </Button>
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl border border-border shadow-lg">
            <img
              src={portrait}
              alt="Persönlicher Deutschunterricht in einem Beratungsgespräch"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="font-serif text-2xl font-semibold md:text-3xl">Mögliche Bereiche</h2>
        <p className="mt-2 text-muted-foreground">
          Wir starten dort, wo du gerade stehst – und arbeiten auf dein konkretes Ziel hin.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {LESSON_TYPES.map((t) => (
            <div
              key={t}
              className="flex items-start gap-3 rounded-2xl border border-border bg-card p-5"
            >
              <Languages className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
              <span className="text-sm font-medium">{t}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-2">
          <div>
            <h2 className="font-serif text-2xl font-semibold md:text-3xl">Warum mit mir lernen?</h2>
            <ul className="mt-6 space-y-3">
              {REASONS.map((r) => (
                <li key={r} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <span className="text-sm text-muted-foreground">{r}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <Stat icon={GraduationCap} value="5 Jahre" label="Unterricht an einer Sprachschule" />
            <Stat icon={Users} value="Erwachsene & Kinder" label="Alle Altersgruppen" />
            <Stat icon={Languages} value="A1 – B2" label="Prüfungsvorbereitung" />
            <Stat icon={Heart} value="Persönlich" label="Kein anonymer Kurs" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-14">
        <InquiryForm kind="privatunterricht" title="Privatunterricht anfragen" />
      </section>
    </div>
  );
}

function Stat({
  icon: Icon,
  value,
  label,
}: {
  icon: typeof Users;
  value: string;
  label: string;
}) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5">
      <Icon className="h-5 w-5 text-accent" />
      <div className="mt-3 font-serif text-lg font-semibold">{value}</div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </div>
  );
}
