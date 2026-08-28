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
    PostgrestVersion: "14.17"
  }
  public: {
    Tables: {
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
          german_text: string
          id: string
          lesson_id: string
          position: number
          speaker: string
          translations: Json
        }
        Insert: {
          german_text: string
          id?: string
          lesson_id: string
          position?: number
          speaker?: string
          translations?: Json
        }
        Update: {
          german_text?: string
          id?: string
          lesson_id?: string
          position?: number
          speaker?: string
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
          lesson_id: string
          position: number
          translations: Json
        }
        Insert: {
          german_text: string
          id?: string
          lesson_id: string
          position?: number
          translations?: Json
        }
        Update: {
          german_text?: string
          id?: string
          lesson_id?: string
          position?: number
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
          id: string
          is_premium: boolean
          level: string
          popularity: number
          region: string
          slug: string
          status: string
          subcategory_slug: string | null
          thumbnail_key: string | null
          title: string
          updated_at: string
          video_url: string | null
          worksheet_url: string | null
        }
        Insert: {
          category_slug: string
          created_at?: string
          description?: string
          duration_seconds?: number
          id?: string
          is_premium?: boolean
          level?: string
          popularity?: number
          region?: string
          slug: string
          status?: string
          subcategory_slug?: string | null
          thumbnail_key?: string | null
          title: string
          updated_at?: string
          video_url?: string | null
          worksheet_url?: string | null
        }
        Update: {
          category_slug?: string
          created_at?: string
          description?: string
          duration_seconds?: number
          id?: string
          is_premium?: boolean
          level?: string
          popularity?: number
          region?: string
          slug?: string
          status?: string
          subcategory_slug?: string | null
          thumbnail_key?: string | null
          title?: string
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
          explanation: string
          id: string
          kind: string
          lesson_id: string
          position: number
          prompt: string
        }
        Insert: {
          explanation?: string
          id?: string
          kind?: string
          lesson_id: string
          position?: number
          prompt: string
        }
        Update: {
          explanation?: string
          id?: string
          kind?: string
          lesson_id?: string
          position?: number
          prompt?: string
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
          plan: string
          started_at: string
          status: string
          user_id: string
        }
        Insert: {
          plan?: string
          started_at?: string
          status?: string
          user_id: string
        }
        Update: {
          plan?: string
          started_at?: string
          status?: string
          user_id?: string
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
          id: string
          lesson_id: string
          position: number
          term: string
          translations: Json
        }
        Insert: {
          id?: string
          lesson_id: string
          position?: number
          term: string
          translations?: Json
        }
        Update: {
          id?: string
          lesson_id?: string
          position?: number
          term?: string
          translations?: Json
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
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
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
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
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
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
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
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
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
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
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
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
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
