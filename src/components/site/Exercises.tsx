import { useEffect, useMemo, useState } from "react";
import { ArrowDown, ArrowUp, Check, RotateCcw, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { lessonImage } from "@/lib/lesson-images";
import type { Question } from "@/lib/data";
import type { TranslationLang } from "@/lib/taxonomy";

export type NormalizedKind =
  | "single_choice"
  | "multi_choice"
  | "true_false"
  | "gap"
  | "gap_select"
  | "sentence_order"
  | "order"
  | "dialog_order"
  | "match"
  | "image_choice";

export const KIND_LABEL: Record<NormalizedKind, string> = {
  single_choice: "Single Choice",
  multi_choice: "Multiple Choice",
  true_false: "Richtig oder falsch",
  gap: "Lückentext",
  gap_select: "Lückentext (Auswahl)",
  sentence_order: "Satzbausteine",
  order: "Reihenfolge",
  dialog_order: "Dialog-Reihenfolge",
  match: "Zuordnung",
  image_choice: "Bildfrage",
};

type Answer = { id: string; position: number; text: string; is_correct: boolean };
export type NormQuestion = {
  id: string;
  kind: NormalizedKind;
  prompt: string;
  explanation: string;
  answers: Answer[];
  items: string[];
  pairs: { left: string; right: string }[];
  options: string[];
  imageKey: string | null;
  solutionText: string;
  helpText: string | null;
};

type State = {
  choice?: string;
  multi?: string[];
  text?: string;
  order?: string[];
  match?: Record<string, string>;
};

const HELP_LANGUAGE_LABELS: Partial<Record<TranslationLang, string>> = {
  bks: "Bosnisch / Kroatisch / Serbisch",
  tr: "Türkisch",
  uk: "Ukrainisch",
  ro: "Rumänisch",
  ar: "Arabisch",
};

const BAKERY_HELP_OVERRIDES: Record<string, Partial<Record<TranslationLang, string>>> = {
  "bak-g2": {
    bks: "Pitanje: Koji član ide uz riječ „Brezel“? „Brezel“ je ženskog roda: die Brezel.",
    tr: "Soru: „Brezel“ kelimesinin artikeli nedir? „Brezel“ dişildir: die Brezel.",
    uk: "Питання: Який артикль має слово „Brezel“? Це слово жіночого роду: die Brezel.",
    ro: "Întrebare: Ce articol are cuvântul „Brezel“? Este feminin: die Brezel.",
    ar: "السؤال: ما أداة تعريف كلمة Brezel؟ الكلمة مؤنثة: die Brezel.",
  },
  "bak-g4": {
    bks: "Pitanje: „Uzimam ___ kolač.“ „Kuchen“ je muškog roda. U akuzativu: der Kuchen → den Kuchen.",
    tr: "Soru: „___ keki alıyorum.“ „Kuchen“ erildir. Akkusativ: der Kuchen → den Kuchen.",
    uk: "Питання: «Я беру ___ пиріг». „Kuchen“ чоловічого роду. У знахідному відмінку: der Kuchen → den Kuchen.",
    ro: "Întrebare: „Iau ___ prăjitură.“ „Kuchen“ este masculin. La acuzativ: der Kuchen → den Kuchen.",
    ar: "السؤال: «آخذ ___ كعكة». كلمة Kuchen مذكّرة. في حالة المفعول: der Kuchen → den Kuchen.",
  },
  "bak-g5": {
    bks: "Pitanje: „Htio/Htjela bih ___ perecu.“ „Brezel“ je ženskog roda: die Brezel → eine Brezel.",
    tr: "Soru: „Bir pretzel istiyorum.“ „Brezel“ dişildir: die Brezel → eine Brezel.",
    uk: "Питання: «Я хотів/хотіла б ___ крендель». „Brezel“ жіночого роду: die Brezel → eine Brezel.",
    ro: "Întrebare: „Aș dori ___ covrig.“ „Brezel“ este feminin: die Brezel → eine Brezel.",
    ar: "السؤال: «أود ___ بريتزل». كلمة Brezel مؤنثة: die Brezel → eine Brezel.",
  },
  "bak-g6": {
    bks: "Pitanje: „Uzet ću ___ miješani hljeb.“ „Mischbrot“ je srednjeg roda: das Mischbrot → ein Mischbrot.",
    tr: "Soru: „___ karışık ekmek alacağım.“ „Mischbrot“ nötrdür: das Mischbrot → ein Mischbrot.",
    uk: "Питання: «Я візьму ___ змішаний хліб». „Mischbrot“ середнього роду: das Mischbrot → ein Mischbrot.",
    ro: "Întrebare: „Iau ___ pâine mixtă.“ „Mischbrot“ este neutru: das Mischbrot → ein Mischbrot.",
    ar: "السؤال: «سآخذ ___ خبزًا مشكّلًا». كلمة Mischbrot محايدة: das Mischbrot → ein Mischbrot.",
  },
};

function shuffle<T>(arr: T[], seed: string): T[] {
  const out = [...arr];
  let h = 2166136261;
  for (let i = 0; i < seed.length; i++) h = Math.imul(h ^ seed.charCodeAt(i), 16777619) >>> 0;
  for (let i = out.length - 1; i > 0; i--) {
    h = Math.imul(h ^ (i + 1), 2246822519) >>> 0;
    const j = h % (i + 1);
    [out[i], out[j]] = [out[j] as T, out[i] as T];
  }
  if (out.length > 2 && out.every((v, i) => v === arr[i])) out.push(out.shift() as T);
  return out;
}

export function normalizeQuestion(q: Question, lang: TranslationLang): NormQuestion {
  const data = (q.data ?? {}) as Record<string, unknown>;
  const answers = [...(q.quiz_answers ?? [])].sort((a, b) => a.position - b.position);
  const rawKind = (q.kind || "single_choice").toLowerCase();
  const items = Array.isArray(data['items']) ? (data['items'] as string[]) : [];
  const words = Array.isArray(data['words']) ? (data['words'] as string[]) : [];
  const options = Array.isArray(data['options']) ? (data['options'] as string[]) : [];
  const rawPairs = Array.isArray(data['pairs']) ? (data['pairs'] as unknown[]) : [];
  const pairs = rawPairs
    .map((p) => {
      const o = p as { left?: string; right?: string; translations?: Record<string, string> };
      const right = o.translations && lang !== "none" ? (o.translations[lang] ?? o.right ?? "") : (o.right ?? "");
      return { left: o.left ?? "", right };
    })
    .filter((p) => p.left && p.right);
  const imageKey = typeof data['image_key'] === "string" ? (data['image_key'] as string) : null;
  const helpMap = data['help'] && typeof data['help'] === "object" ? (data['help'] as Record<string, string>) : null;
  const overrideHelp = lang !== "none" ? BAKERY_HELP_OVERRIDES[q.id]?.[lang] : null;
  const helpText = lang !== "none" ? (overrideHelp ?? (helpMap ? (helpMap[lang] ?? null) : null)) : null;
  const correctCount = answers.filter((a) => a.is_correct).length;

  let kind: NormalizedKind = "single_choice";
  if (["multi_choice", "multi_select", "multiple_choice"].includes(rawKind)) kind = correctCount > 1 ? "multi_choice" : "single_choice";
  else if (rawKind === "true_false") kind = "true_false";
  else if (["gap", "complete", "preposition", "gap_select"].includes(rawKind)) kind = options.length >= 2 ? "gap_select" : "gap";
  else if (rawKind === "sentence_order") kind = words.length >= 3 ? "sentence_order" : "single_choice";
  else if (rawKind === "dialog_order") kind = items.length >= 3 ? "dialog_order" : "single_choice";
  else if (rawKind === "order") kind = items.length >= 3 ? "order" : "single_choice";
  else if (rawKind === "match") kind = pairs.length >= 2 ? "match" : "single_choice";
  else if (["image_choice", "image_question"].includes(rawKind)) kind = imageKey ? "image_choice" : "single_choice";

  return {
    id: q.id,
    kind,
    prompt: q.prompt,
    explanation: q.explanation,
    answers,
    items: kind === "sentence_order" ? words : items,
    pairs,
    options,
    imageKey,
    solutionText: answers.find((a) => a.is_correct)?.text ?? "",
    helpText,
  };
}

function isSolved(q: NormQuestion, s: State): boolean {
  if (q.kind === "multi_choice") {
    const picked = new Set(s.multi ?? []);
    const correct = q.answers.filter((a) => a.is_correct).map((a) => a.id);
    return correct.length === picked.size && correct.every((id) => picked.has(id));
  }
  if (q.kind === "gap" || q.kind === "gap_select")
    return !!q.solutionText && (s.text ?? "").trim().toLowerCase() === q.solutionText.trim().toLowerCase();
  if (["sentence_order", "order", "dialog_order"].includes(q.kind))
    return (s.order ?? []).join("|") === q.items.join("|");
  if (q.kind === "match") return q.pairs.every((p) => (s.match ?? {})[p.left] === p.right);
  return !!q.answers.find((a) => a.id === s.choice)?.is_correct;
}

function isAnswered(q: NormQuestion, s: State): boolean {
  if (q.kind === "multi_choice") return (s.multi ?? []).length > 0;
  if (q.kind === "gap" || q.kind === "gap_select") return !!(s.text ?? "").trim();
  if (["sentence_order", "order", "dialog_order"].includes(q.kind)) return (s.order ?? []).length === q.items.length;
  if (q.kind === "match") return Object.keys(s.match ?? {}).length === q.pairs.length;
  return !!s.choice;
}

function OrderList({ values, onChange, disabled }: { values: string[]; onChange: (v: string[]) => void; disabled: boolean }) {
  const move = (i: number, dir: -1 | 1) => {
    const j = i + dir;
    if (j < 0 || j >= values.length) return;
    const next = [...values];
    [next[i], next[j]] = [next[j] as string, next[i] as string];
    onChange(next);
  };
  return (
    <ul className="mt-4 space-y-2">
      {values.map((v, i) => (
        <li
          key={`${v}-${i}`}
          draggable={!disabled}
          onDragStart={(e) => e.dataTransfer.setData("text/plain", String(i))}
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => {
            e.preventDefault();
            if (disabled) return;
            const from = Number(e.dataTransfer.getData("text/plain"));
            if (Number.isNaN(from) || from === i) return;
            const next = [...values];
            const [moved] = next.splice(from, 1);
            next.splice(i, 0, moved as string);
            onChange(next);
          }}
          className="flex items-center gap-3 rounded-xl border border-border bg-card px-3 py-3 text-sm"
        >
          <span className="w-5 shrink-0 text-xs text-muted-foreground">{i + 1}.</span>
          <span className="flex-1">{v}</span>
          <div className="flex gap-1">
            <Button type="button" variant="outline" size="icon" className="h-7 w-7" disabled={disabled || i === 0} onClick={() => move(i, -1)} aria-label="nach oben"><ArrowUp className="h-3.5 w-3.5" /></Button>
            <Button type="button" variant="outline" size="icon" className="h-7 w-7" disabled={disabled || i === values.length - 1} onClick={() => move(i, 1)} aria-label="nach unten"><ArrowDown className="h-3.5 w-3.5" /></Button>
          </div>
        </li>
      ))}
    </ul>
  );
}

function ChipBuilder({ words, value, onChange, disabled, seed }: { words: string[]; value: string[]; onChange: (v: string[]) => void; disabled: boolean; seed: string }) {
  const shuffledWords = useMemo(() => shuffle(words, `${seed}-chips`), [words, seed]);
  const pool = useMemo(() => {
    const rest = [...shuffledWords];
    for (const v of value) {
      const idx = rest.indexOf(v);
      if (idx >= 0) rest.splice(idx, 1);
    }
    return rest;
  }, [shuffledWords, value]);
  const isDialogue = words.some((w) => w.length > 45 || w.includes(":"));

  return (
    <div className="mt-4 space-y-3">
      <div className="min-h-14 rounded-xl border border-dashed border-border p-3">
        <div className={isDialogue ? "space-y-2" : "flex flex-wrap gap-2"}>
          {value.map((w, i) => (
            <button
              key={`${w}-${i}`}
              type="button"
              disabled={disabled}
              onClick={() => onChange(value.filter((_, j) => j !== i))}
              className={isDialogue ? "block w-full rounded-xl bg-foreground px-4 py-3 text-left text-sm text-background" : "rounded-full bg-foreground px-3 py-1.5 text-sm text-background"}
            >
              {isDialogue && <span className="mr-2 font-semibold">{i + 1}.</span>}{w}
            </button>
          ))}
          {!value.length && <span className="text-sm text-muted-foreground">{isDialogue ? "Klicke die Gesprächsteile unten in der richtigen Reihenfolge an …" : "Klicke die Wörter in der richtigen Reihenfolge an …"}</span>}
        </div>
      </div>
      <div className={isDialogue ? "grid gap-2" : "flex flex-wrap gap-2"}>
        {pool.map((w, i) => (
          <button
            key={`${w}-p-${i}`}
            type="button"
            disabled={disabled}
            onClick={() => onChange([...value, w])}
            className={isDialogue ? "block w-full rounded-xl border border-border px-4 py-3 text-left text-sm hover:bg-muted" : "rounded-full border border-border px-3 py-1.5 text-sm hover:bg-muted"}
          >
            {w}
          </button>
        ))}
      </div>
    </div>
  );
}

function MatchGrid({ pairs, value, onChange, disabled, seed }: { pairs: { left: string; right: string }[]; value: Record<string, string>; onChange: (v: Record<string, string>) => void; disabled: boolean; seed: string }) {
  const rights = useMemo(() => shuffle(pairs.map((p) => p.right), seed), [pairs, seed]);
  const [active, setActive] = useState<string | null>(null);
  return (
    <div className="mt-4 grid gap-3 sm:grid-cols-2">
      <div className="space-y-2">{pairs.map((p) => <button key={p.left} type="button" disabled={disabled} onClick={() => setActive(active === p.left ? null : p.left)} className={`block w-full rounded-xl border px-3 py-2 text-left text-sm ${active === p.left ? "border-foreground" : "border-border"}`}><span className="font-medium">{p.left}</span>{value[p.left] && <span className="mt-1 block text-xs text-muted-foreground">→ {value[p.left]}</span>}</button>)}</div>
      <div className="space-y-2">{rights.map((r) => <button key={r} type="button" disabled={disabled || !active} onClick={() => { if (!active) return; onChange({ ...value, [active]: r }); setActive(null); }} className="block w-full rounded-xl border border-border px-3 py-2 text-left text-sm hover:bg-muted" dir="auto">{r}</button>)}</div>
    </div>
  );
}

export function Exercises({ questions, lang, title, onFinish }: { questions: Question[]; lang: TranslationLang; title?: string; onFinish?: (score: number, total: number) => void }) {
  const norm = useMemo(() => questions.map((q) => normalizeQuestion(q, lang)), [questions, lang]);
  const makeInitial = () => {
    const s: Record<string, State> = {};
    for (const q of norm) {
      if (q.kind === "order") s[q.id] = { order: shuffle(q.items, `${q.id}-order`) };
      else if (q.kind === "dialog_order" || q.kind === "sentence_order") s[q.id] = { order: [] };
      else s[q.id] = {};
    }
    return s;
  };
  const [state, setState] = useState<Record<string, State>>(() => makeInitial());
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [done, setDone] = useState(false);

  const signature = norm.map((q) => q.id).join("|");
  useEffect(() => {
    setState(makeInitial());
    setChecked({});
    setDone(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [signature, lang]);

  if (!norm.length) return <p className="text-muted-foreground">Keine Übungen hinterlegt.</p>;
  const set = (id: string, patch: State) => setState((p) => ({ ...p, [id]: { ...(p[id] ?? {}), ...patch } }));
  const score = norm.filter((q) => isSolved(q, state[q.id] ?? {})).length;
  const allChecked = norm.every((q) => checked[q.id]);

  return (
    <div className="space-y-5">
      {title && <h3 className="font-serif text-xl font-semibold">{title}</h3>}
      {norm.map((q, i) => {
        const s = state[q.id] ?? {};
        const isChecked = !!checked[q.id];
        const solved = isSolved(q, s);
        const helpLabel = HELP_LANGUAGE_LABELS[lang] ? `Hilfe auf ${HELP_LANGUAGE_LABELS[lang]} anzeigen` : "Hilfe in deiner Sprache anzeigen";
        return (
          <div key={q.id} className="rounded-2xl border border-border bg-card p-5">
            <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground">
              <span>Aufgabe {i + 1}</span>
              <Badge variant="outline" className="font-normal normal-case">{KIND_LABEL[q.kind]}</Badge>
              {q.kind === "multi_choice" && <span className="normal-case tracking-normal">Mehrere Antworten richtig</span>}
            </div>
            <div className="mt-2 font-medium">{q.prompt}</div>

            {q.helpText && (
              <details className="mt-3 rounded-xl border border-border bg-muted/30 px-4 py-3 text-sm">
                <summary className="cursor-pointer font-medium">{helpLabel}</summary>
                <div className="mt-2 text-muted-foreground" dir="auto">{q.helpText}</div>
              </details>
            )}

            {q.kind === "image_choice" && q.imageKey && (
              <div className="mt-4 overflow-hidden rounded-xl border border-border">
                <img src={lessonImage(q.imageKey)} alt={q.prompt} className="aspect-video w-full object-cover" loading="lazy" />
                <div className="border-t border-border bg-muted/40 px-3 py-2 text-xs text-muted-foreground">Schau zuerst auf das Bild und beantworte dann die Frage.</div>
              </div>
            )}

            {(q.kind === "single_choice" || q.kind === "true_false" || q.kind === "image_choice") && (
              <div className={q.kind === "true_false" ? "mt-4 flex gap-3" : "mt-4 space-y-2"}>
                {q.answers.map((a) => {
                  const selected = s.choice === a.id;
                  const cls = isChecked ? (a.is_correct ? "border-success bg-success/10" : selected ? "border-destructive bg-destructive/10" : "border-border") : selected ? "border-foreground" : "border-border";
                  return <button key={a.id} type="button" disabled={isChecked} onClick={() => set(q.id, { choice: a.id })} className={`rounded-xl border px-4 py-3 text-left text-sm ${cls} ${q.kind === "true_false" ? "flex-1 text-center font-medium" : "block w-full"}`}>{a.text}</button>;
                })}
              </div>
            )}

            {q.kind === "multi_choice" && <div className="mt-4 space-y-2">{q.answers.map((a) => {
              const picked = (s.multi ?? []).includes(a.id);
              const cls = isChecked ? (a.is_correct ? "border-success bg-success/10" : picked ? "border-destructive bg-destructive/10" : "border-border") : picked ? "border-foreground" : "border-border";
              return <label key={a.id} className={`flex w-full cursor-pointer items-center gap-3 rounded-xl border px-4 py-3 text-sm ${cls}`}><Checkbox checked={picked} disabled={isChecked} onCheckedChange={(v) => set(q.id, { multi: v ? [...(s.multi ?? []), a.id] : (s.multi ?? []).filter((x) => x !== a.id) })} /><span>{a.text}</span></label>;
            })}</div>}

            {q.kind === "gap" && <Input className="mt-4" placeholder="Antwort eingeben" value={s.text ?? ""} disabled={isChecked} onChange={(e) => set(q.id, { text: e.target.value })} />}
            {q.kind === "gap_select" && <div className="mt-4 flex flex-wrap gap-2">{q.options.map((o) => <button key={o} type="button" disabled={isChecked} onClick={() => set(q.id, { text: o })} className={`rounded-full border px-4 py-2 text-sm ${s.text === o ? "border-foreground bg-foreground text-background" : "border-border hover:bg-muted"}`}>{o}</button>)}</div>}
            {q.kind === "sentence_order" && <ChipBuilder words={q.items} value={s.order ?? []} disabled={isChecked} seed={q.id} onChange={(v) => set(q.id, { order: v })} />}
            {q.kind === "dialog_order" && <ChipBuilder words={q.items} value={s.order ?? []} disabled={isChecked} seed={`${q.id}-dialog`} onChange={(v) => set(q.id, { order: v })} />}
            {q.kind === "order" && <OrderList values={s.order ?? []} disabled={isChecked} onChange={(v) => set(q.id, { order: v })} />}
            {q.kind === "match" && <MatchGrid pairs={q.pairs} seed={q.id} value={s.match ?? {}} disabled={isChecked} onChange={(v) => set(q.id, { match: v })} />}

            <div className="mt-4 flex flex-wrap items-center gap-3">
              {!isChecked ? <Button type="button" variant="outline" size="sm" disabled={!isAnswered(q, s)} onClick={() => setChecked((p) => ({ ...p, [q.id]: true }))}>Prüfen</Button> : <><span className={`inline-flex items-center gap-1 text-sm font-medium ${solved ? "text-success" : "text-destructive"}`}>{solved ? <Check className="h-4 w-4" /> : <X className="h-4 w-4" />}{solved ? "Richtig" : "Noch nicht ganz."}</span><Button type="button" variant="ghost" size="sm" onClick={() => { setChecked((p) => ({ ...p, [q.id]: false })); const qn = norm.find((x) => x.id === q.id); if (!qn) return; set(q.id, qn.kind === "order" ? { order: shuffle(qn.items, `${qn.id}-retry-${Date.now()}`) } : qn.kind === "dialog_order" || qn.kind === "sentence_order" ? { order: [] } : {}); }}><RotateCcw className="mr-1 h-3.5 w-3.5" />Nochmal</Button></>}
            </div>

            {isChecked && <div className="mt-3 space-y-1 text-sm text-muted-foreground">{!solved && (q.kind === "gap" || q.kind === "gap_select") && <p>Richtige Antwort: {q.solutionText}</p>}{!solved && ["order", "dialog_order", "sentence_order"].includes(q.kind) && <p>Richtige Reihenfolge: {q.items.join(" · ")}</p>}{!solved && q.kind === "match" && <p>{q.pairs.map((p) => `${p.left} ↔ ${p.right}`).join(" · ")}</p>}{q.explanation && <p>{q.explanation}</p>}</div>}
          </div>
        );
      })}

      <div className="flex flex-wrap items-center gap-4 rounded-2xl border border-border bg-card p-5">
        <div className="font-serif text-xl">{score} von {norm.length} richtig</div>
        <Button className="ml-auto" disabled={!allChecked || done} onClick={() => { setDone(true); onFinish?.(score, norm.length); }}>{done ? "Gespeichert" : "Ergebnis speichern"}</Button>
        <Button variant="outline" onClick={() => { setState(makeInitial()); setChecked({}); setDone(false); }}><RotateCcw className="mr-2 h-4 w-4" />Alles wiederholen</Button>
      </div>
    </div>
  );
}