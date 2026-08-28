import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-surface">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:grid-cols-3">
        <div>
          <div className="font-serif text-lg font-semibold">RealLife German</div>
          <p className="mt-2 max-w-xs text-sm text-muted-foreground">
            Deutsch lernen mit echten Alltags- und Berufssituationen – sehen, hören, verstehen,
            üben.
          </p>
        </div>
        <div className="text-sm">
          <div className="font-medium">Plattform</div>
          <ul className="mt-3 space-y-2 text-muted-foreground">
            <li>
              <Link to="/lektionen" className="hover:text-foreground">
                Lektionen
              </Link>
            </li>
            <li>
              <Link to="/preise" className="hover:text-foreground">
                Preise
              </Link>
            </li>
            <li>
              <Link to="/ueber-uns" className="hover:text-foreground">
                Über uns
              </Link>
            </li>
          </ul>
        </div>
        <div className="text-sm">
          <div className="font-medium">Konto</div>
          <ul className="mt-3 space-y-2 text-muted-foreground">
            <li>
              <Link to="/auth" className="hover:text-foreground">
                Anmelden
              </Link>
            </li>
            <li>
              <Link to="/dashboard" className="hover:text-foreground">
                Dashboard
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} RealLife German
      </div>
    </footer>
  );
}
