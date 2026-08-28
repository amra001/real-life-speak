import { useCallback, useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { TRANSLATION_LANGS, type TranslationLang } from "@/lib/taxonomy";

const LANG_KEY = "rlg:translation-lang";
const SHOW_KEY = "rlg:translation-visible";

function readLocal(key: string): string | null {
  if (typeof window === "undefined") return null;
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
}

function writeLocal(key: string, value: string): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(key, value);
  } catch {
    /* ignore */
  }
}

/**
 * Übersetzungssprache: lokal gespeichert und – wenn eingeloggt – im Profil.
 * Zusätzlich kann die Übersetzung jederzeit ein-/ausgeschaltet werden.
 */
export function useTranslationPreference() {
  const { user } = useAuth();
  const [lang, setLangState] = useState<TranslationLang>("tr");
  const [visible, setVisibleState] = useState(true);

  useEffect(() => {
    const stored = readLocal(LANG_KEY);
    if (stored) setLangState(stored as TranslationLang);
    const vis = readLocal(SHOW_KEY);
    if (vis === "0") setVisibleState(false);
  }, []);

  useEffect(() => {
    if (!user) return;
    let active = true;
    supabase
      .from("profiles")
      .select("translation_lang")
      .eq("id", user.id)
      .maybeSingle()
      .then(({ data }) => {
        if (active && data?.translation_lang) {
          setLangState(data.translation_lang as TranslationLang);
          writeLocal(LANG_KEY, data.translation_lang);
        }
      });
    return () => {
      active = false;
    };
  }, [user]);

  const setLang = useCallback(
    (next: TranslationLang) => {
      setLangState(next);
      writeLocal(LANG_KEY, next);
      if (user) {
        void supabase.from("profiles").update({ translation_lang: next }).eq("id", user.id);
      }
    },
    [user],
  );

  const setVisible = useCallback((next: boolean) => {
    setVisibleState(next);
    writeLocal(SHOW_KEY, next ? "1" : "0");
  }, []);

  const translate = useCallback(
    (translations: Record<string, string> | null | undefined): string => {
      if (!visible || lang === "none" || !translations) return "";
      return translations[lang] ?? "";
    },
    [lang, visible],
  );

  const langLabel = TRANSLATION_LANGS.find((l) => l.code === lang)?.label ?? "";
  const helperActive = visible && lang !== "none";

  return { lang, setLang, visible, setVisible, translate, langLabel, helperActive };
}
