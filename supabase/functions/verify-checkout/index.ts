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
    if (!supabaseUrl || !anonKey || !serviceRoleKey || !stripeSecret) return json({ error: "Payment service is not configured" }, 503);

    const authHeader = req.headers.get("Authorization") ?? "";
    if (!authHeader.startsWith("Bearer ")) return json({ error: "Authentication required" }, 401);

    const userClient = createClient(supabaseUrl, anonKey, {
      global: { headers: { Authorization: authHeader } },
      auth: { persistSession: false, autoRefreshToken: false },
    });
    const { data: userData, error: userError } = await userClient.auth.getUser();
    const user = userData.user;
    if (userError || !user) return json({ error: "Authentication required" }, 401);

    const body = await req.json().catch(() => null) as { session_id?: string } | null;
    const sessionId = body?.session_id?.trim();
    if (!sessionId || !sessionId.startsWith("cs_")) return json({ error: "Invalid checkout session" }, 400);

    const session = await stripeGet(`checkout/sessions/${encodeURIComponent(sessionId)}?expand[]=subscription&expand[]=customer`, stripeSecret);
    const linkedUserId = session.client_reference_id ?? session.metadata?.user_id;
    if (linkedUserId !== user.id) return json({ error: "Checkout session does not belong to this account" }, 403);
    if (session.status !== "complete") return json({ error: "Checkout is not complete" }, 409);

    const subscription = typeof session.subscription === "object" ? session.subscription : await stripeGet(`subscriptions/${encodeURIComponent(session.subscription)}`, stripeSecret);
    const customerId = typeof session.customer === "object" ? session.customer?.id : session.customer;
    const subStatus = String(subscription?.status ?? "inactive");
    const currentPeriodEnd = subscription?.current_period_end ? new Date(subscription.current_period_end * 1000).toISOString() : null;

    const service = createClient(supabaseUrl, serviceRoleKey, {
      auth: { persistSession: false, autoRefreshToken: false },
    });
    const { error: upsertError } = await service.from("subscriptions").upsert({
      user_id: user.id,
      plan: "premium",
      status: stripeStatusToLocal(subStatus),
      stripe_customer_id: customerId ?? null,
      stripe_subscription_id: subscription?.id ?? null,
      current_period_end: currentPeriodEnd,
      cancel_at_period_end: !!subscription?.cancel_at_period_end,
      updated_at: new Date().toISOString(),
    }, { onConflict: "user_id" });
    if (upsertError) throw new Error(upsertError.message);

    return json({
      premium: ["active", "trialing"].includes(subStatus),
      status: subStatus,
      current_period_end: currentPeriodEnd,
      cancel_at_period_end: !!subscription?.cancel_at_period_end,
    });
  } catch (error) {
    console.error("verify-checkout", error);
    return json({ error: error instanceof Error ? error.message : "Checkout konnte nicht verifiziert werden" }, 500);
  }
});
