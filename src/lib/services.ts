export type ServicePage = {
  slug: string;
  title: string;
  headline: string;
  intro: string;
  bullets: string[];
  ctaLabel: string;
  productSlug?: string;
  metaDescription: string;
};

export const SERVICE_PAGES: ServicePage[] = [
  {
    slug: "bewerbung-schreiben",
    title: "Bewerbung schreiben",
    headline: "Ein Bewerbungsschreiben, das gelesen wird.",
    intro:
      "Wir helfen bei professionellen Bewerbungsschreiben in korrektem Deutsch – klar strukturiert und auf die Stelle abgestimmt.",
    bullets: [
      "Individuelles Anschreiben statt Textbaustein",
      "Korrekte Grammatik und passender Ton",
      "Deine Erfahrung wird verständlich dargestellt",
      "Auf Wunsch für Deutschland oder Österreich",
    ],
    ctaLabel: "Bewerbung anfragen",
    productSlug: "bewerbungsschreiben",
    metaDescription:
      "Professionelles Bewerbungsschreiben auf Deutsch erstellen lassen – individuell, korrekt und auf deine Zielstelle abgestimmt.",
  },
  {
    slug: "lebenslauf",
    title: "Lebenslauf",
    headline: "Professionelle Lebensläufe erstellen und optimieren.",
    intro:
      "Ein moderner, übersichtlicher Lebenslauf im deutschen Standard – neu erstellt oder aus deinen bestehenden Unterlagen optimiert.",
    bullets: [
      "Modernes, seriöses Layout",
      "Deutsche Standards für Aufbau und Angaben",
      "Ausländische Abschlüsse verständlich beschrieben",
      "Fertig als PDF zum Versenden",
    ],
    ctaLabel: "Lebenslauf erstellen lassen",
    productSlug: "lebenslauf",
    metaDescription:
      "Lebenslauf auf Deutsch erstellen oder optimieren lassen – modernes Layout, deutsche Standards, fertig als PDF.",
  },
  {
    slug: "unterlagen-pruefen",
    title: "Bewerbungsunterlagen prüfen",
    headline: "Deine Unterlagen im professionellen Check.",
    intro:
      "Du hast bereits Lebenslauf und Anschreiben? Wir prüfen Sprache, Struktur und Wirkung und geben konkretes Feedback.",
    bullets: [
      "Korrektur von Grammatik und Ausdruck",
      "Feedback zu Aufbau und Reihenfolge",
      "Hinweise auf fehlende Angaben",
      "Konkrete Verbesserungsvorschläge",
    ],
    ctaLabel: "Unterlagen prüfen lassen",
    productSlug: "unterlagen-pruefen",
    metaDescription:
      "Bewerbungsunterlagen prüfen lassen: Korrektur, Feedback zu Struktur und Wirkung sowie konkrete Verbesserungsvorschläge.",
  },
  {
    slug: "bewerbungsgespraech",
    title: "Bewerbungsgespräch",
    headline: "Sicher sprechen im Vorstellungsgespräch.",
    intro:
      "Vorbereitung auf Bewerbungsgespräche mit Deutschtraining speziell für Interviews: typische Fragen, gute Antworten, ruhige Stimme.",
    bullets: [
      "Übungsgespräch mit realistischen Fragen",
      "Formulierungen für Stärken, Lücken und Gehalt",
      "Aussprache- und Verständlichkeitstraining",
      "Persönliches Feedback nach dem Gespräch",
    ],
    ctaLabel: "Vorbereitung anfragen",
    productSlug: "interview-vorbereitung",
    metaDescription:
      "Vorbereitung auf das Bewerbungsgespräch auf Deutsch: Übungsgespräch, typische Fragen, Formulierungshilfen und Feedback.",
  },
  {
    slug: "job-deutsch",
    title: "Job-Deutsch",
    headline: "Typische Sätze im Berufsleben.",
    intro:
      "Die Sätze, die du im Arbeitsalltag täglich brauchst: nachfragen, melden, absagen, um Hilfe bitten, Übergabe machen.",
    bullets: [
      "Höflich nachfragen, wenn du etwas nicht verstehst",
      "Krankmeldung und Urlaubsantrag",
      "Probleme und Fehler richtig melden",
      "Small Talk mit Kollegen und Chef",
    ],
    ctaLabel: "Business-Deutsch anfragen",
    productSlug: "business-coaching",
    metaDescription:
      "Job-Deutsch lernen: typische Sätze für Arbeitsalltag, Krankmeldung, Nachfragen, Fehler melden und Gespräche mit dem Chef.",
  },
];

export function servicePage(slug: string): ServicePage | undefined {
  return SERVICE_PAGES.find((s) => s.slug === slug);
}
