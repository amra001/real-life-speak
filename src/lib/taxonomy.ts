/**
 * Kuratierte Themenliste: 60 Alltagsthemen statt der historisch gewachsenen
 * ~150 (u.a. Fach-Spezialisierungen wie Baustelle/Elektro/Logistik-Personal
 * und Duplikate wie "chef"/"buero-chef"). Nur Themen in dieser Liste werden
 * in Übersichten (Startseite, Lektionsbibliothek, Berufsseite) angezeigt.
 * Direkte Links auf andere Slugs funktionieren weiterhin, sie sind nur nicht
 * mehr in der Navigation sichtbar.
 */
export const ALLOWED_TOPIC_SLUGS = new Set([
  // Alltag & Einkaufen
  "supermarkt", "baeckerei", "kasse", "einkaufen", "kleidung", "friseur", "apotheke", "post", "bank",
  // Gastro
  "restaurant", "cafe",
  // Gesundheit
  "hausarzt", "facharzt", "zahnarzt", "medikamente", "krankenhaus",
  // Verkehr & Reise
  "bus", "bahnhof", "zug", "taxi", "strassenbahn", "flughafen", "reise", "mietwagen",
  // Wohnen
  "wohnung-suchen", "wohnung-besichtigen", "vermieter", "mietvertrag", "umzug", "nachbarn",
  // Familie & Schule
  "familie", "schule", "schulausflug", "elternsprechtag", "hausaufgaben", "kindergarten", "zeugnis",
  // Arbeit allgemein
  "chef", "kollegen", "meetings", "termin", "telefonieren", "email", "erster-arbeitstag",
  "krankenstand", "urlaub", "vorstellungsgespraech", "lebenslauf",
  // Probleme & Service
  "reklamation", "reparatur", "strom", "wasser", "heizung", "hausverwaltung", "kundenberatung",
  // Sonstiges
  "freizeit", "sport", "hygiene", "hotel", "service",
]);

export const LEVELS = ["A1", "A2", "B1", "B2"] as const;
export type Level = (typeof LEVELS)[number];

export const LEVEL_INFO: Record<Level, { label: string; short: string; description: string }> = {
  A1: {
    label: "A1 – Anfang",
    short: "Sehr einfache Alltagssätze",
    description:
      "Sehr einfache Sätze für konkrete Bedürfnisse: sich vorstellen, einkaufen, kurze Fragen stellen. Langsame, deutliche Sprache.",
  },
  A2: {
    label: "A2 – Grundlagen",
    short: "Routine im Alltag",
    description:
      "Routinesituationen aus Alltag, Arbeit, Familie und Einkauf. Direkte Informationsweitergabe in kurzen, klaren Sätzen.",
  },
  B1: {
    label: "B1 – Selbstständig",
    short: "Zusammenhängend sprechen",
    description:
      "Zusammenhängende Sprache zu Alltag, Arbeit, Schule und Reisen. Probleme erklären, Erfahrungen schildern, kurz begründen.",
  },
  B2: {
    label: "B2 – Fortgeschritten",
    short: "Diskutieren & argumentieren",
    description:
      "Komplexere Inhalte im Beruf: Diskussionen, Fachsprache, Standpunkte vertreten und Argumente abwägen.",
  },
};

export const REGIONS = [
  { slug: "de", label: "Deutschland", flag: "🇩🇪" },
  { slug: "at", label: "Österreich", flag: "🇦🇹" },
] as const;

/** Regionale Wortvarianten Deutschland ↔ Österreich. */
export const REGION_VARIANTS: { de: string; at: string }[] = [
  { de: "Brötchen", at: "Semmel" },
  { de: "Januar", at: "Jänner" },
  { de: "Krankenhaus", at: "Spital" },
  { de: "Tüte", at: "Sackerl" },
  { de: "Sahne", at: "Schlagobers" },
  { de: "Tomate", at: "Paradeiser" },
  { de: "Straßenbahn", at: "Bim" },
  { de: "Kartoffel", at: "Erdapfel" },
];

export const TRANSLATION_LANGS = [
  { code: "none", label: "Keine Übersetzung" },
  { code: "tr", label: "Türkisch" },
  { code: "ar", label: "Arabisch" },
  { code: "uk", label: "Ukrainisch" },
  { code: "bks", label: "Bosnisch / Kroatisch / Serbisch" },
  { code: "ro", label: "Rumänisch" },
] as const;

export type TranslationLang = (typeof TRANSLATION_LANGS)[number]["code"];

export const DURATIONS = [
  { seconds: 30, label: "30 Sek." },
  { seconds: 60, label: "1 Min." },
  { seconds: 90, label: "1:30 Min." },
  { seconds: 180, label: "3 Min." },
  { seconds: 300, label: "5 Min." },
  { seconds: 600, label: "10 Min." },
  { seconds: 900, label: "15 Min." },
] as const;

/** Kostenlose Lektionen sind auf 1 Minute 30 Sekunden begrenzt. */
export const FREE_MAX_SECONDS = 90;
/** So viele Szenen sieht ein kostenloser Nutzer als Vorschau einer Premium-Lektion. */
export const FREE_PREVIEW_SCENES = 3;

/** Ungefähre Lernzeit – gerundet auf 5 Minuten, keine exakte Videolänge. */
export function formatDuration(seconds: number): string {
  const minutes = Math.max(5, Math.round(seconds / 60 / 5) * 5);
  return `ca. ${minutes} Min. Lernzeit`;
}

export type CategoryNode = {
  slug: string;
  name: string;
  area: "alltag" | "beruf";
  children: { slug: string; name: string }[];
};

export const CATEGORIES: CategoryNode[] = [
  {
    slug: "alltag",
    name: "Alltag",
    area: "alltag",
    children: [
      { slug: "supermarkt", name: "Supermarkt" },
      { slug: "baeckerei", name: "Bäckerei" },
      { slug: "restaurant", name: "Restaurant" },
      { slug: "cafe", name: "Café" },
      { slug: "kleidung", name: "Kleidung kaufen" },
      { slug: "friseur", name: "Friseur" },
      { slug: "post", name: "Post" },
      { slug: "bank", name: "Bank" },
      { slug: "telefonieren", name: "Telefonieren" },
      { slug: "termin", name: "Termine" },
      { slug: "einkaufen", name: "Einkaufen" },
      { slug: "nachbarn", name: "Nachbarn" },
      { slug: "freizeit", name: "Freizeit" },
      { slug: "sport", name: "Sport" },
      { slug: "familie", name: "Familie" },
    ],
  },
  {
    slug: "gesundheit",
    name: "Gesundheit",
    area: "alltag",
    children: [
      { slug: "hausarzt", name: "Hausarzt" },
      { slug: "facharzt", name: "Facharzt" },
      { slug: "apotheke", name: "Apotheke" },
      { slug: "krankenhaus", name: "Krankenhaus" },
      { slug: "schmerzen", name: "Schmerzen beschreiben" },
      { slug: "medikamente", name: "Medikamente" },
      { slug: "untersuchung", name: "Untersuchung" },
      { slug: "rezept", name: "Rezept" },
      { slug: "arzttermin", name: "Termin vereinbaren" },
      { slug: "notaufnahme", name: "Notaufnahme" },
      { slug: "zahnarzt", name: "Zahnarzt" },
      { slug: "kinderarzt", name: "Kinderarzt" },
    ],
  },
  {
    slug: "wohnen",
    name: "Wohnen",
    area: "alltag",
    children: [
      { slug: "wohnung-suchen", name: "Wohnung suchen" },
      { slug: "wohnung-besichtigen", name: "Wohnungsbesichtigung" },
      { slug: "vermieter", name: "Vermieter" },
      { slug: "mietvertrag", name: "Mietvertrag" },
      { slug: "hausverwaltung", name: "Hausverwaltung" },
      { slug: "reparatur", name: "Reparatur melden" },
      { slug: "strom", name: "Strom" },
      { slug: "wasser", name: "Wasser" },
      { slug: "heizung", name: "Heizung" },
      { slug: "wohnen-nachbarn", name: "Nachbarn" },
      { slug: "umzug", name: "Umzug" },
    ],
  },
  {
    slug: "verkehr",
    name: "Verkehr & Reisen",
    area: "alltag",
    children: [
      { slug: "bus", name: "Bus" },
      { slug: "strassenbahn", name: "Straßenbahn" },
      { slug: "zug", name: "Zug" },
      { slug: "bahnhof", name: "Bahnhof" },
      { slug: "flughafen", name: "Flughafen" },
      { slug: "taxi", name: "Taxi" },
      { slug: "fahrkarte", name: "Fahrkarte" },
      { slug: "weg-fragen", name: "Weg fragen" },
      { slug: "hotel", name: "Hotel" },
      { slug: "reise", name: "Reise" },
      { slug: "mietwagen", name: "Mietwagen" },
    ],
  },
  {
    slug: "schule-familie",
    name: "Schule & Familie",
    area: "alltag",
    children: [
      { slug: "kindergarten", name: "Kindergarten" },
      { slug: "schule", name: "Schule" },
      { slug: "elternsprechtag", name: "Elternsprechtag" },
      { slug: "lehrer", name: "Mit Lehrer sprechen" },
      { slug: "kind-krank", name: "Krankheit des Kindes" },
      { slug: "entschuldigung", name: "Entschuldigung" },
      { slug: "schulausflug", name: "Schulausflug" },
      { slug: "hausaufgaben", name: "Hausaufgaben" },
      { slug: "anmeldung", name: "Anmeldung" },
      { slug: "schulmaterial", name: "Schulmaterial" },
      { slug: "zeugnis", name: "Zeugnis" },
      { slug: "paedagogen", name: "Gespräch mit Pädagogen" },
    ],
  },

  // ---------- Deutsch im Beruf ----------
  {
    slug: "arbeit",
    name: "Allgemeine Arbeit",
    area: "beruf",
    children: [
      { slug: "erster-arbeitstag", name: "Erster Arbeitstag" },
      { slug: "kollegen", name: "Kollegen" },
      { slug: "chef", name: "Chef" },
      { slug: "dienstplan", name: "Dienstplan" },
      { slug: "urlaub", name: "Urlaub" },
      { slug: "krankenstand", name: "Krankenstand" },
      { slug: "arbeitsanweisung", name: "Arbeitsanweisungen" },
      { slug: "arbeitszeiten", name: "Arbeitszeiten" },
      { slug: "meetings", name: "Meetings" },
      { slug: "pausen", name: "Pausen" },
      { slug: "probleme-arbeitsplatz", name: "Probleme am Arbeitsplatz" },
    ],
  },
  {
    slug: "gastronomie",
    name: "Küche & Gastronomie",
    area: "beruf",
    children: [
      { slug: "kueche", name: "Küche" },
      { slug: "gastro-anweisungen", name: "Arbeitsanweisungen" },
      { slug: "zutaten", name: "Zutaten" },
      { slug: "bestellungen", name: "Bestellungen" },
      { slug: "gastro-reinigung", name: "Reinigung" },
      { slug: "restaurant-beruf", name: "Restaurant" },
      { slug: "service", name: "Service" },
      { slug: "hygiene", name: "Hygiene" },
    ],
  },
  {
    slug: "baustelle",
    name: "Baustelle",
    area: "beruf",
    children: [
      { slug: "werkzeug", name: "Werkzeug" },
      { slug: "sicherheit", name: "Sicherheit" },
      { slug: "baustellenkommunikation", name: "Baustellenkommunikation" },
      { slug: "material", name: "Material" },
      { slug: "arbeitsauftraege", name: "Arbeitsaufträge" },
      { slug: "arbeitskleidung", name: "Arbeitskleidung" },
      { slug: "unfallvermeidung", name: "Unfallvermeidung" },
    ],
  },
  {
    slug: "pflege",
    name: "Pflege",
    area: "beruf",
    children: [
      { slug: "patienten-ansprechen", name: "Patienten ansprechen" },
      { slug: "bewohner-betreuen", name: "Bewohner betreuen" },
      { slug: "pflege-medikamente", name: "Medikamente" },
      { slug: "pflege-schmerzen", name: "Schmerzen" },
      { slug: "aufstehen", name: "Aufstehen" },
      { slug: "koerperpflege", name: "Körperpflege" },
      { slug: "essen", name: "Essen" },
      { slug: "dokumentation", name: "Dokumentation" },
      { slug: "uebergabe", name: "Übergabe" },
    ],
  },
  {
    slug: "krankenhaus-beruf",
    name: "Krankenhaus",
    area: "beruf",
    children: [
      { slug: "patientenaufnahme", name: "Patientenaufnahme" },
      { slug: "station", name: "Station" },
      { slug: "transport", name: "Transport" },
      { slug: "kh-pflege", name: "Pflege" },
      { slug: "kh-reinigung", name: "Reinigung" },
      { slug: "kh-kueche", name: "Küche" },
      { slug: "kommunikation-patienten", name: "Kommunikation mit Patienten" },
      { slug: "kh-anweisungen", name: "Interne Arbeitsanweisungen" },
    ],
  },
  {
    slug: "facility",
    name: "Facility Management",
    area: "beruf",
    children: [
      { slug: "fm-reinigung", name: "Reinigung" },
      { slug: "haustechnik", name: "Haustechnik" },
      { slug: "fm-reparatur", name: "Reparatur" },
      { slug: "kontrollgaenge", name: "Kontrollgänge" },
      { slug: "sanitaeranlagen", name: "Sanitäranlagen" },
      { slug: "beleuchtung", name: "Beleuchtung" },
      { slug: "stoerungen", name: "Störungen melden" },
    ],
  },
  {
    slug: "handel",
    name: "Handel",
    area: "beruf",
    children: [
      { slug: "kasse", name: "Kasse" },
      { slug: "kundenberatung", name: "Kundenberatung" },
      { slug: "waren-einraeumen", name: "Waren einräumen" },
      { slug: "lager-handel", name: "Lager" },
      { slug: "reklamation", name: "Reklamation" },
      { slug: "bestellung", name: "Bestellung" },
      { slug: "rueckgabe", name: "Rückgabe" },
    ],
  },
  {
    slug: "elektro",
    name: "Elektro & Technik",
    area: "beruf",
    children: [
      { slug: "elektro-werkzeug", name: "Werkzeug" },
      { slug: "kabel", name: "Kabel" },
      { slug: "schaltschrank", name: "Schaltschrank" },
      { slug: "elektro-sicherheit", name: "Sicherheit" },
      { slug: "elektro-anweisungen", name: "Arbeitsanweisungen" },
      { slug: "fehler-melden", name: "Fehler melden" },
      { slug: "elektro-baustelle", name: "Baustelle" },
      { slug: "montage", name: "Montage" },
    ],
  },
  {
    slug: "buero",
    name: "Büro",
    area: "beruf",
    children: [
      { slug: "telefon", name: "Telefon" },
      { slug: "email", name: "E-Mail" },
      { slug: "buero-meeting", name: "Meeting" },
      { slug: "buero-kollegen", name: "Kollegen" },
      { slug: "buero-chef", name: "Chef" },
      { slug: "buero-termin", name: "Termin" },
      { slug: "kunden", name: "Kunden" },
      { slug: "dokumente", name: "Dokumente" },
    ],
  },
  {
    slug: "logistik",
    name: "Logistik & Lager",
    area: "beruf",
    children: [
      { slug: "lieferung", name: "Lieferung" },
      { slug: "lager", name: "Lager" },
      { slug: "paket", name: "Paket" },
      { slug: "versand", name: "Versand" },
      { slug: "logistik-bestellung", name: "Bestellung" },
      { slug: "gabelstapler", name: "Gabelstapler" },
      { slug: "logistik-anweisung", name: "Arbeitsanweisung" },
    ],
  },
  {
    slug: "reinigung",
    name: "Reinigung",
    area: "beruf",
    children: [
      { slug: "reinigungsmittel", name: "Reinigungsmittel" },
      { slug: "raeume", name: "Räume" },
      { slug: "arbeitsplan", name: "Arbeitsplan" },
      { slug: "reinigung-hygiene", name: "Hygiene" },
      { slug: "meldungen", name: "Meldungen" },
      { slug: "reinigung-auftraege", name: "Arbeitsaufträge" },
    ],
  },
  {
    slug: "bewerbung",
    name: "Job & Bewerbung",
    area: "beruf",
    children: [
      { slug: "bewerbung-schreiben", name: "Bewerbung schreiben" },
      { slug: "lebenslauf", name: "Lebenslauf" },
      { slug: "vorstellungsgespraech", name: "Bewerbungsgespräch" },
      { slug: "job-deutsch", name: "Job-Deutsch" },
    ],
  },
];

export const ALLTAG_CATEGORIES = CATEGORIES.filter((c) => c.area === "alltag");
export const BERUF_CATEGORIES = CATEGORIES.filter((c) => c.area === "beruf");

export function categoryName(slug: string | null | undefined): string {
  if (!slug) return "";
  for (const c of CATEGORIES) {
    if (c.slug === slug) return c.name;
    const child = c.children.find((x) => x.slug === slug);
    if (child) return child.name;
  }
  return slug;
}

export function categoryArea(slug: string | null | undefined): "alltag" | "beruf" | null {
  if (!slug) return null;
  const found = CATEGORIES.find((c) => c.slug === slug || c.children.some((x) => x.slug === slug));
  return found?.area ?? null;
}
