import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";

/** Premium-Status des angemeldeten Nutzers (Abo aktiv). */
export function usePremium() {
  const { user, loading } = useAuth();

  const { data, isLoading } = useQuery({
    queryKey: ["subscription", user?.id ?? "anon"],
    enabled: !!user,
    queryFn: async () => {
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
