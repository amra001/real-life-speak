import { useMemo, useState } from "react";
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
  /** korrekt sortierte Elemente für Reihenfolge-Aufgaben */
  items: string[];
  /** Paare für Zuordnungsaufgaben */
  pairs: { left: string; right: string }[];
  options: string[];
  imageKey: string | null;
  solutionText: string;
};

function shuffle<T>(arr: T[], seed: string): T[] {
  const out = [...arr];
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) >>> 0;
  for (let i = out.length - 1; i > 0; i--) {
    h = (h * 1103515245 + 12345) >>> 0;
    const j = h % (i + 1);
    const a = out[i] as T;
    out[i] = out[j] as T;
    out[j] = a;
  }
  return out;
}

/**
 * Bringt rohe Datenbank-Fragen in eine Form, die die Engine wirklich
 * interaktiv darstellen kann. Aufgaben, für die die nötigen Daten fehlen
 * (z. B. Bilder oder Paare), werden auf einen darstellbaren Typ zurückgestuft.
 */
export function normalizeQuestion(q: Question, lang: TranslationLang): NormQuestion {
  const data = (q.data ?? {}) as Record<string, unknown>;
  const answers = [...(q.quiz_answers ?? [])].sort((a, b) => a.position - b.position);
  const rawKind = (q.kind || "single_choice").toLowerCase();
  const items = Array.isArray(data["items"]) ? (data["items"] as string[]) : [];
  const words = Array.isArray(data["words"]) ? (data["words"] as string[]) : [];
  const options = Array.isArray(data["options"]) ? (data["options"] as string[]) : [];
  const rawPairs = Array.isArray(data["pairs"]) ? (data["pairs"] as unknown[]) : [];
  const pairs = rawPairs
    .map((p) => {
      const o = p as { left?: string; right?: string; translations?: Record<string, string> };
      const right =
        o.translations && lang !== "none" ? (o.translations[lang] ?? o.right ?? "") : (o.right ?? "");
      return { left: o.left ?? "", right };
    })
    .filter((p) => p.left && p.right);
  const imageKey = typeof data["image_key"] === "string" ? (data["image_key"] as string) : null;

  let kind: NormalizedKind;
  const correctCount = answers.filter((a) => a.is_correct).length;
  switch (rawKind) {
    case "multi_choice":
    case "multi_select":
      kind = correctCount > 1 ? "multi_choice" : "single_choice";
      break;
    case "multiple_choice":
      kind = correctCount > 1 ? "multi_choice" : "single_choice";
      break;
    case "true_false":
      kind = "true_false";
      break;
    case "gap":
    case "complete":
    case "preposition":
      kind = options.length >= 2 ? "gap_select" : "gap";
      break;
    case "sentence_order":
      kind = words.length >= 3 ? "sentence_order" : "single_choice";
      break;
    case "dialog_order":
      kind = items.length >= 3 ? "dialog_order" : answers.length >= 3 ? "dialog_order" : "single_choice";
      break;
    case "order":
      kind = items.length >= 3 || answers.length >= 3 ? "order" : "single_choice";
      break;
    case "match":
      kind = pairs.length >= 2 ? "match" : "single_choice";
      break;
    case "image_choice":
    case "image_question":
      kind = imageKey ? "image_choice" : "single_choice";
      break;
    default:
      kind = correctCount > 1 ? "multi_choice" : "single_choice";
  }

  const orderItems =
    items.length >= 3 ? items : answers.length >= 3 ? answers.map((a) => a.text) : [];

  return {
    id: q.id,
    kind,
    prompt: q.prompt,
    explanation: q.explanation,
    answers,
    items: kind === "sentence_order" ? words : orderItems,
    pairs,
    options,
    imageKey,
    solutionText: answers.find((a) => a.is_correct)?.text ?? "",
  };
}

type State = {
  choice?: string;
  multi?: string[];
  text?: string;
  order?: string[];
  match?: Record<string, string>;
};

function isSolved(q: NormQuestion, s: State): boolean {
  switch (q.kind) {
    case "multi_choice": {
      const picked = new Set(s.multi ?? []);
      const correct = q.answers.filter((a) => a.is_correct).map((a) => a.id);
      return correct.length === picked.size && correct.every((id) => picked.has(id));
    }
    case "gap":
    case "gap_select":
      return (
        !!q.solutionText &&
        (s.text ?? "").trim().toLowerCase() === q.solutionText.trim().toLowerCase()
      );
    case "sentence_order":
    case "order":
    case "dialog_order":
      return (s.order ?? []).join("|") === q.items.join("|");
    case "match":
      return q.pairs.every((p) => (s.match ?? {})[p.left] === p.right);
    default:
      return !!q.answers.find((a) => a.id === s.choice)?.is_correct;
  }
}

function isAnswered(q: NormQuestion, s: State): boolean {
  switch (q.kind) {
    case "multi_choice":
      return (s.multi ?? []).length > 0;
    case "gap":
    case "gap_select":
      return !!(s.text ?? "").trim();
    case "sentence_order":
    case "order":
    case "dialog_order":
      return true;
    case "match":
      return Object.keys(s.match ?? {}).length === q.pairs.length;
    default:
      return !!s.choice;
  }
}

function OrderList({
  values,
  onChange,
  disabled,
}: {
  values: string[];
  onChange: (v: string[]) => void;
  disabled: boolean;
}) {
  const move = (i: number, dir: -1 | 1) => {
    const next = [...values];
    const j = i + dir;
    if (j < 0 || j >= next.length) return;
    const a = next[i] as string;
    next[i] = next[j] as string;
    next[j] = a;
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
          className="flex items-center gap-3 rounded-xl border border-border bg-card px-3 py-2 text-sm"
        >
          <span className="w-5 shrink-0 text-xs text-muted-foreground">{i + 1}.</span>
          <span className="flex-1">{v}</span>
          <span className="flex shrink-0 gap-1">
            <Button
              type="button"
              variant="outline"
              size="icon"
              className="h-7 w-7"
              disabled={disabled || i === 0}
              onClick={() => move(i, -1)}
              aria-label="nach oben"
            >
              <ArrowUp className="h-3.5 w-3.5" />
            </Button>
            <Button
              type="button"
              variant="outline"
              size="icon"
              className="h-7 w-7"
              disabled={disabled || i === values.length - 1}
              onClick={() => move(i, 1)}
              aria-label="nach unten"
            >
              <ArrowDown className="h-3.5 w-3.5" />
            </Button>
          </span>
        </li>
      ))}
    </ul>
  );
}

function ChipBuilder({
  words,
  value,
  onChange,
  disabled,
}: {
  words: string[];
  value: string[];
  onChange: (v: string[]) => void;
  disabled: boolean;
}) {
  const pool = useMemo(() => {
    const rest = [...words];
    for (const v of value) {
      const idx = rest.indexOf(v);
      if (idx >= 0) rest.splice(idx, 1);
    }
    return rest;
  }, [words, value]);
  return (
    <div className="mt-4 space-y-3">
      <div className="min-h-12 rounded-xl border border-dashed border-border p-2">
        <div className="flex flex-wrap gap-2">
          {value.map((w, i) => (
            <button
              key={`${w}-${i}`}
              type="button"
              disabled={disabled}
              onClick={() => onChange(value.filter((_, j) => j !== i))}
              className="rounded-full bg-foreground px-3 py-1.5 text-sm text-background"
            >
              {w}
            </button>
          ))}
          {!value.length && <span className="p-1 text-sm text-muted-foreground">Satz hier aufbauen …</span>}
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        {pool.map((w, i) => (
          <button
            key={`${w}-p-${i}`}
            type="button"
            disabled={disabled}
            onClick={() => onChange([...value, w])}
            className="rounded-full border border-border px-3 py-1.5 text-sm hover:bg-muted"
          >
            {w}
          </button>
        ))}
      </div>
    </div>
  );
}

function MatchGrid({
  pairs,
  value,
  onChange,
  disabled,
  seed,
}: {
  pairs: { left: string; right: string }[];
  value: Record<string, string>;
  onChange: (v: Record<string, string>) => void;
  disabled: boolean;
  seed: string;
}) {
  const rights = useMemo(() => shuffle(pairs.map((p) => p.right), seed), [pairs, seed]);
  const [active, setActive] = useState<string | null>(null);
  const used = new Set(Object.values(value));
  return (
    <div className="mt-4 grid gap-3 sm:grid-cols-2">
      <div className="space-y-2">
        {pairs.map((p) => (
          <button
            key={p.left}
            type="button"
            disabled={disabled}
            onClick={() => setActive(active === p.left ? null : p.left)}
            className={`block w-full rounded-xl border px-3 py-2 text-left text-sm ${
              active === p.left ? "border-foreground" : "border-border"
            }`}
          >
            <span className="font-medium">{p.left}</span>
            {value[p.left] && (
              <span className="mt-0.5 block text-xs text-muted-foreground" dir="auto">
                → {value[p.left]}
              </span>
            )}
          </button>
        ))}
      </div>
      <div className="space-y-2">
        {rights.map((r) => (
          <button
            key={r}
            type="button"
            disabled={disabled || !active}
            onClick={() => {
              if (!active) return;
              const next = { ...value, [active]: r };
              onChange(next);
              setActive(null);
            }}
            className={`block w-full rounded-xl border px-3 py-2 text-left text-sm ${
              used.has(r) ? "border-border bg-muted/60 text-muted-foreground" : "border-border hover:bg-muted"
            }`}
            dir="auto"
          >
            {r}
          </button>
        ))}
      </div>
    </div>
  );
}

/** Interaktive Übungen mit echten Aufgabentypen und Feedback pro Aufgabe. */
export function Exercises({
  questions,
  lang,
  title,
  onFinish,
}: {
  questions: Question[];
  lang: TranslationLang;
  title?: string;
  onFinish?: (score: number, total: number) => void;
}) {
  const norm = useMemo(() => questions.map((q) => normalizeQuestion(q, lang)), [questions, lang]);
  const initial = useMemo(() => {
    const s: Record<string, State> = {};
    for (const q of norm) {
      if (q.kind === "order" || q.kind === "dialog_order") s[q.id] = { order: shuffle(q.items, q.id) };
      else if (q.kind === "sentence_order") s[q.id] = { order: [] };
      else s[q.id] = {};
    }
    return s;
  }, [norm]);
  const [state, setState] = useState<Record<string, State>>(initial);
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [done, setDone] = useState(false);

  if (!norm.length) return <p className="text-muted-foreground">Keine Übungen hinterlegt.</p>;

  const set = (id: string, patch: State) =>
    setState((p) => ({ ...p, [id]: { ...(p[id] ?? {}), ...patch } }));

  const score = norm.filter((q) => isSolved(q, state[q.id] ?? {})).length;
  const allChecked = norm.every((q) => checked[q.id]);

  return (
    <div className="space-y-5">
      {title && <h3 className="font-serif text-xl font-semibold">{title}</h3>}
      {norm.map((q, i) => {
        const s = state[q.id] ?? {};
        const isChecked = !!checked[q.id];
        const solved = isSolved(q, s);
        return (
          <div key={q.id} className="rounded-2xl border border-border bg-card p-5">
            <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground">
              <span>Aufgabe {i + 1}</span>
              <Badge variant="outline" className="font-normal normal-case">
                {KIND_LABEL[q.kind]}
              </Badge>
              {q.kind === "multi_choice" && (
                <span className="normal-case tracking-normal">Mehrere Antworten richtig</span>
              )}
            </div>
            <div className="mt-2 font-medium">{q.prompt}</div>

            {q.kind === "image_choice" && q.imageKey && (
              <img
                src={lessonImage(q.imageKey)}
                alt={q.prompt}
                loading="lazy"
                className="mt-3 aspect-video w-full rounded-xl object-cover"
              />
            )}

            {(q.kind === "single_choice" || q.kind === "true_false" || q.kind === "image_choice") && (
              <div className={q.kind === "true_false" ? "mt-4 flex gap-3" : "mt-4 space-y-2"}>
                {q.answers.map((a) => {
                  const selected = s.choice === a.id;
                  const cls = isChecked
                    ? a.is_correct
                      ? "border-success bg-success/10"
                      : selected
                        ? "border-destructive bg-destructive/10"
                        : "border-border"
                    : selected
                      ? "border-foreground"
                      : "border-border";
                  return (
                    <button
                      key={a.id}
                      type="button"
                      disabled={isChecked}
                      onClick={() => set(q.id, { choice: a.id })}
                      className={`rounded-xl border px-4 py-3 text-left text-sm ${cls} ${
                        q.kind === "true_false" ? "flex-1 text-center font-medium" : "block w-full"
                      }`}
                    >
                      {a.text}
                    </button>
                  );
                })}
              </div>
            )}

            {q.kind === "multi_choice" && (
              <div className="mt-4 space-y-2">
                {q.answers.map((a) => {
                  const picked = (s.multi ?? []).includes(a.id);
                  const cls = isChecked
                    ? a.is_correct
                      ? "border-success bg-success/10"
                      : picked
                        ? "border-destructive bg-destructive/10"
                        : "border-border"
                    : picked
                      ? "border-foreground"
                      : "border-border";
                  return (
                    <label
                      key={a.id}
                      className={`flex w-full cursor-pointer items-center gap-3 rounded-xl border px-4 py-3 text-sm ${cls}`}
                    >
                      <Checkbox
                        checked={picked}
                        disabled={isChecked}
                        onCheckedChange={(v) =>
                          set(q.id, {
                            multi: v
                              ? [...(s.multi ?? []), a.id]
                              : (s.multi ?? []).filter((x) => x !== a.id),
                          })
                        }
                      />
                      <span>{a.text}</span>
                    </label>
                  );
                })}
              </div>
            )}

            {q.kind === "gap" && (
              <Input
                className="mt-4"
                placeholder="Antwort eingeben"
                value={s.text ?? ""}
                disabled={isChecked}
                onChange={(e) => set(q.id, { text: e.target.value })}
              />
            )}

            {q.kind === "gap_select" && (
              <div className="mt-4 flex flex-wrap gap-2">
                {q.options.map((o) => (
                  <button
                    key={o}
                    type="button"
                    disabled={isChecked}
                    onClick={() => set(q.id, { text: o })}
                    className={`rounded-full border px-3 py-1.5 text-sm ${
                      s.text === o ? "border-foreground bg-foreground text-background" : "border-border"
                    }`}
                  >
                    {o}
                  </button>
                ))}
              </div>
            )}

            {q.kind === "sentence_order" && (
              <ChipBuilder
                words={q.items}
                value={s.order ?? []}
                disabled={isChecked}
                onChange={(v) => set(q.id, { order: v })}
              />
            )}

            {(q.kind === "order" || q.kind === "dialog_order") && (
              <OrderList
                values={s.order ?? []}
                disabled={isChecked}
                onChange={(v) => set(q.id, { order: v })}
              />
            )}

            {q.kind === "match" && (
              <MatchGrid
                pairs={q.pairs}
                seed={q.id}
                value={s.match ?? {}}
                disabled={isChecked}
                onChange={(v) => set(q.id, { match: v })}
              />
            )}

            <div className="mt-4 flex flex-wrap items-center gap-3">
              {!isChecked ? (
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  disabled={!isAnswered(q, s)}
                  onClick={() => setChecked((p) => ({ ...p, [q.id]: true }))}
                >
                  Prüfen
                </Button>
              ) : (
                <>
                  <span
                    className={`inline-flex items-center gap-1 text-sm font-medium ${
                      solved ? "text-success" : "text-destructive"
                    }`}
                  >
                    {solved ? <Check className="h-4 w-4" /> : <X className="h-4 w-4" />}
                    {solved ? "Richtig" : "Noch nicht ganz."}
                  </span>
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      setChecked((p) => ({ ...p, [q.id]: false }));
                      set(q.id, initial[q.id] ?? {});
                    }}
                  >
                    <RotateCcw className="mr-1 h-3.5 w-3.5" /> Nochmal
                  </Button>
                </>
              )}
            </div>

            {isChecked && (
              <div className="mt-3 space-y-1 text-sm text-muted-foreground">
                {!solved && (q.kind === "gap" || q.kind === "gap_select") && (
                  <p>Richtige Antwort: {q.solutionText}</p>
                )}
                {!solved && (q.kind === "order" || q.kind === "dialog_order" || q.kind === "sentence_order") && (
                  <p>Richtige Reihenfolge: {q.items.join(" · ")}</p>
                )}
                {!solved && q.kind === "match" && (
                  <p>{q.pairs.map((p) => `${p.left} ↔ ${p.right}`).join(" · ")}</p>
                )}
                {q.explanation && <p>{q.explanation}</p>}
              </div>
            )}
          </div>
        );
      })}

      <div className="flex flex-wrap items-center gap-4 rounded-2xl border border-border bg-card p-5">
        <div className="font-serif text-xl">
          {score} von {norm.length} richtig
        </div>
        <Button
          className="ml-auto"
          disabled={!allChecked || done}
          onClick={() => {
            setDone(true);
            onFinish?.(score, norm.length);
          }}
        >
          {done ? "Gespeichert" : "Ergebnis speichern"}
        </Button>
        <Button
          variant="outline"
          onClick={() => {
            setState(initial);
            setChecked({});
            setDone(false);
          }}
        >
          <RotateCcw className="mr-2 h-4 w-4" /> Alles wiederholen
        </Button>
      </div>
    </div>
  );
}
