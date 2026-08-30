import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.4";

const BACKFILL_TOKEN = "df2oyB4TespdbuKgOwj2sHOZTr8MblgdgM262xwlfEo";

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
  });
}

function cleanJsonText(value: string) {
  return value.trim().replace(/^```(?:json)?\s*/i, "").replace(/\s*```$/i, "").trim();
}

Deno.serve(async (req) => {
  try {
    const url = new URL(req.url);
    if (url.searchParams.get("token") !== BACKFILL_TOKEN) return json({ error: "forbidden" }, 403);

    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
    const lovableApiKey = Deno.env.get("LOVABLE_API_KEY");
    if (!supabaseUrl || !serviceRoleKey || !lovableApiKey) return json({ error: "missing runtime secrets" }, 503);

    const requested = Number(url.searchParams.get("batch") ?? "80");
    const batch = Math.max(1, Math.min(Number.isFinite(requested) ? requested : 80, 100));
    const supabase = createClient(supabaseUrl, serviceRoleKey, {
      auth: { persistSession: false, autoRefreshToken: false },
    });

    const { data: rows, error: nextError } = await supabase.rpc("translation_backfill_next", { p_limit: batch });
    if (nextError) return json({ error: nextError.message }, 500);
    if (!rows?.length) return json({ done: true, processed: 0, updated_rows: 0 });

    const inputs = rows.map((row: { source_type: string; source_text: string }, i: number) => ({
      i,
      text: row.source_text,
    }));

    const prompt = `Translate every German item below into five target languages for a professional German-learning platform.\n\nReturn ONLY valid JSON: an array of objects with exactly these keys: i, tr, ar, uk, bks, ro.\n- tr = natural Turkish\n- ar = Modern Standard Arabic\n- uk = natural Ukrainian\n- bks = neutral, widely understandable Bosnian/Croatian/Serbian in LATIN script\n- ro = natural Romanian\nPreserve names, numbers and intended meaning. Do not explain anything. Do not omit any item.\n\nINPUT:\n${JSON.stringify(inputs)}`;

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${lovableApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3.1-flash-lite",
        messages: [
          { role: "system", content: "You are a precise multilingual translator. Return only valid JSON and preserve the input indices exactly." },
          { role: "user", content: prompt },
        ],
        temperature: 0.05,
        max_tokens: 24000,
      }),
    });

    if (!response.ok) {
      const detail = await response.text().catch(() => "");
      return json({ error: "AI request failed", status: response.status, detail: detail.slice(0, 500) }, 502);
    }

    const ai = await response.json();
    const raw = String(ai?.choices?.[0]?.message?.content ?? "");
    let translated: Array<Record<string, unknown>>;
    try {
      translated = JSON.parse(cleanJsonText(raw));
    } catch {
      return json({ error: "AI returned invalid JSON", sample: raw.slice(0, 500) }, 502);
    }

    const byIndex = new Map<number, Record<string, unknown>>();
    for (const item of translated) byIndex.set(Number(item.i), item);

    const payload = rows.map((row: { source_type: string; source_text: string }, i: number) => {
      const t = byIndex.get(i) ?? {};
      return {
        source_type: row.source_type,
        source_text: row.source_text,
        tr: String(t.tr ?? "").trim(),
        ar: String(t.ar ?? "").trim(),
        uk: String(t.uk ?? "").trim(),
        bks: String(t.bks ?? "").trim(),
        ro: String(t.ro ?? "").trim(),
      };
    });

    const invalid = payload.filter((p: Record<string, string>) => !p.tr || !p.ar || !p.uk || !p.bks || !p.ro);
    if (invalid.length) return json({ error: "AI omitted translations", invalid: invalid.length }, 502);

    const { data: updatedRows, error: applyError } = await supabase.rpc("translation_backfill_apply_batch", { p_rows: payload });
    if (applyError) return json({ error: applyError.message }, 500);

    const { data: remainingProbe } = await supabase.rpc("translation_backfill_next", { p_limit: 1 });
    return json({
      done: !remainingProbe?.length,
      processed: rows.length,
      updated_rows: updatedRows ?? 0,
    });
  } catch (error) {
    console.error("translate-backfill", error);
    return json({ error: error instanceof Error ? error.message : "unexpected error" }, 500);
  }
});
