import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import {
  ArrowRight,
  Briefcase,
  Check,
  FileText,
  GraduationCap,
  Heart,
  ShoppingBasket,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { LessonCard } from "@/components/site/LessonCard";
import { formatPrice, lessonsQuery, productsQuery, type Lesson } from "@/lib/data";
import { ALLTAG_CATEGORIES, BERUF_CATEGORIES, LEVELS, LEVEL_INFO } from "@/lib/taxonomy";
import heroImage from "@/assets/lesson-supermarkt.jpg";
import berufImage from "@/assets/lesson-baustelle.jpg";
import bewerbungImage from "@/assets/lesson-bewerbung.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "RealLife German – Deutsch lernen für Alltag, Beruf und Bewerbung" },
      {
        name: "description",
        content:
          "Deutsch lernen mit Video-Lektionen aus Alltag und Beruf, Übersetzungen in 5 Sprachen, Quiz, Bewerbungsservice und persönlichem Privatunterricht. A1 bis B2.",
      },
      { property: "og:title", content: "RealLife German – Deutsch für echte Situationen" },
      {
        property: "og:description",
        content:
          "Alltag. Beruf. Bewerbung. Prüfung. Persönliche Unterstützung – Video-Lektionen mit Vokabeln, Dialogen und Quiz.",
      },
    ],
  }),
  component: Home,
});

const AREAS = [
  {
    icon: ShoppingBasket,
    title: "Deutsch im Alltag",
    text: "Supermarkt, Arzt, Wohnung, Behörden, Schule – die Situationen, die jede Woche vorkommen.",
    to: "/lektionen" as const,
    search: { kategorie: "alltag" },
  },
  {
    icon: Briefcase,
    title: "Deutsch im Beruf",
    text: "Pflege, Küche, Baustelle, Handel, Logistik, Büro und Reinigung – Branche für Branche.",
    to: "/beruf" as const,
  },
  {
    icon: FileText,
    title: "Job & Bewerbung",
    text: "Lebenslauf, Bewerbungsschreiben, Unterlagen-Check und Vorbereitung aufs Gespräch.",
    to: "/job-bewerbung" as const,
  },
  {
    icon: Heart,
    title: "Privatunterricht",
    text: "Persönlicher Unterricht mit 5 Jahren Erfahrung – Alltag, Prüfung, Kinder, Business.",
    to: "/privatunterricht" as const,
  },
];

const WHY = [
  "Echte Situationen statt trockener Grammatik",
  "Deutsch groß, Übersetzung klein darunter – in 5 Sprachen",
  "Deutschland und Österreich mit regionalen Varianten",
  "Klare Trennung A1, A2, B1, B2",
  "Vokabeln, Dialoge und Quiz zu jeder Lektion",
  "Persönliche Unterstützung bei Sprache, Job und Bewerbung",
];

function Home() {
  const { data: lessons } = useQuery(lessonsQuery());
  const { data: products } = useQuery(productsQuery());
  const popular = (lessons ?? []).slice(0, 6);

  return (
    <div>
      <section className="border-b border-border bg-surface">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-xs uppercase tracking-widest text-muted-foreground">
              A1 – B2 · Deutschland &amp; Österreich
            </div>
            <h1 className="mt-5 font-serif text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
              Deutsch lernen, wie es im echten Leben gesprochen wird.
            </h1>
            <p className="mt-4 max-w-lg text-base text-muted-foreground md:text-lg">
              Alltag. Beruf. Bewerbung. Prüfung. Persönliche Unterstützung.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link to="/lektionen">
                  Kostenlos lernen <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/privatunterricht">Privatunterricht anfragen</Link>
              </Button>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-3xl border border-border shadow-lg">
            <img
              src={heroImage}
              alt="Alltagsszene im deutschen Supermarkt"
              className="aspect-[4/3] w-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-foreground/80 p-4 text-background">
              <div className="font-serif text-lg">„Ich nehme einen Einkaufswagen.“</div>
              <div className="text-sm opacity-80">Uzimam kolica za kupovinu. · أخذ عربة تسوق</div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="font-serif text-2xl font-semibold md:text-3xl">Vier Bereiche, ein Ziel</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {AREAS.map((a) => (
            <Link
              key={a.title}
              to={a.to}
              {...(a.search ? { search: a.search } : {})}
              className="rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-0.5 hover:shadow-lg"
            >
              <a.icon className="h-6 w-6 text-accent" />
              <div className="mt-4 font-serif text-lg font-semibold">{a.title}</div>
              <p className="mt-1 text-sm text-muted-foreground">{a.text}</p>
            </Link>
          ))}
        </div>
      </section>

      {popular.length > 0 && (
        <section className="mx-auto max-w-6xl px-4 pb-6">
          <div className="flex items-end justify-between">
            <h2 className="font-serif text-2xl font-semibold md:text-3xl">Beliebte Lektionen</h2>
            <Link to="/lektionen" className="text-sm text-muted-foreground hover:text-foreground">
              Alle ansehen
            </Link>
          </div>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {popular.map((l: Lesson) => (
              <LessonCard key={l.id} lesson={l} />
            ))}
          </div>
        </section>
      )}

      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="font-serif text-2xl font-semibold md:text-3xl">Themenbereiche</h2>
        <div className="mt-6 flex flex-wrap gap-2">
          {[...ALLTAG_CATEGORIES, ...BERUF_CATEGORIES].map((c) => (
            <Link
              key={c.slug}
              to="/lektionen"
              search={{ kategorie: c.slug }}
              className="rounded-full border border-border bg-card px-4 py-2 text-sm transition-colors hover:bg-muted"
            >
              {c.name}
            </Link>
          ))}
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {LEVELS.map((l) => (
            <Link
              key={l}
              to="/lektionen"
              search={{ level: l }}
              className="rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-0.5 hover:shadow-lg"
            >
              <div className="font-serif text-lg font-semibold">{LEVEL_INFO[l].label}</div>
              <p className="mt-1 text-sm text-muted-foreground">{LEVEL_INFO[l].short}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="font-serif text-2xl font-semibold md:text-3xl">Warum RealLife German?</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {WHY.map((w) => (
              <div key={w} className="flex items-start gap-3 rounded-2xl border border-border bg-card p-5">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <span className="text-sm">{w}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2">
        <div className="overflow-hidden rounded-3xl border border-border shadow-lg">
          <img
            src={berufImage}
            alt="Deutschunterricht für den Beruf"
            className="aspect-[4/3] w-full object-cover"
          />
        </div>
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-xs uppercase tracking-widest text-muted-foreground">
            <GraduationCap className="h-3.5 w-3.5" /> Privatunterricht
          </div>
          <h2 className="mt-4 font-serif text-2xl font-semibold md:text-3xl">
            Deutsch lernen, passend zu deinem Leben.
          </h2>
          <p className="mt-3 text-muted-foreground">
            Fünf Jahre Unterricht an einer privaten Sprachschule, mit Erwachsenen und Kindern aus
            vielen Ländern. Individuell für Alltag, Prüfung A1–B2, Beruf und Bewerbung.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild>
              <Link to="/privatunterricht">Privatunterricht anfragen</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/ueber-uns">Über mich</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-xs uppercase tracking-widest text-muted-foreground">
              <FileText className="h-3.5 w-3.5" /> Job &amp; Bewerbung
            </div>
            <h2 className="mt-4 font-serif text-2xl font-semibold md:text-3xl">
              Bewerbungsunterlagen, die in Deutschland und Österreich funktionieren.
            </h2>
            <div className="mt-6 grid gap-3">
              {(products ?? []).slice(0, 3).map((p) => (
                <div
                  key={p.id}
                  className="flex items-center justify-between gap-4 rounded-2xl border border-border bg-card p-4"
                >
                  <div>
                    <div className="font-medium">{p.title}</div>
                    <div className="text-sm text-muted-foreground">
                      {p.price_cents > 0 ? formatPrice(p.price_cents, p.currency) : "auf Anfrage"}
                    </div>
                  </div>
                  <Button asChild size="sm" variant="outline">
                    <Link to="/job-bewerbung">Details</Link>
                  </Button>
                </div>
              ))}
            </div>
            <Button asChild className="mt-6">
              <Link to="/job-bewerbung">Alle Leistungen ansehen</Link>
            </Button>
          </div>
          <div className="overflow-hidden rounded-3xl border border-border shadow-lg">
            <img
              src={bewerbungImage}
              alt="Bewerbungsgespräch"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 text-center">
        <h2 className="font-serif text-2xl font-semibold md:text-3xl">
          Kostenlos starten – jederzeit auf Premium wechseln
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
          Gratis: kurze Lektionen bis 1:30 Minuten und ausgewählte Demo-Inhalte. Premium: die
          komplette Bibliothek, alle Branchen, alle Übersetzungssprachen und das volle Quiz.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button asChild size="lg">
            <Link to="/preise">Preise ansehen</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link to="/lektionen">Kostenlos lernen</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
