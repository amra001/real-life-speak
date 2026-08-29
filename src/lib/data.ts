import { supabase } from "@/integrations/supabase/client";
import { bakeryA1Override } from "@/lib/static/bakery-a1";

export type Lesson = {
  id: string;
  slug: string;
  title: string;
  description: string;
  level: string;
  region: string;
  category_slug: string;
  subcategory_slug: string | null;
  topic_slug?: string | null;
  topic_title?: string | null;
  duration_seconds: number;
  thumbnail_key: string | null;
  video_url: string | null;
  is_premium: boolean;
  status: string;
  popularity: number;
  grammar_topics?: string[] | null;
  grammar_notes?: GrammarNote[] | null;
  place_items?: PlaceItem[] | null;
};

export type Scene = {
  id: string;
  position: number;
  german_text: string;
  image_key?: string | null;
  scene_group?: string | null;
  translations: Record<string, string>;
};

export type PlaceItem = {
  german_text: string;
  preposition: string;
  image_key?: string | null;
  translations?: Record<string, string>;
};

export type GrammarNote = {
  title: string;
  explanation: string;
  examples: string[];
};

export type Vocab = {
  id: string;
  position: number;
  term: string;
  word_class?: string | null;
  article?: string | null;
  plural?: string | null;
  example?: string | null;
  example_translations?: Record<string, string> | null;
  collocations?: string[] | null;
  translations: Record<string, string>;
};

export type DialogLine = {
  id: string;
  position: number;
  dialog_index?: number | null;
  dialog_title?: string | null;
  speaker_role?: string | null;
  speaker: string;
  german_text: string;
  translations: Record<string, string>;
};

export type Question = {
  id: string;
  position: number;
  kind: string;
  prompt: string;
  explanation: string;
  section?: string | null;
  data?: Record<string, unknown> | null;
  quiz_answers: { id: string; position: number; text: string; is_correct: boolean }[];
};

export const lessonsQuery = () => ({
  queryKey: ["lessons"],
  queryFn: async (): Promise<Lesson[]> => {
    const { data, error } = await supabase
      .from("lessons")
      .select("*")
      .eq("status", "published")
      .order("popularity", { ascending: false });
    if (error) throw error;
    return (data ?? []) as Lesson[];
  },
});

export const lessonQuery = (slug: string) => ({
  queryKey: ["lesson", slug],
  queryFn: async () => {
    // The current Lovable database links the A1 bakery card to /lektion/baeckerei-a1.
    // Support both historical and current slugs so the reviewed content is always shown.
    if (slug === "in-der-baeckerei" || slug === "baeckerei-a1") {
      return {
        ...bakeryA1Override,
        lesson: {
          ...bakeryA1Override.lesson,
          slug,
        },
      } as {
        lesson: Lesson;
        scenes: Scene[];
        vocab: Vocab[];
        dialog: DialogLine[];
        questions: Question[];
      };
    }

    const { data: lesson, error } = await supabase
      .from("lessons")
      .select("*")
      .eq("slug", slug)
      .eq("status", "published")
      .maybeSingle();
    if (error) throw error;
    if (!lesson) return null;

    const [scenes, vocab, dialog, questions] = await Promise.all([
      supabase.from("lesson_scenes").select("*").eq("lesson_id", lesson.id).order("position"),
      supabase.from("vocabulary").select("*").eq("lesson_id", lesson.id).order("position"),
      supabase.from("dialogs").select("*").eq("lesson_id", lesson.id).order("position"),
      supabase
        .from("quiz_questions")
        .select("*, quiz_answers(*)")
        .eq("lesson_id", lesson.id)
        .order("position"),
    ]);

    return {
      lesson: lesson as Lesson,
      scenes: (scenes.data ?? []) as unknown as Scene[],
      vocab: (vocab.data ?? []) as unknown as Vocab[],
      dialog: (dialog.data ?? []) as unknown as DialogLine[],
      questions: (questions.data ?? []) as unknown as Question[],
    };
  },
});

export const adminLessonsQuery = () => ({
  queryKey: ["admin", "lessons"],
  queryFn: async (): Promise<Lesson[]> => {
    const { data, error } = await supabase
      .from("lessons")
      .select("*")
      .order("created_at", { ascending: false });
    if (error) throw error;
    return (data ?? []) as Lesson[];
  },
});

export type Product = {
  id: string;
  slug: string;
  title: string;
  description: string;
  price_cents: number;
  currency: string;
  cta_label: string;
  category: string;
  is_active: boolean;
  position: number;
};

export type Inquiry = {
  id: string;
  kind: string;
  product_slug: string | null;
  name: string;
  email: string;
  phone: string | null;
  current_level: string | null;
  goal: string | null;
  lesson_type: string | null;
  message: string;
  status: string;
  created_at: string;
};

export const productsQuery = () => ({
  queryKey: ["products"],
  queryFn: async (): Promise<Product[]> => {
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .eq("is_active", true)
      .order("position");
    if (error) throw error;
    return (data ?? []) as Product[];
  },
});

export const adminProductsQuery = () => ({
  queryKey: ["admin", "products"],
  queryFn: async (): Promise<Product[]> => {
    const { data, error } = await supabase.from("products").select("*").order("position");
    if (error) throw error;
    return (data ?? []) as Product[];
  },
});

export const adminInquiriesQuery = () => ({
  queryKey: ["admin", "inquiries"],
  queryFn: async (): Promise<Inquiry[]> => {
    const { data, error } = await supabase
      .from("inquiries")
      .select("*")
      .order("created_at", { ascending: false });
    if (error) throw error;
    return (data ?? []) as Inquiry[];
  },
});

export function formatPrice(cents: number, currency = "EUR"): string {
  return new Intl.NumberFormat("de-DE", { style: "currency", currency }).format(cents / 100);
}

export const topicLessonsQuery = (topicSlug: string) => ({
  queryKey: ["topic-lessons", topicSlug],
  queryFn: async (): Promise<Lesson[]> => {
    const { data, error } = await supabase
      .from("lessons")
      .select("*")
      .eq("topic_slug", topicSlug)
      .eq("status", "published")
      .order("level");
    if (error) throw error;
    return (data ?? []) as Lesson[];
  },
});

export type Topic = {
  slug: string;
  title: string;
  description: string;
  category_slug: string;
  subcategory_slug: string | null;
  region: string;
  thumbnail_key: string | null;
  levels: Lesson[];
  hasFree: boolean;
};

export function groupByTopic(lessons: Lesson[]): Topic[] {
  const map = new Map<string, Topic>();
  for (const l of lessons) {
    const slug = l.topic_slug ?? l.slug;
    let t = map.get(slug);
    if (!t) {
      t = {
        slug,
        title: l.topic_title ?? l.title,
        description: l.description,
        category_slug: l.category_slug,
        subcategory_slug: l.subcategory_slug,
        region: l.region,
        thumbnail_key: l.thumbnail_key,
        levels: [],
        hasFree: false,
      };
      map.set(slug, t);
    }
    t.levels.push(l);
    if (!l.is_premium) t.hasFree = true;
  }
  for (const t of map.values()) t.levels.sort((a, b) => a.level.localeCompare(b.level));
  return [...map.values()];
}

export type LessonWithCounts = Lesson & {
  scenes: number;
  vocab: number;
  dialogs: number;
  questions: number;
};

export const topicOverviewQuery = (topicSlug: string) => ({
  queryKey: ["topic-overview", topicSlug],
  queryFn: async (): Promise<LessonWithCounts[]> => {
    const { data, error } = await supabase
      .from("lessons")
      .select("*, lesson_scenes(count), vocabulary(count), dialogs(count), quiz_questions(count)")
      .eq("topic_slug", topicSlug)
      .eq("status", "published");
    if (error) throw error;
    const rows = (data ?? []) as unknown as (Lesson & Record<string, { count: number }[]>)[];
    const num = (v: unknown): number =>
      Array.isArray(v) && v.length ? Number((v[0] as { count: number }).count ?? 0) : 0;
    return rows
      .map((r) => ({
        ...(r as unknown as Lesson),
        scenes: num(r["lesson_scenes"]),
        vocab: num(r["vocabulary"]),
        dialogs: num(r["dialogs"]),
        questions: num(r["quiz_questions"]),
      }))
      .sort((a, b) => a.level.localeCompare(b.level));
  },
});
