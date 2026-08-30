import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/premium-erfolg")({
  head: () => ({
    meta: [
      { title: "Premium aktiviert – RealLife German" },
      { name: "description", content: "Dein RealLife-German-Premiumzugang wird aktiviert." },
    ],
  }),
  component: PremiumSuccessPage,
});

type State = "loading" | "success" | "error" | "login";

function PremiumSuccessPage() {
  const { user, loading: authLoading } = useAuth();
  const [state, setState] = useState<State>("loading");
  const [message, setMessage] = useState("Deine Zahlung wird geprüft …");

  useEffect(() => {
    if (authLoading) return;

    const params = new URLSearchParams(window.location.search);
    const sessionId = params.get("session_id") ?? "";

    if (!user) {
      setState("login");
      setMessage("Melde dich bitte mit dem Konto an, mit dem du Premium gekauft hast.");
      return;
    }

    if (!sessionId.startsWith("cs_")) {
      setState("error");
      setMessage("Die Checkout-Sitzung konnte nicht gefunden werden.");
      return;
    }

    let active = true;
    setState("loading");
    setMessage("Deine Zahlung wird geprüft und Premium wird aktiviert …");

    void supabase.functions
      .invoke("verify-checkout", { body: { session_id: sessionId } })
      .then(({ data, error }) => {
        if (!active) return;
        if (error || !data?.premium) {
          setState("error");
          setMessage("Die Zahlung konnte noch nicht bestätigt werden. Bitte versuche es in einem Moment erneut.");
          return;
        }
        setState("success");
        setMessage("Premium ist aktiv. Du hast jetzt Zugriff auf die komplette A1–B1-Lernbibliothek.");
      })
      .catch(() => {
        if (!active) return;
        setState("error");
        setMessage("Die Zahlung konnte gerade nicht bestätigt werden.");
      });

    return () => {
      active = false;
    };
  }, [authLoading, user]);

  const retry = () => window.location.reload();
  const currentPath = typeof window !== "undefined" ? `${window.location.pathname}${window.location.search}` : "/premium-erfolg";

  return (
    <div className="mx-auto flex min-h-[65vh] max-w-xl items-center px-4 py-16">
      <div className="w-full rounded-3xl border border-border bg-card p-8 text-center shadow-sm">
        {state === "loading" && <Loader2 className="mx-auto h-12 w-12 animate-spin text-accent" />}
        {state === "success" && <CheckCircle2 className="mx-auto h-12 w-12 text-accent" />}
        {(state === "error" || state === "login") && <AlertCircle className="mx-auto h-12 w-12 text-muted-foreground" />}

        <h1 className="mt-5 font-serif text-3xl font-semibold">
          {state === "success" ? "Premium ist aktiviert" : state === "login" ? "Fast geschafft" : state === "error" ? "Zahlung wird noch geprüft" : "Premium wird aktiviert"}
        </h1>
        <p className="mt-3 text-muted-foreground">{message}</p>

        <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center">
          {state === "success" && (
            <>
              <Button asChild><Link to="/lektionen">Jetzt lernen</Link></Button>
              <Button asChild variant="outline"><Link to="/dashboard">Zum Dashboard</Link></Button>
            </>
          )}
          {state === "login" && (
            <Button asChild>
              <Link to="/auth" search={{ next: currentPath }}>Anmelden und Premium aktivieren</Link>
            </Button>
          )}
          {state === "error" && (
            <>
              <Button onClick={retry}>Erneut prüfen</Button>
              <Button asChild variant="outline"><Link to="/preise">Zur Preisseite</Link></Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
