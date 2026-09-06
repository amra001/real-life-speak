export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.5"
  }
  public: {
    Tables: {
      _translation_jobs_test: {
        Row: {
          lang: string | null
          req_id: number | null
          source_text: string | null
        }
        Insert: {
          lang?: string | null
          req_id?: number | null
          source_text?: string | null
        }
        Update: {
          lang?: string | null
          req_id?: number | null
          source_text?: string | null
        }
        Relationships: []
      }
      categories: {
        Row: {
          id: string
          name: string
          parent_slug: string | null
          slug: string
          sort: number
        }
        Insert: {
          id?: string
          name: string
          parent_slug?: string | null
          slug: string
          sort?: number
        }
        Update: {
          id?: string
          name?: string
          parent_slug?: string | null
          slug?: string
          sort?: number
        }
        Relationships: []
      }
      dialogs: {
        Row: {
          dialog_index: number
          dialog_title: string
          german_text: string
          id: string
          lesson_id: string
          position: number
          speaker: string
          speaker_role: string
          translations: Json
        }
        Insert: {
          dialog_index?: number
          dialog_title?: string
          german_text: string
          id?: string
          lesson_id: string
          position?: number
          speaker?: string
          speaker_role?: string
          translations?: Json
        }
        Update: {
          dialog_index?: number
          dialog_title?: string
          german_text?: string
          id?: string
          lesson_id?: string
          position?: number
          speaker?: string
          speaker_role?: string
          translations?: Json
        }
        Relationships: [
          {
            foreignKeyName: "dialogs_lesson_id_fkey"
            columns: ["lesson_id"]
            isOneToOne: false
            referencedRelation: "lessons"
            referencedColumns: ["id"]
          },
        ]
      }
      favorites: {
        Row: {
          created_at: string
          lesson_id: string
          user_id: string
        }
        Insert: {
          created_at?: string
          lesson_id: string
          user_id: string
        }
        Update: {
          created_at?: string
          lesson_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "favorites_lesson_id_fkey"
            columns: ["lesson_id"]
            isOneToOne: false
            referencedRelation: "lessons"
            referencedColumns: ["id"]
          },
        ]
      }
      inquiries: {
        Row: {
          created_at: string
          current_level: string | null
          email: string
          goal: string | null
          id: string
          kind: string
          lesson_type: string | null
          message: string
          name: string
          phone: string | null
          product_slug: string | null
          status: string
          user_id: string | null
        }
        Insert: {
          created_at?: string
          current_level?: string | null
          email: string
          goal?: string | null
          id?: string
          kind?: string
          lesson_type?: string | null
          message?: string
          name: string
          phone?: string | null
          product_slug?: string | null
          status?: string
          user_id?: string | null
        }
        Update: {
          created_at?: string
          current_level?: string | null
          email?: string
          goal?: string | null
          id?: string
          kind?: string
          lesson_type?: string | null
          message?: string
          name?: string
          phone?: string | null
          product_slug?: string | null
          status?: string
          user_id?: string | null
        }
        Relationships: []
      }
      lesson_scenes: {
        Row: {
          german_text: string
          id: string
          image_key: string | null
          lesson_id: string
          position: number
          scene_group: string
          translations: Json
        }
        Insert: {
          german_text: string
          id?: string
          image_key?: string | null
          lesson_id: string
          position?: number
          scene_group?: string
          translations?: Json
        }
        Update: {
          german_text?: string
          id?: string
          image_key?: string | null
          lesson_id?: string
          position?: number
          scene_group?: string
          translations?: Json
        }
        Relationships: [
          {
            foreignKeyName: "lesson_scenes_lesson_id_fkey"
            columns: ["lesson_id"]
            isOneToOne: false
            referencedRelation: "lessons"
            referencedColumns: ["id"]
          },
        ]
      }
      lessons: {
        Row: {
          category_slug: string
          created_at: string
          description: string
          duration_seconds: number
          grammar_notes: Json
          grammar_topics: string[]
          id: string
          is_premium: boolean
          level: string
          place_items: Json
          popularity: number
          region: string
          slug: string
          status: string
          subcategory_slug: string | null
          thumbnail_key: string | null
          title: string
          topic_slug: string | null
          topic_title: string | null
          updated_at: string
          video_url: string | null
          worksheet_url: string | null
        }
        Insert: {
          category_slug: string
          created_at?: string
          description?: string
          duration_seconds?: number
          grammar_notes?: Json
          grammar_topics?: string[]
          id?: string
          is_premium?: boolean
          level?: string
          place_items?: Json
          popularity?: number
          region?: string
          slug: string
          status?: string
          subcategory_slug?: string | null
          thumbnail_key?: string | null
          title: string
          topic_slug?: string | null
          topic_title?: string | null
          updated_at?: string
          video_url?: string | null
          worksheet_url?: string | null
        }
        Update: {
          category_slug?: string
          created_at?: string
          description?: string
          duration_seconds?: number
          grammar_notes?: Json
          grammar_topics?: string[]
          id?: string
          is_premium?: boolean
          level?: string
          place_items?: Json
          popularity?: number
          region?: string
          slug?: string
          status?: string
          subcategory_slug?: string | null
          thumbnail_key?: string | null
          title?: string
          topic_slug?: string | null
          topic_title?: string | null
          updated_at?: string
          video_url?: string | null
          worksheet_url?: string | null
        }
        Relationships: []
      }
      products: {
        Row: {
          category: string
          created_at: string
          cta_label: string
          currency: string
          description: string
          id: string
          is_active: boolean
          position: number
          price_cents: number
          slug: string
          title: string
          updated_at: string
        }
        Insert: {
          category?: string
          created_at?: string
          cta_label?: string
          currency?: string
          description?: string
          id?: string
          is_active?: boolean
          position?: number
          price_cents?: number
          slug: string
          title: string
          updated_at?: string
        }
        Update: {
          category?: string
          created_at?: string
          cta_label?: string
          currency?: string
          description?: string
          id?: string
          is_active?: boolean
          position?: number
          price_cents?: number
          slug?: string
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          created_at: string
          display_name: string | null
          id: string
          level: string
          region: string
          translation_lang: string
        }
        Insert: {
          created_at?: string
          display_name?: string | null
          id: string
          level?: string
          region?: string
          translation_lang?: string
        }
        Update: {
          created_at?: string
          display_name?: string | null
          id?: string
          level?: string
          region?: string
          translation_lang?: string
        }
        Relationships: []
      }
      quiz_answers: {
        Row: {
          id: string
          is_correct: boolean
          position: number
          question_id: string
          text: string
        }
        Insert: {
          id?: string
          is_correct?: boolean
          position?: number
          question_id: string
          text: string
        }
        Update: {
          id?: string
          is_correct?: boolean
          position?: number
          question_id?: string
          text?: string
        }
        Relationships: [
          {
            foreignKeyName: "quiz_answers_question_id_fkey"
            columns: ["question_id"]
            isOneToOne: false
            referencedRelation: "quiz_questions"
            referencedColumns: ["id"]
          },
        ]
      }
      quiz_questions: {
        Row: {
          data: Json
          explanation: string
          id: string
          kind: string
          lesson_id: string
          position: number
          prompt: string
          section: string
        }
        Insert: {
          data?: Json
          explanation?: string
          id?: string
          kind?: string
          lesson_id: string
          position?: number
          prompt: string
          section?: string
        }
        Update: {
          data?: Json
          explanation?: string
          id?: string
          kind?: string
          lesson_id?: string
          position?: number
          prompt?: string
          section?: string
        }
        Relationships: [
          {
            foreignKeyName: "quiz_questions_lesson_id_fkey"
            columns: ["lesson_id"]
            isOneToOne: false
            referencedRelation: "lessons"
            referencedColumns: ["id"]
          },
        ]
      }
      subscriptions: {
        Row: {
          cancel_at_period_end: boolean
          current_period_end: string | null
          plan: string
          started_at: string
          status: string
          stripe_customer_id: string | null
          stripe_subscription_id: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          cancel_at_period_end?: boolean
          current_period_end?: string | null
          plan?: string
          started_at?: string
          status?: string
          stripe_customer_id?: string | null
          stripe_subscription_id?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          cancel_at_period_end?: boolean
          current_period_end?: string | null
          plan?: string
          started_at?: string
          status?: string
          stripe_customer_id?: string | null
          stripe_subscription_id?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      translation_backfill_jobs: {
        Row: {
          created_at: string | null
          id: number
          lang: string
          req_id: number
          source_text: string
          source_type: string
        }
        Insert: {
          created_at?: string | null
          id?: number
          lang: string
          req_id: number
          source_text: string
          source_type: string
        }
        Update: {
          created_at?: string | null
          id?: number
          lang?: string
          req_id?: number
          source_text?: string
          source_type?: string
        }
        Relationships: []
      }
      user_progress: {
        Row: {
          completed: boolean
          id: string
          lesson_id: string
          quiz_score: number
          quiz_total: number
          seconds_learned: number
          updated_at: string
          user_id: string
        }
        Insert: {
          completed?: boolean
          id?: string
          lesson_id: string
          quiz_score?: number
          quiz_total?: number
          seconds_learned?: number
          updated_at?: string
          user_id: string
        }
        Update: {
          completed?: boolean
          id?: string
          lesson_id?: string
          quiz_score?: number
          quiz_total?: number
          seconds_learned?: number
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_progress_lesson_id_fkey"
            columns: ["lesson_id"]
            isOneToOne: false
            referencedRelation: "lessons"
            referencedColumns: ["id"]
          },
        ]
      }
      user_roles: {
        Row: {
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
      vocabulary: {
        Row: {
          article: string
          collocations: string[]
          example: string
          example_translations: Json
          id: string
          lesson_id: string
          plural: string
          position: number
          term: string
          translations: Json
          word_class: string
        }
        Insert: {
          article?: string
          collocations?: string[]
          example?: string
          example_translations?: Json
          id?: string
          lesson_id: string
          plural?: string
          position?: number
          term: string
          translations?: Json
          word_class?: string
        }
        Update: {
          article?: string
          collocations?: string[]
          example?: string
          example_translations?: Json
          id?: string
          lesson_id?: string
          plural?: string
          position?: number
          term?: string
          translations?: Json
          word_class?: string
        }
        Relationships: [
          {
            foreignKeyName: "vocabulary_lesson_id_fkey"
            columns: ["lesson_id"]
            isOneToOne: false
            referencedRelation: "lessons"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      apply_global_dialog_translation_map: {
        Args: { p_map: Json }
        Returns: number
      }
      apply_global_place_translation_map: {
        Args: { p_map: Json }
        Returns: number
      }
      apply_global_scene_translation_map: {
        Args: { p_map: Json }
        Returns: number
      }
      apply_global_vocab_translation_map: {
        Args: { p_map: Json }
        Returns: number
      }
      apply_lesson_translation_map: {
        Args: { p_map: Json; p_source: string; p_topic: string }
        Returns: number
      }
      apply_translation_backfill: {
        Args: { p_source_type: string }
        Returns: number
      }
      enqueue_translation_backfill: {
        Args: { p_limit?: number; p_source_type: string }
        Returns: number
      }
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
      rebuild_premium_questions: {
        Args: { p_lesson: string }
        Returns: undefined
      }
      rebuild_quality_questions: {
        Args: { p_category: string }
        Returns: number
      }
      sync_quality_questions_for_lesson: {
        Args: { p_lesson: string }
        Returns: undefined
      }
    }
    Enums: {
      app_role: "admin" | "user"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends (DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never) = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends (PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never) = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "user"],
    },
  },
} as const
