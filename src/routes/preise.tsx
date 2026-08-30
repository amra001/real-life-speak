import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Check, Loader2, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export const Route = createFileRoute("/preise")({
  head: () => ({
    meta: [
      { title: "Preise – RealLife German" },
      {
        name: "description",
        content:
          "Kostenlos starten oder mit Premium die komplette A1–B1-Lernbibliothek mit Situationen, Wortschatz, Dialogen, Grammatik, Übungen und Abschlusstests freischalten.",
      },
      { property: "og:title", content: "Preise – RealLife German" },
      {
        property: "og:description",
        content: "Gratis-Zugang und Premium-Abo für praxisnahes Deutsch aus Alltag und Beruf.",
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
      "Ausgewählte kostenlose Lektionen",
      "Praxisnahe Situationen aus dem echten Alltag",
      "Wortschatz, Dialoge und erste Übungen",
      "A1, A2 und B1 kennenlernen",
    ],
    cta: "Kostenlos starten",
    highlight: false,
  },
  {
    name: "Premium",
    price: "9,90 €",
    period: "pro Monat",
    features: [
      "Komplette Lernbibliothek A1–B1",
      "Alltag, Gesundheit, Wohnen, Verkehr, Familie und Beruf",
      "15 konkrete Situationen pro Lernmodul",
      "9 Lernbereiche in jeder Lektion",
      "Mindestens 20 thematische Wörter",
      "2 komplette Dialoge pro Lektion",
      "Sprache & Grammatik passend zum Niveau",
      "Interaktive Übungen und Dialogtraining",
      "Abschlusstest mit 50 Fragen",
      "Persönlicher Lernfortschritt",
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
  const { user } = useAuth();
  const navigate = useNavigate();
  const [checkoutBusy, setCheckoutBusy] = useState(false);

  async function startPremiumCheckout() {
    if (!user) {
      await navigate({ to: "/auth", search: { next: "/preise" } });
      return;
    }

    setCheckoutBusy(true);
    const { data, error } = await supabase.functions.invoke("create-checkout", { body: {} });
    setCheckoutBusy(false);

    if (error || !data?.url) {
      toast.error("Premium-Checkout ist noch nicht verfügbar. Bitte versuche es später erneut.");
      return;
    }

    window.location.assign(String(data.url));
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <div className="max-w-2xl">
        <h1 className="font-serif text-3xl font-semibold md:text-4xl">Einfache Preise</h1>
        <p className="mt-3 text-muted-foreground">
          Starte kostenlos. Wenn du weiterlernen willst, schaltest du mit Premium die komplette
          A1–B1-Bibliothek frei – monatlich kündbar.
        </p>
        <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm text-muted-foreground">
          <ShieldCheck className="h-4 w-4 text-accent" />
          Sichere Zahlung über Stripe · monatlich kündbar
        </div>
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

            {p.name === "Premium" ? (
              <Button className="mt-8 w-full" onClick={startPremiumCheckout} disabled={checkoutBusy}>
                {checkoutBusy && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {checkoutBusy ? "Checkout wird geöffnet …" : p.cta}
              </Button>
            ) : p.name === "Institution" ? (
              <Button asChild className="mt-8 w-full" variant="outline">
                <Link to="/privatunterricht">{p.cta}</Link>
              </Button>
            ) : (
              <Button asChild className="mt-8 w-full" variant="outline">
                <Link to="/auth" search={{ next: "/dashboard" }}>{p.cta}</Link>
              </Button>
            )}
          </div>
        ))}
      </div>

      <p className="mx-auto mt-8 max-w-2xl text-center text-xs leading-relaxed text-muted-foreground">
        Premium wird deinem RealLife-German-Konto zugeordnet. Nach erfolgreicher Zahlung wird der Zugang automatisch freigeschaltet.
      </p>
    </div>
  );
}
