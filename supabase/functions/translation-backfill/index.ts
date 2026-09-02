import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.4";

const LANGS = ["tr", "ar", "uk", "bks", "ro"] as const;
type Lang = typeof LANGS[number];
type SourceType = "scene" | "vocab" | "dialog";

const languageNames: Record<Lang, string> = {
  tr: "Turkish",
  ar: "Modern Standard Arabic",
  uk: "Ukrainian",
  bks: "Bosnian/Croatian/Serbian in neutral Latin-script BCS",
  ro: "Romanian",
};

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), { status, headers: { "content-type": "application/json" } });
}

function missingAny(t: Record<string, string> | null | undefined) {
  const x = t ?? {};
  return LANGS.some((lang) => !String(x[lang] ?? "").trim());
}

async function translateBatch(apiKey: string, texts: string[]) {
  const prompt = [
    "Translate each German text into all five target languages.",
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
  if (!res.ok) throw new Error(`AI ${res.status}: ${(await res.text()).slice(0, 500)}`);
  const data = await res.json();
  let raw = String(data?.choices?.[0]?.message?.content ?? "").trim();
  raw = raw.replace(/^```json\s*/i, "").replace(/^```\s*/i, "").replace(/\s*```$/i, "");
  return JSON.parse(raw) as Array<Record<string, unknown>>;
}

Deno.serve(async (req) => {
  if (req.method !== "POST") return json({ error: "POST only" }, 405);

  const url = Deno.env.get("SUPABASE_URL");
  const serviceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
  const aiKey = Deno.env.get("LOVABLE_API_KEY");
  if (!url || !serviceKey || !aiKey) return json({ error: "missing env" }, 503);
  const db = createClient(url, serviceKey, { auth: { persistSession: false, autoRefreshToken: false } });

  const body = await req.json().catch(() => ({})) as { jobId?: string; sourceType?: SourceType; category?: string; limit?: number };
  if (!body.jobId) return json({ error: "jobId required" }, 403);
  const { data: job, error: jobError } = await db
    .from("translation_backfill_jobs")
    .select("id,active,expires_at")
    .eq("id", body.jobId)
    .maybeSingle();
  if (jobError || !job || !job.active || new Date(job.expires_at).getTime() < Date.now()) return json({ error: "invalid or expired job" }, 403);

  const sourceType = body.sourceType ?? "scene";
  const category = body.category;
  const limit = Math.min(Math.max(Number(body.limit ?? 20), 1), 30);
  const spec = sourceType === "scene"
    ? { table: "lesson_scenes", text: "german_text" }
    : sourceType === "vocab"
      ? { table: "vocabulary", text: "term" }
      : { table: "dialogs", text: "german_text" };

  let q = db.from(spec.table).select(`id,${spec.text},translations,lesson_id,lessons!inner(category_slug,status,level)`).eq("lessons.status", "published").in("lessons.level", ["A1","A2","B1"]);
  if (category) q = q.eq("lessons.category_slug", category);
  const { data, error } = await q.limit(300);
  if (error) return json({ error: error.message }, 500);

  const rows = (data ?? []).filter((r: any) => missingAny(r.translations)).slice(0, limit);
  if (!rows.length) return json({ sourceType, category: category ?? null, processed: 0, done: true });

  const uniqueTexts: string[] = [];
  const textIndex = new Map<string, number>();
  for (const r of rows as any[]) {
    const text = String(r[spec.text] ?? "").trim();
    if (!textIndex.has(text)) { textIndex.set(text, uniqueTexts.length); uniqueTexts.push(text); }
  }
  const translated = await translateBatch(aiKey, uniqueTexts);
  const byIndex = new Map<number, Record<string, unknown>>();
  for (const item of translated) byIndex.set(Number(item.i), item);

  let updated = 0;
  for (const r of rows as any[]) {
    const text = String(r[spec.text] ?? "").trim();
    const idx = textIndex.get(text)!;
    const tr = byIndex.get(idx);
    if (!tr) continue;
    const merged: Record<string, string> = { ...(r.translations ?? {}) };
    for (const lang of LANGS) {
      const value = String(tr[lang] ?? "").trim();
      if (value && !String(merged[lang] ?? "").trim()) merged[lang] = value;
    }
    const { error: upErr } = await db.from(spec.table).update({ translations: merged }).eq("id", r.id);
    if (!upErr) updated++;
  }
  return json({ sourceType, category: category ?? null, processed: rows.length, updated, done: rows.length < limit });
});
