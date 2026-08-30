import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";

/** Premium-Status des angemeldeten Nutzers. Stripe-Abos werden regelmäßig serverseitig synchronisiert. */
export function usePremium() {
  const { user, loading } = useAuth();

  const { data, isLoading } = useQuery({
    queryKey: ["subscription", user?.id ?? "anon"],
    enabled: !!user,
    staleTime: 5 * 60 * 1000,
    queryFn: async () => {
      const { data: synced, error: syncError } = await supabase.functions.invoke("sync-subscription", { body: {} });
      if (!syncError && synced) {
        return {
          plan: synced.plan ?? "free",
          status: synced.status ?? "active",
        };
      }

      // Fallback, falls Stripe noch nicht verbunden oder der Sync vorübergehend nicht erreichbar ist.
      const { data, error } = await supabase
        .from("subscriptions")
        .select("plan, status")
        .eq("user_id", user!.id)
        .maybeSingle();
      if (error) throw error;
      return data;
    },
  });

  const isPremium = !!data && data.status === "active" && data.plan !== "free";
  return { isPremium, isLoading: loading || (!!user && isLoading), user };
}
