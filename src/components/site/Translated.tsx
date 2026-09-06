import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import type { TranslationLang } from "@/lib/taxonomy";

type SourceType = "scene" | "vocab" | "dialog";

const targetCode: Partial<Record<TranslationLang, string>> = {
  tr: "tr",
  ar: "ar",
  uk: "uk",
  bks: "bs",
  ro: "ro",
};

function cacheKey(sourceText: string, lang: TranslationLang) {
  return `rls-translation:${lang}:${sourceText}`;
}

function readCache(sourceText: string, lang: TranslationLang) {
  if (typeof window === "undefined" || !sourceText) return "";
  try {
    return window.localStorage.getItem(cacheKey(sourceText, lang)) ?? "";
  } catch {
    return "";
  }
}

function writeCache(sourceText: string, lang: TranslationLang, value: string) {
  if (typeof window === "undefined" || !sourceText || !value) return;
  try {
    window.localStorage.setItem(cacheKey(sourceText, lang), value);
  } catch {
    // localStorage may be unavailable in privacy mode; translation still remains visible.
  }
}

async function loadSourceText(sourceType?: SourceType, sourceId?: string) {
  if (!sourceType || !sourceId) return "";
  try {
    if (sourceType === "scene") {
      const { data } = await supabase.from("lesson_scenes").select("german_text").eq("id", sourceId).maybeSingle();
      return String(data?.german_text ?? "").trim();
    }
    if (sourceType === "dialog") {
      const { data } = await supabase.from("dialogs").select("german_text").eq("id", sourceId).maybeSingle();
      return String(data?.german_text ?? "").trim();
    }
    const { data } = await supabase.from("vocabulary").select("term").eq("id", sourceId).maybeSingle();
    return String(data?.term ?? "").trim();
  } catch {
    return "";
  }
}

async function publicFallback(sourceText: string, lang: TranslationLang) {
  const target = targetCode[lang];
  if (!target || !sourceText.trim()) return "";

  const url = new URL("https://api.mymemory.translated.net/get");
  url.searchParams.set("q", sourceText.trim());
  url.searchParams.set("langpair", `de|${target}`);

  const response = await fetch(url.toString(), { headers: { Accept: "application/json" } });
  if (!response.ok) return "";
  const payload = await response.json();

  const direct = String(payload?.responseData?.translatedText ?? "").trim();
  if (direct && direct.toLowerCase() !== sourceText.trim().toLowerCase()) return direct;

  const matches = Array.isArray(payload?.matches) ? payload.matches : [];
  const candidate = matches
    .map((match: any) => String(match?.translation ?? "").trim())
    .find((value: string) => value && value.toLowerCase() !== sourceText.trim().toLowerCase());
  return candidate ?? "";
}

/**
 * Übersetzung mit klar sichtbarer Hilfssprache.
 * Priorität: gespeicherte Übersetzung -> interner Übersetzungsdienst -> öffentlicher Fallback.
 * Fehlende Übersetzungen werden niemals aus einem alten Hilfssprachentext abgeleitet,
 * sondern immer aus dem aktuellen deutschen Quelldatensatz.
 */
export function Translated({
  text,
  sourceText = "",
  langLabel,
  className,
  sourceType,
  sourceId,
  lang,
  enabled = true,
}: {
  text: string;
  sourceText?: string;
  langLabel: string;
  className?: string;
  sourceType?: SourceType;
  sourceId?: string;
  lang?: TranslationLang;
  enabled?: boolean;
}) {
  const [resolved, setResolved] = useState(text);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (text) {
      setResolved(text);
      if (lang && lang !== "none" && sourceText) writeCache(sourceText, lang, text);
      return;
    }
    if (lang && lang !== "none" && sourceText) setResolved(readCache(sourceText, lang));
    else setResolved("");
  }, [lang, sourceText, text]);

  useEffect(() => {
    if (text || !enabled || !lang || lang === "none") return;
    let active = true;
    setLoading(true);

    const run = async () => {
      const german = sourceText.trim() || (await loadSourceText(sourceType, sourceId));
      if (!german) return "";

      const cached = readCache(german, lang);
      if (cached) return cached;

      if (sourceType && sourceId) {
        try {
          const { data, error } = await supabase.functions.invoke("translate-content", {
            body: { sourceType, sourceId, lang },
          });
          const internal = !error ? String(data?.translation ?? "").trim() : "";
          if (internal) {
            writeCache(german, lang, internal);
            return internal;
          }
        } catch {
          // Continue with the public fallback below.
        }
      }

      try {
        const fallback = await publicFallback(german, lang);
        if (fallback) writeCache(german, lang, fallback);
        return fallback;
      } catch {
        return "";
      }
    };

    void run()
      .then((value) => {
        if (!active || !value) return;
        setResolved(value);
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, [enabled, lang, sourceId, sourceText, sourceType, text]);

  if (!enabled || lang === "none") return null;

  return (
    <div className={className ?? "mt-1 text-sm text-muted-foreground"}>
      <span className="mr-1 text-xs uppercase tracking-widest text-muted-foreground/80">
        {langLabel}:
      </span>
      <span dir="auto">
        {resolved || (loading ? "Übersetzung wird geladen …" : "Übersetzung momentan nicht verfügbar")}
      </span>
    </div>
  );
}
