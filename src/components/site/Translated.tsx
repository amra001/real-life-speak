import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import type { TranslationLang } from "@/lib/taxonomy";

type SourceType = "scene" | "vocab" | "dialog";

/** Übersetzung mit klar sichtbarer Hilfssprache. Fehlende Premium-Übersetzungen werden einmalig erzeugt und serverseitig gecacht. */
export function Translated({
  text,
  langLabel,
  className,
  sourceType,
  sourceId,
  lang,
  enabled = true,
}: {
  text: string;
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
    setResolved(text);
  }, [text]);

  useEffect(() => {
    if (text || !enabled || !sourceType || !sourceId || !lang || lang === "none") return;
    let active = true;
    setLoading(true);
    void supabase.functions
      .invoke("translate-content", { body: { sourceType, sourceId, lang } })
      .then(({ data, error }) => {
        if (!active) return;
        if (!error && data?.translation) setResolved(String(data.translation));
      })
      .finally(() => {
        if (active) setLoading(false);
      });
    return () => {
      active = false;
    };
  }, [enabled, lang, sourceId, sourceType, text]);

  if (!enabled || lang === "none") return null;
  if (!resolved && !loading) return null;

  return (
    <div className={className ?? "mt-1 text-sm text-muted-foreground"}>
      <span className="mr-1 text-xs uppercase tracking-widest text-muted-foreground/80">
        {langLabel}:
      </span>
      <span dir="auto">{resolved || "Übersetzung wird geladen …"}</span>
    </div>
  );
}
