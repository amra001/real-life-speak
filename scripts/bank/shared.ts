/**
 * Gemeinsame Typen und Bausteine für die drei Bank-Lektionen (A1/A2/B1).
 * Die Inhalte werden mit scripts/seed-bank.ts reproduzierbar in die Datenbank geschrieben.
 */

export type VocabEntry = {
  term: string;
  article?: string;
  plural?: string;
  word_class: string;
  example: string;
};

export type SceneEntry = { text: string; hint: string };

export type PlaceEntry = { german_text: string; preposition: string; sentence: string };

export type GrammarNote = { title: string; explanation: string; examples: string[] };

export type DialogDef = { title: string; lines: { speaker: string; role: string; text: string }[] };

export type QDef = {
  section: "places" | "grammar" | "practice" | "dialog_builder" | "test";
  kind: string;
  prompt: string;
  explanation: string;
  data?: Record<string, unknown> | null;
  answers?: { text: string; correct: boolean }[];
};

export type LevelContent = {
  slug: string;
  title: string;
  description: string;
  scenes: SceneEntry[];
  vocab: VocabEntry[];
  places: PlaceEntry[];
  grammar: GrammarNote[];
  dialogs: DialogDef[];
  questions: QDef[];
};

/** Single Choice: erste Option ist die richtige Antwort. */
export const sc = (section: QDef["section"], prompt: string, options: string[], explanation: string): QDef => ({
  section,
  kind: "single_choice",
  prompt,
  explanation,
  data: null,
  answers: options.map((text, i) => ({ text, correct: i === 0 })),
});

export const tf = (section: QDef["section"], prompt: string, correct: boolean, explanation: string): QDef => ({
  section,
  kind: "true_false",
  prompt,
  explanation,
  data: null,
  answers: [
    { text: "Richtig", correct },
    { text: "Falsch", correct: !correct },
  ],
});

/** Lückentext mit Auswahlchips. */
export const gap = (section: QDef["section"], prompt: string, solution: string, options: string[], explanation: string): QDef => ({
  section,
  kind: "gap",
  prompt,
  explanation,
  data: { options },
  answers: [{ text: solution, correct: true }],
});

export const order = (section: QDef["section"], prompt: string, items: string[], explanation: string): QDef => ({
  section,
  kind: "order",
  prompt,
  explanation,
  data: { items },
  answers: [],
});

export const sentence = (section: QDef["section"], prompt: string, words: string[], explanation: string): QDef => ({
  section,
  kind: "sentence_order",
  prompt,
  explanation,
  data: { words },
  answers: [],
});

export const dialogOrder = (section: QDef["section"], prompt: string, items: string[], explanation: string): QDef => ({
  section,
  kind: "dialog_order",
  prompt,
  explanation,
  data: { items },
  answers: [],
});

export const match = (section: QDef["section"], prompt: string, pairs: [string, string][], explanation: string): QDef => ({
  section,
  kind: "match",
  prompt,
  explanation,
  data: { pairs: pairs.map(([left, right]) => ({ left, right })) },
  answers: [],
});

const ARTICLES = ["der", "die", "das"];

const nouns = (vocab: VocabEntry[]) => vocab.filter((v) => v.article && v.word_class === "Nomen");

/** Aus dem Wortschatz abgeleitete, inhaltlich echte Testfragen (Artikel, Plural, Beispielsatz-Lücke). */
export function derivedQuestions(vocab: VocabEntry[], section: QDef["section"], counts: { article: number; plural: number; gap: number }): QDef[] {
  const list = nouns(vocab);
  const out: QDef[] = [];

  for (const v of list.slice(0, counts.article)) {
    const options = [v.article!, ...ARTICLES.filter((a) => a !== v.article)];
    out.push(sc(section, `Welcher Artikel gehört zu „${v.term}“?`, options, `Richtig ist „${v.article} ${v.term}“. Beispiel: ${v.example}`));
  }

  const pluralPool = list.filter((v) => v.plural && v.plural !== "—").slice(counts.article, counts.article + counts.plural);
  for (const v of pluralPool) {
    const wrong = [`${v.term}s`, `${v.term}en`, `${v.term}er`].filter((w) => w !== v.plural);
    out.push(sc(section, `Wie lautet der Plural von „${v.article} ${v.term}“?`, [v.plural!, wrong[0]!, wrong[1]!], `Der Plural lautet „die ${v.plural}“.`));
  }

  const gapPool = list.filter((v) => v.example.includes(v.term)).slice(-counts.gap);
  for (const v of gapPool) {
    const distractors = list.filter((x) => x.term !== v.term).slice(0, 2).map((x) => x.term);
    out.push(
      gap(
        section,
        `Ergänze das passende Wort: ${v.example.replace(v.term, "___")}`,
        v.term,
        [v.term, ...distractors].sort(),
        `Vollständig heißt der Satz: ${v.example}`,
      ),
    );
  }
  return out;
}

/** Aus Beispielsätzen abgeleitete Satzbau-Übungen. */
export function derivedSentenceOrder(vocab: VocabEntry[], section: QDef["section"], count: number): QDef[] {
  return nouns(vocab)
    .filter((v) => v.example.split(" ").length >= 5 && v.example.split(" ").length <= 10)
    .slice(0, count)
    .map((v) =>
      sentence(section, "Bringe die Wörter in die richtige Satzstellung.", v.example.replace(/[.?!]$/, "").split(" "), `Richtig: ${v.example} Das konjugierte Verb steht im Aussagesatz auf Position 2.`),
    );
}
