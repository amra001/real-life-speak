import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.4";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const APP_URL = "https://real-life-speak.lovable.app";
const LOOKUP_KEY = "reallife_german_premium_monthly";

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

async function stripePost(path: string, secret: string, params: URLSearchParams) {
  const response = await fetch(`https://api.stripe.com/v1/${path}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${secret}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: params.toString(),
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data?.error?.message ?? "Stripe request failed");
  return data;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });
  if (req.method !== "POST") return json({ error: "Method not allowed" }, 405);

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const anonKey = Deno.env.get("SUPABASE_ANON_KEY");
    const stripeSecret = Deno.env.get("STRIPE_SECRET_KEY");
    if (!supabaseUrl || !anonKey || !stripeSecret) return json({ error: "Payment service is not configured" }, 503);

    const authHeader = req.headers.get("Authorization") ?? "";
    if (!authHeader.startsWith("Bearer ")) return json({ error: "Authentication required" }, 401);

    const supabase = createClient(supabaseUrl, anonKey, {
      global: { headers: { Authorization: authHeader } },
      auth: { persistSession: false, autoRefreshToken: false },
    });
    const { data: userData, error: userError } = await supabase.auth.getUser();
    const user = userData.user;
    if (userError || !user?.email) return json({ error: "Authentication required" }, 401);

    const prices = await stripeGet(`prices?lookup_keys[]=${encodeURIComponent(LOOKUP_KEY)}&active=true&limit=1`, stripeSecret);
    let priceId = prices?.data?.[0]?.id as string | undefined;

    if (!priceId) {
      const productParams = new URLSearchParams();
      productParams.set("name", "RealLife German Premium");
      productParams.set("description", "Voller Zugang zur A1–B1-Lernbibliothek mit 15 Situationen, 9 Lernbereichen, Übungen und Abschlusstests.");
      productParams.set("metadata[app]", "real-life-german");
      const product = await stripePost("products", stripeSecret, productParams);

      const priceParams = new URLSearchParams();
      priceParams.set("currency", "eur");
      priceParams.set("unit_amount", "990");
      priceParams.set("recurring[interval]", "month");
      priceParams.set("product", product.id);
      priceParams.set("lookup_key", LOOKUP_KEY);
      priceParams.set("nickname", "Premium monatlich");
      const price = await stripePost("prices", stripeSecret, priceParams);
      priceId = price.id;
    }

    const checkout = new URLSearchParams();
    checkout.set("mode", "subscription");
    checkout.set("line_items[0][price]", priceId!);
    checkout.set("line_items[0][quantity]", "1");
    checkout.set("success_url", `${APP_URL}/premium-erfolg?session_id={CHECKOUT_SESSION_ID}`);
    checkout.set("cancel_url", `${APP_URL}/preise?checkout=abgebrochen`);
    checkout.set("customer_email", user.email);
    checkout.set("client_reference_id", user.id);
    checkout.set("metadata[user_id]", user.id);
    checkout.set("subscription_data[metadata][user_id]", user.id);
    checkout.set("allow_promotion_codes", "true");
    checkout.set("locale", "auto");

    const session = await stripePost("checkout/sessions", stripeSecret, checkout);
    return json({ url: session.url });
  } catch (error) {
    console.error("create-checkout", error);
    return json({ error: error instanceof Error ? error.message : "Checkout konnte nicht erstellt werden" }, 500);
  }
});
