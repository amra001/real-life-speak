import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.4";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

type SourceType = "scene" | "vocab" | "dialog";
type TranslationLang = "tr" | "ar" | "uk" | "bks" | "ro";
const LANGS: TranslationLang[] = ["tr", "ar", "uk", "bks", "ro"];

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

function missingAny(t: Record<string, string> | null | undefined) {
  const x = t ?? {};
  return LANGS.some((lang) => !String(x[lang] ?? "").trim());
}

async function translateSingle(apiKey: string, germanText: string, lang: TranslationLang) {
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
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
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
  if (!aiResponse.ok) throw new Error(`AI translation failed: ${aiResponse.status}`);
  const ai = await aiResponse.json();
  return String(ai?.choices?.[0]?.message?.content ?? "").trim().replace(/^(["“])|(["”])$/g, "");
}

async function translateBatch(apiKey: string, texts: string[]) {
  const prompt = [
    "Translate each numbered German text into all five target languages.",
    "Return ONLY valid JSON: an array of objects with keys i,tr,ar,uk,bks,ro.",
    "Keep meaning exact, natural and suitable for German learners. Preserve names, numbers and punctuation.",
    `Languages: tr=${languageNames.tr}; ar=${languageNames.ar}; uk=${languageNames.uk}; bks=${languageNames.bks}; ro=${languageNames.ro}.`,
    ...texts.map((t, i) => `${i}: ${t}`),
  ].join("\n");
  const res = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      model: "google/gemini-3.1-flash-lite",
      messages: [
        { role: "system", content: "You are a precise professional translator. Output valid JSON only." },
        { role: "user", content: prompt },
      ],
      temperature: 0.1,
      max_tokens: 12000,
    }),
  });
  if (!res.ok) throw new Error(`AI batch translation failed: ${res.status}`);
  const data = await res.json();
  let raw = String(data?.choices?.[0]?.message?.content ?? "").trim();
  raw = raw.replace(/^```json\s*/i, "").replace(/^```\s*/i, "").replace(/\s*```$/i, "");
  return JSON.parse(raw) as Array<Record<string, unknown>>;
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

    const service = createClient(supabaseUrl, serviceRoleKey, {
      auth: { persistSession: false, autoRefreshToken: false },
    });
    const body = await req.json().catch(() => null) as {
      sourceType?: SourceType;
      sourceId?: string;
      lang?: TranslationLang;
      jobId?: string;
      category?: string;
      limit?: number;
    } | null;
    if (!body) return jsonResponse({ error: "Invalid request" }, 400);

    // Temporary secure batch mode for content backfill.
    if (body.jobId) {
      const { data: job, error: jobError } = await service
        .from("translation_backfill_jobs")
        .select("id,active,expires_at")
        .eq("id", body.jobId)
        .maybeSingle();
      if (jobError || !job || !job.active || new Date(job.expires_at).getTime() < Date.now()) {
        return jsonResponse({ error: "Invalid or expired backfill job" }, 403);
      }
      const sourceType = body.sourceType;
      if (!sourceType || !sources[sourceType]) return jsonResponse({ error: "Invalid sourceType" }, 400);
      const category = body.category;
      const limit = Math.min(Math.max(Number(body.limit ?? 20), 1), 30);
      const source = sources[sourceType];
      let q = service
        .from(source.table)
        .select(`id,${source.textColumn},translations,lesson_id,lessons!inner(category_slug,status,level)`)
        .eq("lessons.status", "published")
        .in("lessons.level", ["A1", "A2", "B1"]);
      if (category) q = q.eq("lessons.category_slug", category);
      const { data, error } = await q.limit(500);
      if (error) return jsonResponse({ error: error.message }, 500);
      const rows = (data ?? []).filter((r: any) => missingAny(r.translations)).slice(0, limit);
      if (!rows.length) return jsonResponse({ sourceType, category: category ?? null, processed: 0, updated: 0, done: true });

      const uniqueTexts: string[] = [];
      const textIndex = new Map<string, number>();
      for (const row of rows as any[]) {
        const text = String(row[source.textColumn] ?? "").trim();
        if (!textIndex.has(text)) { textIndex.set(text, uniqueTexts.length); uniqueTexts.push(text); }
      }
      const translated = await translateBatch(lovableApiKey, uniqueTexts);
      const byIndex = new Map<number, Record<string, unknown>>();
      for (const item of translated) byIndex.set(Number(item.i), item);
      let updated = 0;
      for (const row of rows as any[]) {
        const text = String(row[source.textColumn] ?? "").trim();
        const idx = textIndex.get(text)!;
        const tr = byIndex.get(idx);
        if (!tr) continue;
        const merged: Record<string, string> = { ...(row.translations ?? {}) };
        for (const lang of LANGS) {
          const value = String(tr[lang] ?? "").trim();
          if (value && !String(merged[lang] ?? "").trim()) merged[lang] = value;
        }
        const { error: upErr } = await service.from(source.table).update({ translations: merged }).eq("id", row.id);
        if (!upErr) updated++;
      }
      return jsonResponse({ sourceType, category: category ?? null, processed: rows.length, updated, done: rows.length < limit });
    }

    const preview = isLovablePreview(req);
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

    const sourceType = body.sourceType;
    const sourceId = body.sourceId;
    const lang = body.lang;
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
    if (translations[lang]?.trim()) return jsonResponse({ translation: translations[lang], cached: true });
    const germanText = String((row as Record<string, unknown>)[source.textColumn] ?? "").trim();
    if (!germanText) return jsonResponse({ error: "Content is empty" }, 400);
    const translated = await translateSingle(lovableApiKey, germanText, lang);
    if (!translated) return jsonResponse({ error: "Translation returned empty" }, 502);
    const merged = { ...translations, [lang]: translated };
    const { error: updateError } = await service.from(source.table).update({ translations: merged }).eq("id", sourceId);
    if (updateError) console.error("Could not cache translation", updateError.message);
    return jsonResponse({ translation: translated, cached: false });
  } catch (error) {
    console.error("translate-content error", error);
    return jsonResponse({ error: "Unexpected translation error" }, 500);
  }
});
