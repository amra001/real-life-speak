import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.4";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
}

async function stripeGet(path: string, secret: string) {
  const response = await fetch(`https://api.stripe.com/v1/${path}`, {
    headers: { Authorization: `Bearer ${secret}` },
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data?.error?.message ?? "Stripe request failed");
  return data;
}

function stripeStatusToLocal(status: string) {
  return ["active", "trialing"].includes(status) ? "active" : status || "inactive";
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });
  if (req.method !== "POST") return json({ error: "Method not allowed" }, 405);

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const anonKey = Deno.env.get("SUPABASE_ANON_KEY");
    const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
    const stripeSecret = Deno.env.get("STRIPE_SECRET_KEY");
    if (!supabaseUrl || !anonKey || !serviceRoleKey) return json({ error: "Backend is not configured" }, 503);

    const authHeader = req.headers.get("Authorization") ?? "";
    if (!authHeader.startsWith("Bearer ")) return json({ error: "Authentication required" }, 401);

    const userClient = createClient(supabaseUrl, anonKey, {
      global: { headers: { Authorization: authHeader } },
      auth: { persistSession: false, autoRefreshToken: false },
    });
    const { data: userData, error: userError } = await userClient.auth.getUser();
    const user = userData.user;
    if (userError || !user) return json({ error: "Authentication required" }, 401);

    const service = createClient(supabaseUrl, serviceRoleKey, {
      auth: { persistSession: false, autoRefreshToken: false },
    });
    const { data: stored, error: storedError } = await service
      .from("subscriptions")
      .select("plan,status,stripe_subscription_id,current_period_end,cancel_at_period_end")
      .eq("user_id", user.id)
      .maybeSingle();
    if (storedError) throw new Error(storedError.message);

    if (!stored) return json({ plan: "free", status: "active", premium: false });
    if (!stored.stripe_subscription_id || !stripeSecret) {
      return json({
        plan: stored.plan,
        status: stored.status,
        premium: stored.status === "active" && stored.plan !== "free",
        current_period_end: stored.current_period_end,
        cancel_at_period_end: stored.cancel_at_period_end,
      });
    }

    const subscription = await stripeGet(`subscriptions/${encodeURIComponent(stored.stripe_subscription_id)}`, stripeSecret);
    const stripeStatus = String(subscription?.status ?? "inactive");
    const localStatus = stripeStatusToLocal(stripeStatus);
    const currentPeriodEnd = subscription?.current_period_end ? new Date(subscription.current_period_end * 1000).toISOString() : null;
    const premium = ["active", "trialing"].includes(stripeStatus);

    const { error: updateError } = await service.from("subscriptions").update({
      plan: premium ? "premium" : stored.plan,
      status: localStatus,
      current_period_end: currentPeriodEnd,
      cancel_at_period_end: !!subscription?.cancel_at_period_end,
      updated_at: new Date().toISOString(),
    }).eq("user_id", user.id);
    if (updateError) throw new Error(updateError.message);

    return json({
      plan: premium ? "premium" : stored.plan,
      status: localStatus,
      premium,
      current_period_end: currentPeriodEnd,
      cancel_at_period_end: !!subscription?.cancel_at_period_end,
    });
  } catch (error) {
    console.error("sync-subscription", error);
    return json({ error: error instanceof Error ? error.message : "Abo-Status konnte nicht synchronisiert werden" }, 500);
  }
});
