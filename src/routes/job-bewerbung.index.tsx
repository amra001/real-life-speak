import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { ArrowRight, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { InquiryForm } from "@/components/site/InquiryForm";
import { formatPrice, productsQuery } from "@/lib/data";
import { SERVICE_PAGES } from "@/lib/services";
import bewerbungImg from "@/assets/lesson-bewerbung.jpg";

export const Route = createFileRoute("/job-bewerbung/")({
  head: () => ({
    meta: [
      { title: "Job & Bewerbung – Bewerbungsservice und Job-Deutsch" },
      {
        name: "description",
        content:
          "Bewerbungsschreiben, Lebenslauf, Unterlagen-Check, Vorbereitung auf Bewerbungsgespräche und Job-Deutsch – persönlich und professionell.",
      },
      { property: "og:title", content: "Job & Bewerbung – RealLife German" },
      {
        property: "og:description",
        content:
          "Professionelle Unterstützung bei Bewerbung, Lebenslauf und Vorstellungsgespräch – plus Deutschtraining für den Job.",
      },
    ],
  }),
  component: JobPage,
});

function JobPage() {
  const { data: products } = useQuery(productsQuery());

  return (
    <div>
      <section className="border-b border-border bg-surface">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 md:grid-cols-2 md:py-20">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-xs uppercase tracking-widest text-muted-foreground">
              <FileText className="h-3.5 w-3.5" /> Job &amp; Bewerbung
            </div>
            <h1 className="mt-5 font-serif text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
              Bewerben auf Deutsch – mit Unterlagen, die überzeugen.
            </h1>
            <p className="mt-4 text-base text-muted-foreground md:text-lg">
              Lernvideos für Job-Deutsch und persönliche Unterstützung bei Lebenslauf,
              Bewerbungsschreiben und Vorstellungsgespräch.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <a href="#anfrage">Bewerbung anfragen</a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/lektionen" search={{ kategorie: "bewerbung" }}>
                  Lektionen ansehen
                </Link>
              </Button>
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl border border-border shadow-lg">
            <img
              src={bewerbungImg}
              alt="Bewerbungsgespräch in einem deutschen Büro"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="font-serif text-2xl font-semibold md:text-3xl">Themen &amp; Unterstützung</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICE_PAGES.map((s) => (
            <Link
              key={s.slug}
              to="/job-bewerbung/$slug"
              params={{ slug: s.slug }}
              className="rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-0.5 hover:shadow-lg"
            >
              <h3 className="font-serif text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.intro}</p>
              <span className="mt-4 inline-flex items-center text-sm font-medium">
                Mehr erfahren <ArrowRight className="ml-1 h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="font-serif text-2xl font-semibold md:text-3xl">Leistungen &amp; Preise</h2>
          <p className="mt-2 text-muted-foreground">
            Feste Pakete, klare Preise – Anfrage senden und wir klären die Details persönlich.
          </p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {(products ?? []).map((p) => (
              <div
                key={p.id}
                className="flex flex-col rounded-2xl border border-border bg-card p-5"
              >
                <h3 className="font-serif text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{p.description}</p>
                <div className="mt-4 font-serif text-2xl font-semibold">
                  {p.price_cents > 0 ? formatPrice(p.price_cents, p.currency) : "auf Anfrage"}
                </div>
                <Button asChild className="mt-4">
                  <a href="#anfrage">{p.cta_label}</a>
                </Button>
              </div>
            ))}
            {!products?.length && (
              <p className="text-muted-foreground">Leistungen werden geladen …</p>
            )}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-14">
        <InquiryForm kind="bewerbung" title="Anfrage für Bewerbungsservice" />
      </section>
    </div>
  );
}
