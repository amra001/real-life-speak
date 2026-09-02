import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.4";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

type SourceType = "scene" | "vocab" | "dialog";
type TranslationLang = "tr" | "ar" | "uk" | "bks" | "ro";

const sources: Record<SourceType, { table: string; textColumn: string }> = {
  scene: { table: "lesson_scenes", textColumn: "german_text" },
  vocab: { table: "vocabulary", textColumn: "term" },
  dialog: { table: "dialogs", textColumn: "german_text" },
};

const languageNames: Record<TranslationLang, string> = {
  tr: "Turkish",
  ar: "Modern Standard Arabic",
  uk: "Ukrainian",
  bks: "Bosnian/Croatian/Serbian in neutral Latin-script BCS",
  ro: "Romanian",
};

function jsonResponse(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
}

function isLovablePreview(req: Request) {
  const raw = `${req.headers.get("origin") ?? ""} ${req.headers.get("referer") ?? ""}`.toLowerCase();
  return raw.includes(".lovable.app") && raw.includes("preview");
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });
  if (req.method !== "POST") return jsonResponse({ error: "Method not allowed" }, 405);

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const anonKey = Deno.env.get("SUPABASE_ANON_KEY");
    const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
    const lovableApiKey = Deno.env.get("LOVABLE_API_KEY");
    if (!supabaseUrl || !anonKey || !serviceRoleKey || !lovableApiKey) {
      return jsonResponse({ error: "Translation service is not configured" }, 503);
    }

    const preview = isLovablePreview(req);
    const service = createClient(supabaseUrl, serviceRoleKey, {
      auth: { persistSession: false, autoRefreshToken: false },
    });

    if (!preview) {
      const authHeader = req.headers.get("Authorization") ?? "";
      if (!authHeader.startsWith("Bearer ")) return jsonResponse({ error: "Authentication required" }, 401);

      const userClient = createClient(supabaseUrl, anonKey, {
        global: { headers: { Authorization: authHeader } },
        auth: { persistSession: false, autoRefreshToken: false },
      });
      const { data: userData, error: userError } = await userClient.auth.getUser();
      if (userError || !userData.user) return jsonResponse({ error: "Authentication required" }, 401);

      const { data: subscription } = await service
        .from("subscriptions")
        .select("plan,status")
        .eq("user_id", userData.user.id)
        .maybeSingle();
      const premium = !!subscription && subscription.status === "active" && subscription.plan !== "free";
      if (!premium) return jsonResponse({ error: "Premium required for automatic translation" }, 403);
    }

    const body = await req.json().catch(() => null) as { sourceType?: SourceType; sourceId?: string; lang?: TranslationLang } | null;
    const sourceType = body?.sourceType;
    const sourceId = body?.sourceId;
    const lang = body?.lang;
    if (!sourceType || !sourceId || !lang || !sources[sourceType] || !languageNames[lang]) {
      return jsonResponse({ error: "Invalid translation request" }, 400);
    }

    const source = sources[sourceType];
    const { data: row, error: rowError } = await service
      .from(source.table)
      .select(`id,${source.textColumn},translations`)
      .eq("id", sourceId)
      .maybeSingle();
    if (rowError || !row) return jsonResponse({ error: "Content not found" }, 404);

    const translations = (row.translations ?? {}) as Record<string, string>;
    if (translations[lang]?.trim()) {
      return jsonResponse({ translation: translations[lang], cached: true });
    }

    const germanText = String((row as Record<string, unknown>)[source.textColumn] ?? "").trim();
    if (!germanText) return jsonResponse({ error: "Content is empty" }, 400);

    const prompt = [
      `Translate the following German learning-platform content into ${languageNames[lang]}.`,
      "Keep the meaning natural, concise and suitable for language learners.",
      "Do not explain, annotate, quote or transliterate the answer.",
      "Preserve names, numbers and punctuation where appropriate.",
      lang === "bks" ? "Use widely understandable neutral Bosnian/Croatian/Serbian vocabulary in Latin script." : "",
      `German: ${germanText}`,
    ].filter(Boolean).join("\n");

    const aiResponse = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${lovableApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3.1-flash-lite",
        messages: [
          { role: "system", content: "You are a precise professional translator for a German-learning platform. Return only the translated text." },
          { role: "user", content: prompt },
        ],
        temperature: 0.1,
        max_tokens: 500,
      }),
    });

    if (!aiResponse.ok) {
      const detail = await aiResponse.text().catch(() => "");
      console.error("AI translation failed", aiResponse.status, detail.slice(0, 500));
      return jsonResponse({ error: "Translation temporarily unavailable" }, 502);
    }

    const ai = await aiResponse.json();
    const translated = String(ai?.choices?.[0]?.message?.content ?? "").trim().replace(/^(["“])|(["”])$/g, "");
    if (!translated) return jsonResponse({ error: "Translation returned empty" }, 502);

    const merged = { ...translations, [lang]: translated };
    const { error: updateError } = await service
      .from(source.table)
      .update({ translations: merged })
      .eq("id", sourceId);
    if (updateError) console.error("Could not cache translation", updateError.message);

    return jsonResponse({ translation: translated, cached: false });
  } catch (error) {
    console.error("translate-content error", error);
    return jsonResponse({ error: "Unexpected translation error" }, 500);
  }
});
