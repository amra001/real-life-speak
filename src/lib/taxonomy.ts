export const LEVELS = ["A1", "A2", "B1", "B2"] as const;
export type Level = (typeof LEVELS)[number];

export const LEVEL_INFO: Record<Level, { label: string; description: string }> = {
  A1: { label: "A1", description: "Elementare Sprachanwendung – einfache Sätze, langsame Aussprache." },
  A2: { label: "A2", description: "Routinesituationen – Einkauf, Arbeit, Arzt, Schule." },
  B1: { label: "B1", description: "Selbstständig – Probleme erklären, Erfahrungen beschreiben." },
  B2: { label: "B2", description: "Komplexe Gespräche, Fachdiskussionen, Argumentation." },
};

export const REGIONS = [
  { slug: "de", label: "Deutschland", flag: "🇩🇪" },
  { slug: "at", label: "Österreich", flag: "🇦🇹" },
] as const;

export const TRANSLATION_LANGS = [
  { code: "none", label: "Keine Übersetzung" },
  { code: "tr", label: "Türkisch" },
  { code: "ar", label: "Arabisch" },
  { code: "uk", label: "Ukrainisch" },
  { code: "bks", label: "BKS" },
  { code: "ro", label: "Rumänisch" },
] as const;

export const DURATIONS = [
  { seconds: 30, label: "30 Sek." },
  { seconds: 60, label: "1 Min." },
  { seconds: 180, label: "3 Min." },
  { seconds: 300, label: "5 Min." },
  { seconds: 600, label: "10 Min." },
  { seconds: 900, label: "15 Min." },
] as const;

export function formatDuration(seconds: number): string {
  if (seconds < 60) return `${seconds} Sek.`;
  return `${Math.round(seconds / 60)} Min.`;
}

export type CategoryNode = { slug: string; name: string; children: { slug: string; name: string }[] };

export const CATEGORIES: CategoryNode[] = [
  {
    slug: "alltag",
    name: "Alltag",
    children: [
      { slug: "supermarkt", name: "Supermarkt" },
      { slug: "baeckerei", name: "Bäckerei" },
      { slug: "restaurant", name: "Restaurant" },
      { slug: "cafe", name: "Café" },
      { slug: "friseur", name: "Friseur" },
      { slug: "kleidung", name: "Kleidung kaufen" },
      { slug: "post", name: "Post" },
      { slug: "bank", name: "Bank" },
      { slug: "telefonieren", name: "Telefonieren" },
      { slug: "termin", name: "Termin vereinbaren" },
    ],
  },
  {
    slug: "gesundheit",
    name: "Gesundheit",
    children: [
      { slug: "hausarzt", name: "Hausarzt" },
      { slug: "facharzt", name: "Facharzt" },
      { slug: "apotheke", name: "Apotheke" },
      { slug: "krankenhaus", name: "Krankenhaus" },
      { slug: "schmerzen", name: "Schmerzen beschreiben" },
      { slug: "medikamente", name: "Medikamente" },
      { slug: "untersuchung", name: "Untersuchung" },
      { slug: "rezept", name: "Rezept" },
      { slug: "krankenstand", name: "Krankenstand" },
    ],
  },
  {
    slug: "wohnen",
    name: "Wohnen",
    children: [
      { slug: "wohnung-suchen", name: "Wohnung suchen" },
      { slug: "wohnung-besichtigen", name: "Wohnung besichtigen" },
      { slug: "vermieter", name: "Vermieter anrufen" },
      { slug: "mietvertrag", name: "Mietvertrag" },
      { slug: "hausverwaltung", name: "Hausverwaltung" },
      { slug: "nachbarn", name: "Nachbarn" },
      { slug: "reparatur", name: "Reparatur melden" },
      { slug: "heizung", name: "Heizung" },
      { slug: "strom", name: "Strom" },
      { slug: "wasser", name: "Wasser" },
    ],
  },
  {
    slug: "verkehr",
    name: "Verkehr & Reisen",
    children: [
      { slug: "bus", name: "Bus" },
      { slug: "strassenbahn", name: "Straßenbahn" },
      { slug: "zug", name: "Zug" },
      { slug: "bahnhof", name: "Bahnhof" },
      { slug: "flughafen", name: "Flughafen" },
      { slug: "taxi", name: "Taxi" },
      { slug: "weg-fragen", name: "Weg fragen" },
      { slug: "fahrkarte", name: "Fahrkarte kaufen" },
      { slug: "hotel", name: "Hotel" },
    ],
  },
  {
    slug: "schule-familie",
    name: "Schule & Familie",
    children: [
      { slug: "kindergarten", name: "Kindergarten" },
      { slug: "schule", name: "Schule" },
      { slug: "elternsprechtag", name: "Elternsprechtag" },
      { slug: "lehrer", name: "Lehrer sprechen" },
      { slug: "kind-krank", name: "Krankheit des Kindes" },
      { slug: "entschuldigung", name: "Entschuldigung schreiben" },
      { slug: "schulausflug", name: "Schulausflug" },
      { slug: "hausaufgaben", name: "Hausaufgaben" },
    ],
  },
  {
    slug: "arbeit",
    name: "Arbeit",
    children: [
      { slug: "bewerbung", name: "Bewerbung" },
      { slug: "vorstellungsgespraech", name: "Vorstellungsgespräch" },
      { slug: "erster-arbeitstag", name: "Erster Arbeitstag" },
      { slug: "chef", name: "Chef" },
      { slug: "kollegen", name: "Kollegen" },
      { slug: "dienstplan", name: "Dienstplan" },
      { slug: "urlaub", name: "Urlaub" },
      { slug: "arbeitsanweisung", name: "Arbeitsanweisung" },
      { slug: "gastronomie", name: "Küche & Gastronomie" },
      { slug: "baustelle", name: "Baustelle" },
      { slug: "pflege", name: "Pflege" },
      { slug: "krankenhaus-beruf", name: "Krankenhaus" },
      { slug: "facility", name: "Facility Management" },
      { slug: "handel", name: "Handel" },
      { slug: "elektro", name: "Elektro" },
    ],
  },
];

export function categoryName(slug: string | null | undefined): string {
  if (!slug) return "";
  for (const c of CATEGORIES) {
    if (c.slug === slug) return c.name;
    const child = c.children.find((x) => x.slug === slug);
    if (child) return child.name;
  }
  return slug;
}
