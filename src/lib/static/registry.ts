import { friseurA1 } from "@/lib/static/lessons/friseur-a1";
import { friseurA2 } from "@/lib/static/lessons/friseur-a2";
import { friseurB1 } from "@/lib/static/lessons/friseur-b1";

/**
 * Registry: Lektions-Slug -> vollständiger, statischer Lektionsinhalt.
 * Diese Lektionen kommen zu 100% aus Code-Dateien (kein Supabase-Zugriff
 * nötig), damit sie direkt über GitHub gepflegt werden können.
 *
 * Neue Lektion hinzufügen: Datei unter src/lib/static/lessons/<slug>.ts
 * anlegen (Form wie friseur-a1.ts) und hier registrieren.
 */
export const lessonOverrideRegistry: Record<string, unknown> = {
  "friseur-a1": friseurA1,
  "friseur-a2": friseurA2,
  "friseur-b1": friseurB1,
};
