import { Link } from "@tanstack/react-router";

const COLUMNS: { title: string; links: { to: string; label: string }[] }[] = [
  {
    title: "Lernen",
    links: [
      { to: "/lektionen", label: "Lektionen" },
      { to: "/beruf", label: "Deutsch im Beruf" },
      { to: "/preise", label: "Preise" },
    ],
  },
  {
    title: "Unterstützung",
    links: [
      { to: "/job-bewerbung", label: "Job & Bewerbung" },
      { to: "/privatunterricht", label: "Privatunterricht" },
      { to: "/ueber-uns", label: "Über mich" },
    ],
  },
  {
    title: "Konto",
    links: [
      { to: "/auth", label: "Login" },
      { to: "/dashboard", label: "Dashboard" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent font-serif text-sm font-bold text-accent-foreground">
              RG
            </span>
            <span className="font-serif text-lg font-semibold">RealLife German</span>
          </div>
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">
            Deutsch lernen für Alltag, Beruf und Bewerbung – mit echten Situationen und
            persönlicher Unterstützung.
          </p>
        </div>

        {COLUMNS.map((c) => (
          <div key={c.title}>
            <div className="text-xs uppercase tracking-widest text-muted-foreground">{c.title}</div>
            <ul className="mt-4 space-y-2">
              {c.links.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-6xl px-4 py-5 text-xs text-muted-foreground">
          © {new Date().getFullYear()} RealLife German · Deutschland &amp; Österreich
        </div>
      </div>
    </footer>
  );
}
