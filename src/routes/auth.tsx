import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { toast } from "sonner";

export const Route = createFileRoute("/auth")({
  head: () => ({
    meta: [
      { title: "Anmelden – RealLife German" },
      {
        name: "description",
        content: "Melde dich an oder erstelle ein Konto, um Lektionen und Lernfortschritt zu nutzen.",
      },
      { property: "og:title", content: "Anmelden – RealLife German" },
      { property: "og:description", content: "Konto erstellen und Deutsch lernen." },
    ],
  }),
  component: AuthPage,
});

function AuthPage() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    if (user) navigate({ to: "/dashboard", replace: true });
  }, [user, navigate]);

  async function signIn(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setBusy(false);
    if (error) toast.error(error.message);
    else navigate({ to: "/dashboard", replace: true });
  }

  async function signUp(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${window.location.origin}/dashboard`,
        data: { display_name: name },
      },
    });
    setBusy(false);
    if (error) toast.error(error.message);
    else toast.success("Konto erstellt. Bitte E-Mail bestätigen, falls erforderlich.");
  }

  async function google() {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: window.location.origin },
    });
    if (error) toast.error("Google-Anmeldung fehlgeschlagen.");
  }

  async function reset() {
    if (!email) {
      toast.error("Bitte zuerst E-Mail eingeben.");
      return;
    }
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/auth`,
    });
    if (error) toast.error(error.message);
    else toast.success("E-Mail zum Zurücksetzen gesendet.");
  }

  return (
    <div className="mx-auto max-w-md px-4 py-16">
      <h1 className="font-serif text-3xl font-semibold">Willkommen</h1>
      <p className="mt-2 text-muted-foreground">
        Speichere deinen Fortschritt und schalte alle Lektionen frei.
      </p>

      <Button variant="outline" className="mt-8 w-full" onClick={google}>
        Mit Google fortfahren
      </Button>

      <div className="my-6 flex items-center gap-3 text-xs uppercase tracking-widest text-muted-foreground">
        <span className="h-px flex-1 bg-border" /> oder <span className="h-px flex-1 bg-border" />
      </div>

      <Tabs defaultValue="login">
        <TabsList className="w-full">
          <TabsTrigger value="login" className="flex-1">
            Anmelden
          </TabsTrigger>
          <TabsTrigger value="signup" className="flex-1">
            Registrieren
          </TabsTrigger>
        </TabsList>

        <TabsContent value="login">
          <form onSubmit={signIn} className="mt-5 space-y-4">
            <div>
              <Label htmlFor="email">E-Mail</Label>
              <Input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="password">Passwort</Label>
              <Input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Button type="submit" className="w-full" disabled={busy}>
              Anmelden
            </Button>
            <button
              type="button"
              onClick={reset}
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Passwort vergessen?
            </button>
          </form>
        </TabsContent>

        <TabsContent value="signup">
          <form onSubmit={signUp} className="mt-5 space-y-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
              <Label htmlFor="email2">E-Mail</Label>
              <Input
                id="email2"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="password2">Passwort</Label>
              <Input
                id="password2"
                type="password"
                required
                minLength={6}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Button type="submit" className="w-full" disabled={busy}>
              Konto erstellen
            </Button>
          </form>
        </TabsContent>
      </Tabs>
    </div>
  );
}
