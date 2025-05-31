export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: {
          avatar_url: string | null;
          created_at: string | null;
          department: string | null;
          employee_id: string | null;
          full_name: string | null;
          id: string;
          specialization: string | null;
          student_id: string | null;
          updated_at: string | null;
          user_type: Database["public"]["Enums"]["user_type"];
          username: string | null;
          website: string | null;
          year_of_study: number | null;
        };
        Insert: {
          avatar_url?: string | null;
          created_at?: string | null;
          department?: string | null;
          employee_id?: string | null;
          full_name?: string | null;
          id: string;
          specialization?: string | null;
          student_id?: string | null;
          updated_at?: string | null;
          user_type?: Database["public"]["Enums"]["user_type"];
          username?: string | null;
          website?: string | null;
          year_of_study?: number | null;
        };
        Update: {
          avatar_url?: string | null;
          created_at?: string | null;
          department?: string | null;
          employee_id?: string | null;
          full_name?: string | null;
          id?: string;
          specialization?: string | null;
          student_id?: string | null;
          updated_at?: string | null;
          user_type?: Database["public"]["Enums"]["user_type"];
          username?: string | null;
          website?: string | null;
          year_of_study?: number | null;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      user_type: "student" | "faculty" | "admin";
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

type DefaultSchema = Database[Extract<keyof Database, "public">];

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database;
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
      DefaultSchema["Views"])
  ? (DefaultSchema["Tables"] &
      DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
      Row: infer R;
    }
    ? R
    : never
  : never;

export type UserType = Database["public"]["Enums"]["user_type"];
