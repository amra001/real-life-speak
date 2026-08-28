import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/preise")({
  head: () => ({
    meta: [
      { title: "Preise – RealLife German" },
      {
        name: "description",
        content:
          "Kostenlos starten oder mit Premium alle Video-Lektionen, Quiz, Arbeitsblätter und Fortschritts-Tracking freischalten.",
      },
      { property: "og:title", content: "Preise – RealLife German" },
      {
        property: "og:description",
        content: "Gratis-Zugang und Premium-Abo für alle Lektionen aus Alltag und Beruf.",
      },
    ],
  }),
  component: Pricing,
});

const PLANS = [
  {
    name: "Gratis",
    price: "0 €",
    period: "für immer",
    features: [
      "Videos bis 1 Minute 30 Sekunden",
      "Ausgewählte Demo-Lektionen",
      "Einfache Quizfragen",
      "Untertitel & Übersetzung (Vorschau)",
    ],
    cta: "Kostenlos starten",
    highlight: false,
  },
  {
    name: "Premium",
    price: "9,90 €",
    period: "pro Monat",
    features: [
      "Videos mit 3, 5, 10 und 15 Minuten",
      "Komplette Lernbibliothek A1–B2",
      "Alle Kategorien und Berufsmodule",
      "Alle Übersetzungssprachen (TR, AR, UK, BKS, RO)",
      "Vollständige Quiz & Vokabellisten",
      "Lernfortschritt und zusätzliche Übungen",
      "Später: Arbeitsblätter als PDF",
    ],
    cta: "Premium freischalten",
    highlight: true,
  },
  {
    name: "Institution",
    price: "auf Anfrage",
    period: "Kurse & Betriebe",
    features: [
      "Zugänge für Gruppen",
      "Integrationskurse & Betriebe",
      "Eigene Branchen-Lektionen",
      "Persönlicher Ansprechpartner",
    ],
    cta: "Kontakt aufnehmen",
    highlight: false,
  },
];


function Pricing() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <div className="max-w-2xl">
        <h1 className="font-serif text-3xl font-semibold md:text-4xl">Einfache Preise</h1>
        <p className="mt-3 text-muted-foreground">
          Starte kostenlos. Wenn du weiterlernen willst, schaltest du mit Premium die komplette
          Bibliothek frei – monatlich kündbar.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {PLANS.map((p) => (
          <div
            key={p.name}
            className={
              p.highlight
                ? "relative rounded-3xl border-2 border-accent bg-card p-7 shadow-lg"
                : "rounded-3xl border border-border bg-card p-7"
            }
          >
            {p.highlight && (
              <div className="absolute -top-3 left-7 rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
                Beliebt
              </div>
            )}
            <div className="font-serif text-xl font-semibold">{p.name}</div>
            <div className="mt-4 text-3xl font-semibold">{p.price}</div>
            <div className="text-sm text-muted-foreground">{p.period}</div>
            <ul className="mt-6 space-y-3 text-sm">
              {p.features.map((f) => (
                <li key={f} className="flex gap-2">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <Button asChild className="mt-8 w-full" variant={p.highlight ? "default" : "outline"}>
              <Link to="/auth">{p.cta}</Link>
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
