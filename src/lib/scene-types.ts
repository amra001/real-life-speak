/**
 * Allgemeines, themenunabhängiges Szenentyp-System.
 *
 * Jede Szene einer Lektion bekommt einen Szenentyp (SceneType). Pro Thema wird
 * nur noch eine Tabelle "Szenentyp -> Bild-Key" hinterlegt (SceneImageMap).
 * Dadurch braucht kein Thema eine eigene Komponente oder Sonderlogik.
 */

export const SCENE_TYPES = [
  "context",      // Ort / Außenansicht / Einstieg
  "enter",        // Person betritt den Ort
  "greeting",     // Begrüßung
  "look",         // Auslage / Produkte ansehen
  "ask",          // Frage / Wunsch äußern
  "choice",       // zwei oder mehrere Möglichkeiten
  "select",       // Entscheidung
  "compare",      // Produkte vergleichen
  "problem",      // kleines Problem
  "solution",     // Lösung
  "pay_cash",
  "wallet",
  "pay_card",
  "receipt",
  "handover",
  "goodbye",
  "return_home",
] as const;

export type SceneType = (typeof SCENE_TYPES)[number];

/** Bild-Keys je Szenentyp für ein Thema. Unvollständige Maps sind erlaubt. */
export type SceneImageMap = Partial<Record<SceneType, string>> & { fallback: string };

/**
 * Semantische Nachbarschaft: wenn für einen Szenentyp kein eigenes Bild
 * existiert, wird der nächstpassende Typ verwendet (und die Szene gilt als
 * needs_image).
 */
const NEAREST: Record<SceneType, SceneType[]> = {
  context: ["enter", "look"],
  enter: ["context", "look"],
  greeting: ["enter", "ask"],
  look: ["choice", "enter"],
  ask: ["greeting", "look"],
  choice: ["compare", "look"],
  select: ["choice", "handover"],
  compare: ["choice", "look"],
  problem: ["ask", "wallet"],
  solution: ["ask", "handover"],
  pay_cash: ["wallet", "pay_card"],
  wallet: ["pay_cash", "pay_card"],
  pay_card: ["pay_cash", "receipt"],
  receipt: ["pay_card", "handover"],
  handover: ["goodbye", "receipt"],
  goodbye: ["handover", "return_home"],
  return_home: ["goodbye", "context"],
};

export type ResolvedSceneImage = { image_key: string; needs_image: boolean };

/** Liefert den Bild-Key für einen Szenentyp innerhalb eines Themas. */
export function resolveSceneImage(map: SceneImageMap, type: SceneType): ResolvedSceneImage {
  const exact = map[type];
  if (exact) return { image_key: exact, needs_image: false };
  for (const alt of NEAREST[type] ?? []) {
    const key = map[alt];
    if (key) return { image_key: key, needs_image: true };
  }
  return { image_key: map.fallback, needs_image: true };
}

/** Bäckerei-Bildtabelle (gilt für alle Bäckerei-Niveaus). */
export const BAKERY_SCENE_IMAGES: SceneImageMap = {
  fallback: "baeck-ill-02",
  context: "baeck-fenster",
  enter: "baeck-strasse",
  greeting: "baeck-ill-01",
  look: "baeck-ill-02",
  ask: "baeck-ill-01",
  choice: "baeck-ill-03",
  compare: "baeck-ill-03",
  select: "baeck-ill-04",
  handover: "baeck-ill-05",
  problem: "baeck-ill-06",
  solution: "baeck-ill-07",
  pay_cash: "baeck-ill-08",
  wallet: "baeck-ill-08",
  pay_card: "baeck-ill-09",
  receipt: "baeck-ill-09",
  goodbye: "baeck-ill-10",
  return_home: "baeck-strasse",
};

/** Registry: Themen-Slug -> Bildtabelle. Neue Themen hier eintragen. */
export const TOPIC_SCENE_IMAGES: Record<string, SceneImageMap> = {
  baeckerei: BAKERY_SCENE_IMAGES,
};

export function sceneImageForTopic(topicSlug: string | null | undefined, type: SceneType, fallbackKey?: string | null): ResolvedSceneImage {
  const map = (topicSlug && TOPIC_SCENE_IMAGES[topicSlug]) || null;
  if (!map) return { image_key: fallbackKey ?? "", needs_image: true };
  return resolveSceneImage(map, type);
}

/**
 * Wiederverwendbarer Aufbau für neue Themen: aus (position, german_text,
 * scene_type, translations) werden Szenen mit korrektem Bild-Key und
 * needs_image-Flag erzeugt. Kein Thema braucht dafür eigene Logik.
 */
export function buildScenes<T extends { id: string; position: number; german_text: string; scene_type: SceneType; translations: Record<string, string> }>(
  topicSlug: string,
  raw: T[],
): (T & { image_key: string; needs_image?: boolean })[] {
  return raw.map((s) => {
    const { image_key, needs_image } = sceneImageForTopic(topicSlug, s.scene_type);
    return needs_image ? { ...s, image_key, needs_image: true } : { ...s, image_key };
  });
}

/** QA-Helfer: liefert alle Szenen ohne Bild-Key oder mit needs_image. */
export function auditScenes(scenes: { position: number; image_key?: string | null; needs_image?: boolean }[]) {
  return scenes.filter((s) => !s.image_key || s.needs_image).map((s) => s.position);
}
