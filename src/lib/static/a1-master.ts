type CompactLesson = {
  t: string;
  d: string;
  s: [string, string | null][];
  v: [string, string, string, string][];
  p: [string, string][];
  dt1: string;
  dt2: string;
  d1: [string, string][];
  d2: [string, string][];
  gn: [string, string, string[]][];
  q: {
    grammar: [string, string, string, string][];
    practice: [string, string, string, string][];
    dialog_builder: string[][];
    test: [string, string, string, string][];
  };
};

type CompactMaster = Record<string, Record<string, CompactLesson>>;

let masterPromise: Promise<CompactMaster> | null = null;

async function loadMaster(): Promise<CompactMaster> {
  if (!masterPromise) {
    masterPromise = (async () => {
      const response = await fetch('/a1-master/master.json.gz');
      if (!response.ok) throw new Error(`A1 master bundle konnte nicht geladen werden (${response.status})`);
      if (!response.body) throw new Error('A1 master bundle enthält keinen Response-Body');
      if (typeof DecompressionStream === 'undefined') throw new Error('GZIP-Dekompression wird in diesem Browser nicht unterstützt');
      const stream = response.body.pipeThrough(new DecompressionStream('gzip'));
      const text = await new Response(stream).text();
      return JSON.parse(text) as CompactMaster;
    })();
  }
  return masterPromise;
}

function splitArticle(raw: string) {
  const match = raw.match(/^(der|die|das)\s+(.+)$/i);
  return match ? { article: match[1].toLowerCase(), term: match[2] } : { article: '', term: raw };
}

function answers(slug: string, section: string, qIndex: number, row: string[]) {
  return row.slice(1, 4).map((text, index) => ({
    id: `${slug}-${section}-${qIndex + 1}-a${index + 1}`,
    position: index + 1,
    text,
    is_correct: index === 0,
  }));
}

export async function getA1MasterOverride(category: string | null | undefined, slug: string) {
  if (!category) return null;
  const master = await loadMaster();
  const compact = master[category]?.[slug];
  if (!compact) return null;

  const scenes = compact.s.map(([german_text, hint], index) => ({
    id: `${slug}-s${index + 1}`,
    position: index + 1,
    german_text,
    translations: {},
    hint,
  }));

  const vocab = compact.v.map(([raw, plural, word_class, example], index) => {
    const { article, term } = splitArticle(raw);
    return {
      id: `${slug}-v${index + 1}`,
      position: index + 1,
      term,
      word_class,
      article,
      plural,
      example,
      example_translations: {},
      collocations: [],
      translations: {},
    };
  });

  const dialog = [
    ...compact.d1.map(([speaker, german_text], index) => ({
      id: `${slug}-d1-${index + 1}`,
      position: index + 1,
      dialog_index: 1,
      dialog_title: compact.dt1,
      speaker_role: speaker,
      speaker,
      german_text,
      translations: {},
    })),
    ...compact.d2.map(([speaker, german_text], index) => ({
      id: `${slug}-d2-${index + 1}`,
      position: compact.d1.length + index + 1,
      dialog_index: 2,
      dialog_title: compact.dt2,
      speaker_role: speaker,
      speaker,
      german_text,
      translations: {},
    })),
  ];

  const questions: any[] = [];
  compact.q.grammar.forEach((row, index) => questions.push({
    id: `${slug}-grammar-${index + 1}`,
    position: 1000 + index,
    kind: 'single_choice',
    prompt: row[0],
    explanation: '',
    section: 'grammar',
    data: {},
    quiz_answers: answers(slug, 'grammar', index, row),
  }));
  compact.q.practice.forEach((row, index) => questions.push({
    id: `${slug}-practice-${index + 1}`,
    position: 2000 + index,
    kind: 'single_choice',
    prompt: row[0],
    explanation: '',
    section: 'practice',
    data: {},
    quiz_answers: answers(slug, 'practice', index, row),
  }));
  compact.q.dialog_builder.forEach((items, index) => questions.push({
    id: `${slug}-builder-${index + 1}`,
    position: 3000 + index,
    kind: 'dialog_order',
    prompt: 'Baue den Dialog in die richtige Reihenfolge.',
    explanation: '',
    section: 'dialog_builder',
    data: { items },
    quiz_answers: [],
  }));
  compact.q.test.forEach((row, index) => questions.push({
    id: `${slug}-test-${index + 1}`,
    position: 4000 + index,
    kind: 'single_choice',
    prompt: row[0],
    explanation: '',
    section: 'test',
    data: {},
    quiz_answers: answers(slug, 'test', index, row),
  }));

  return {
    lesson: {
      title: compact.t,
      description: compact.d,
      grammar_topics: compact.gn.map(([title]) => title),
      grammar_notes: compact.gn.map(([title, explanation, examples]) => ({ title, explanation, examples })),
      place_items: compact.p.map(([prompt, german_text]) => ({ german_text, preposition: '', translations: {}, prompt })),
    },
    scenes,
    vocab,
    dialog,
    questions,
  };
}
