/**
 * Allgemeines, themenunabhängiges Szenentyp-System.
 *
 * Jede Szene einer Lektion bekommt einen Szenentyp (SceneType). Pro Thema wird
 * nur eine Tabelle "Szenentyp -> Bild-Key" hinterlegt (SceneImageMap).
 * Dadurch braucht kein Thema eine eigene Komponente oder Sonderlogik.
 *
 * Zusätzlich kann der Szenentyp aus dem deutschen Satz abgeleitet werden
 * (inferSceneType), damit auch bestehende Datenbank-Lektionen ohne gepflegtes
 * scene_type-Feld automatisch das passende Bild bekommen.
 */

export const SCENE_TYPES = [
  // Allgemeiner Ablauf
  "context",
  "location",
  "enter",
  "greeting",
  "wait",
  "look",
  "ask",
  "explain",
  "compare",
  "choice",
  "select",
  "choose",
  "recommend",
  "confirm",
  "problem",
  "solution",
  "pay",
  "pay_cash",
  "pay_card",
  "wallet",
  "receipt",
  "handover",
  "goodbye",
  "leave",
  "return_home",
  // Themenspezifische, aber wiederverwendbare Bausteine
  "describe_symptoms",
  "examination",
  "prescription",
  "ask_direction",
  "schedule_check",
  "ticket",
  "board",
  "ride",
  "exit_vehicle",
  "safety_instruction",
  "work_task",
  "instruction",
  "warning",
  "opinion",
  "reaction",
  "order",
  "serve",
  "try_on",
  "form",
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
  context: ["location", "enter", "look"],
  location: ["context", "enter"],
  enter: ["context", "location", "look"],
  greeting: ["enter", "ask"],
  wait: ["location", "context"],
  look: ["choice", "enter"],
  ask: ["greeting", "look"],
  explain: ["ask", "recommend"],
  compare: ["choice", "look"],
  choice: ["compare", "look"],
  choose: ["select", "choice"],
  select: ["choose", "choice", "handover"],
  recommend: ["explain", "ask"],
  confirm: ["explain", "handover"],
  problem: ["ask", "explain"],
  solution: ["explain", "handover"],
  pay: ["pay_cash", "pay_card"],
  pay_cash: ["pay", "wallet", "pay_card"],
  pay_card: ["pay", "pay_cash", "receipt"],
  wallet: ["pay_cash", "pay"],
  receipt: ["pay_card", "handover"],
  handover: ["goodbye", "receipt"],
  goodbye: ["handover", "leave"],
  leave: ["goodbye", "return_home"],
  return_home: ["leave", "goodbye", "context"],
  describe_symptoms: ["explain", "ask"],
  examination: ["explain", "describe_symptoms"],
  prescription: ["handover", "explain"],
  ask_direction: ["ask", "explain"],
  schedule_check: ["look", "ask"],
  ticket: ["pay", "handover"],
  board: ["enter", "ticket"],
  ride: ["wait", "board"],
  exit_vehicle: ["leave", "goodbye"],
  safety_instruction: ["instruction", "warning"],
  work_task: ["instruction", "explain"],
  instruction: ["explain", "work_task"],
  warning: ["problem", "instruction"],
  opinion: ["explain", "ask"],
  reaction: ["confirm", "explain"],
  order: ["ask", "select"],
  serve: ["handover", "order"],
  try_on: ["compare", "select"],
  form: ["explain", "ask"],
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
  location: "baeck-strasse",
  enter: "baeck-strasse",
  greeting: "baeck-ill-01",
  look: "baeck-ill-02",
  ask: "baeck-ill-01",
  explain: "baeck-ill-03",
  choice: "baeck-ill-03",
  compare: "baeck-ill-03",
  recommend: "baeck-ill-03",
  select: "baeck-ill-04",
  choose: "baeck-ill-04",
  handover: "baeck-ill-05",
  problem: "baeck-ill-06",
  solution: "baeck-ill-07",
  pay: "baeck-ill-08",
  pay_cash: "baeck-ill-08",
  wallet: "baeck-wallet",
  pay_card: "baeck-ill-09",
  receipt: "baeck-bon",
  goodbye: "baeck-ill-10",
  leave: "baeck-ill-10",
  return_home: "baeck-heimweg",
};

/** Bus-Bildtabelle (bestehende Fotostory). */
export const BUS_SCENE_IMAGES: SceneImageMap = {
  fallback: "bus-haltestelle",
  context: "bus-haltestelle",
  location: "bus-haltestelle",
  wait: "bus-haltestelle",
  schedule_check: "bus-fahrkarte",
  ride: "bus-ankunft",
  board: "bus-einsteigen",
  enter: "bus-einsteigen",
  greeting: "bus-fahrer",
  ask: "bus-fahrer",
  ask_direction: "bus-fahrgast",
  explain: "bus-fahrer",
  ticket: "bus-fahrkarte",
  pay: "bus-bezahlen",
  pay_cash: "bus-bezahlen",
  pay_card: "bus-bezahlen",
  handover: "bus-fahrkarte",
  select: "bus-sitzplatz",
  choose: "bus-sitzplatz",
  look: "bus-sitzen",
  problem: "bus-fahrgast",
  solution: "bus-fahrgast",
  confirm: "bus-fahrgast",
  goodbye: "bus-aussteigen",
  leave: "bus-aussteigen",
  exit_vehicle: "bus-aussteigen",
};

/** Supermarkt-Bildtabelle (bestehende Fotostory). */
export const SUPERMARKT_SCENE_IMAGES: SceneImageMap = {
  fallback: "markt-eingang",
  context: "markt-eingang",
  location: "markt-eingang",
  enter: "markt-eingang",
  greeting: "markt-mitarbeiter",
  look: "markt-obst",
  ask: "markt-mitarbeiter",
  explain: "markt-mitarbeiter",
  compare: "markt-brot",
  choice: "markt-brot",
  select: "markt-milch",
  choose: "markt-milch",
  recommend: "markt-mitarbeiter",
  problem: "markt-mitarbeiter",
  solution: "markt-wagen",
  handover: "markt-kasse",
  pay: "markt-kasse",
  pay_cash: "markt-kasse",
  pay_card: "markt-karte",
  receipt: "markt-karte",
  goodbye: "markt-ausgang",
  leave: "markt-ausgang",
  return_home: "markt-ausgang",
};

/** Apotheke-Bildtabelle (eigener Illustrationssatz). */
export const APOTHEKE_SCENE_IMAGES: SceneImageMap = {
  fallback: "apo-theke",
  context: "apo-strasse",
  location: "apo-strasse",
  enter: "apo-eingang",
  greeting: "apo-theke",
  look: "apo-vergleich",
  wait: "apo-warten",
  ask: "apo-theke",
  describe_symptoms: "apo-symptome",
  explain: "apo-beratung",
  recommend: "apo-beratung",
  compare: "apo-vergleich",
  choice: "apo-vergleich",
  select: "apo-vergleich",
  choose: "apo-vergleich",
  prescription: "apo-rezept",
  form: "apo-rezept",
  instruction: "apo-einnahme",
  confirm: "apo-einnahme",
  problem: "apo-symptome",
  solution: "apo-beratung",
  pay: "apo-kasse",
  pay_cash: "apo-kasse",
  pay_card: "apo-kasse",
  receipt: "apo-kasse",
  handover: "apo-uebergabe",
  goodbye: "apo-abschied",
  leave: "apo-abschied",
  return_home: "apo-strasse",
};

/** Registry: Themen-Slug -> Bildtabelle. Neue Themen hier eintragen. */
export const TOPIC_SCENE_IMAGES: Record<string, SceneImageMap> = {
  baeckerei: BAKERY_SCENE_IMAGES,
  bus: BUS_SCENE_IMAGES,
  supermarkt: SUPERMARKT_SCENE_IMAGES,
  apotheke: APOTHEKE_SCENE_IMAGES,
};

export function sceneImageForTopic(
  topicSlug: string | null | undefined,
  type: SceneType,
  fallbackKey?: string | null,
): ResolvedSceneImage {
  const map = (topicSlug && TOPIC_SCENE_IMAGES[topicSlug]) || null;
  if (!map) return { image_key: fallbackKey ?? "", needs_image: true };
  return resolveSceneImage(map, type);
}

/**
 * Schlüsselwort-Regeln, um aus einem deutschen Satz den Szenentyp abzuleiten.
 * Reihenfolge = Priorität (spezifisch vor allgemein).
 */
const TYPE_RULES: [SceneType, RegExp][] = [
  ["receipt", /kassenbon|\bbon\b|quittung|beleg/i],
  ["pay_card", /mit karte|kartenzahlung|kartenlese|ec-karte|bankkarte/i],
  ["wallet", /geldbörse|brieftasche|portemonnaie|zu wenig bargeld/i],
  ["pay_cash", /bar bezahl|bargeld|kleingeld|passend/i],
  ["pay", /bezahl|kostet|preis|kasse|zahlen|euro/i],
  ["prescription", /rezept|verschreib|verordnung/i],
  ["describe_symptoms", /schmerz|fieber|husten|halsweh|übelkeit|symptom|krank|weh tut|beschwerden/i],
  ["examination", /untersuch|abhören|blutdruck|messen|liege/i],
  ["instruction", /nehmen sie|einnahme|zweimal täglich|anleitung|erklärt, wie|hinweis/i],
  ["safety_instruction", /helm|sicherheitsschuhe|schutz|sicherheitsanweisung|unfall|vorschrift/i],
  ["warning", /achtung|gefahr|vorsicht|warnt/i],
  ["work_task", /aufgabe|arbeitsauftrag|schicht|arbeitet|werkzeug|material|palette|regal einräum/i],
  ["ticket", /fahrkarte|ticket|automat|schalter|fahrschein/i],
  ["schedule_check", /fahrplan|abfahrt|ankunft|verspätung|gleis|anzeigetafel/i],
  ["board", /steigt ein|einsteigen|betritt den bus|betritt den zug/i],
  ["exit_vehicle", /steigt aus|aussteigen|verlässt den bus|verlässt den zug/i],
  ["ride", /fährt|fahrt|unterwegs/i],
  ["wait", /wartet|warten|schlange/i],
  ["ask_direction", /wo ist|wie komme ich|welche linie|richtung/i],
  ["try_on", /anprobier|probiert|umkleide|passt mir|größe/i],
  ["order", /bestell|ich hätte gern|ich nehme|speisekarte/i],
  ["serve", /bringt das essen|serviert|stellt das glas/i],
  ["form", /formular|ausfüllen|unterschreib|anmeldung|versichertenkarte/i],
  ["ask", /ich brauche|hätte gern|ich möchte|haben sie\b/i],
  ["greeting", /guten (tag|morgen)|hallo|begrüßt|grüßt|kann ich ihnen helfen/i],
  ["enter", /betritt|kommt in|geht hinein|öffnet die tür|kommt an/i],
  ["context", /gegenüber|von außen|schaut aus dem fenster|straße|liegt in der/i],
  ["compare", /vergleich|unterschied|kräftiger|milder|günstiger|besser als|weniger süß/i],
  ["recommend", /empfiehl|empfehlung|rät|schlägt vor/i],
  ["choice", /oder|zwei möglichkeiten|welche|welcher|welches/i],
  ["select", /entscheidet sich|wählt|nimmt das|nimmt den|nimmt die/i],
  ["problem", /problem|funktioniert nicht|kaputt|leider|nicht genug|fehlt|beschwert/i],
  ["solution", /lösung|kümmert sich|repariert|tauscht|bietet an/i],
  ["handover", /übergibt|packt ein|reicht|bekommt die tüte|gibt ihr|gibt ihm/i],
  ["goodbye", /auf wiedersehen|verabschied|schönen tag|tschüss|danke und/i],
  ["return_home", /geht zurück|nach hause|heimweg/i],
  ["explain", /erklärt|erzählt|beschreibt|sagt, dass/i],
  ["ask", /fragt|möchte wissen|erkundigt|\?/i],
  ["look", /schaut|sieht|betrachtet|auslage|regal|vitrine/i],
];

/** Leitet aus dem deutschen Satz einen Szenentyp ab (mit Positionsheuristik). */
export function inferSceneType(germanText: string, position: number, total: number): SceneType {
  for (const [type, re] of TYPE_RULES) if (re.test(germanText)) return type;
  const ratio = total > 1 ? (position - 1) / (total - 1) : 0;
  if (ratio < 0.1) return "context";
  if (ratio < 0.25) return "greeting";
  if (ratio < 0.5) return "ask";
  if (ratio < 0.7) return "explain";
  if (ratio < 0.85) return "confirm";
  return "goodbye";
}

export type BasicScene = {
  position: number;
  german_text: string;
  image_key?: string | null;
  scene_type?: SceneType | null;
  needs_image?: boolean;
};

/**
 * Generisch für ALLE Themen: ergänzt Szenentyp, Bild-Key und needs_image.
 * Szenen behalten ihren bereits gepflegten Bild-Key (statische Lektionen),
 * Datenbank-Szenen mit reinem Thumbnail-Key bekommen ein passendes Motiv.
 */
export function applyTopicSceneImages<T extends BasicScene>(
  topicSlug: string | null | undefined,
  thumbnailKey: string | null | undefined,
  scenes: T[],
): T[] {
  const map = (topicSlug && TOPIC_SCENE_IMAGES[topicSlug]) || null;
  const total = scenes.length;
  return scenes.map((s) => {
    const type = s.scene_type ?? inferSceneType(s.german_text, s.position, total);
    if (!map) {
      // Kein eigener Bildsatz für das Thema: Thumbnail als Platzhalter, offen ausweisen.
      return { ...s, scene_type: type, image_key: s.image_key ?? thumbnailKey ?? null, needs_image: true };
    }
    // Bereits themen-eigener Bild-Key (nicht nur Thumbnail) bleibt erhalten.
    const hasOwnKey = !!s.image_key && s.image_key !== thumbnailKey && s.image_key !== topicSlug;
    if (hasOwnKey) return { ...s, scene_type: type, needs_image: s.needs_image ?? false };
    const resolved = resolveSceneImage(map, type);
    return { ...s, scene_type: type, image_key: resolved.image_key, needs_image: resolved.needs_image };
  });
}

/**
 * Wiederverwendbarer Aufbau für neue Themen: aus (position, german_text,
 * scene_type, translations) werden Szenen mit korrektem Bild-Key und
 * needs_image-Flag erzeugt.
 */
export function buildScenes<
  T extends { id: string; position: number; german_text: string; scene_type: SceneType; translations: Record<string, string> },
>(topicSlug: string, raw: T[]): (T & { image_key: string; needs_image?: boolean })[] {
  return raw.map((s) => {
    const { image_key, needs_image } = sceneImageForTopic(topicSlug, s.scene_type);
    return needs_image ? { ...s, image_key, needs_image: true } : { ...s, image_key };
  });
}

/** QA-Helfer: liefert alle Szenen ohne Bild-Key oder mit needs_image. */
export function auditScenes(scenes: { position: number; image_key?: string | null; needs_image?: boolean }[]) {
  return scenes.filter((s) => !s.image_key || s.needs_image).map((s) => s.position);
}

/** Referenz-Szenenanzahl je Niveau (aus den Bäckerei-Modulen ausgelesen). */
export const REFERENCE_LEVEL_SCENES: Record<string, number> = { A1: 20, A2: 25, B1: 11 };
