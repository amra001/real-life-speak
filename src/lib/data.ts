import { supabase } from "@/integrations/supabase/client";

export type Lesson = {
  id: string;
  slug: string;
  title: string;
  description: string;
  level: string;
  region: string;
  category_slug: string;
  subcategory_slug: string | null;
  duration_seconds: number;
  thumbnail_key: string | null;
  video_url: string | null;
  is_premium: boolean;
  status: string;
  popularity: number;
};

export type Scene = {
  id: string;
  position: number;
  german_text: string;
  translations: Record<string, string>;
};

export type Vocab = {
  id: string;
  position: number;
  term: string;
  translations: Record<string, string>;
};

export type DialogLine = {
  id: string;
  position: number;
  speaker: string;
  german_text: string;
  translations: Record<string, string>;
};

export type Question = {
  id: string;
  position: number;
  prompt: string;
  explanation: string;
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
