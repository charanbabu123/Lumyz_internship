import { createClient } from "@supabase/supabase-js";
import { Database } from "../types/supabase";

const supabaseUrl = "https://ynwgfwjsaxhxdbpqlljj.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlud2dmd2pzYXhoeGRicHFsbGpqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg2NzExMzksImV4cCI6MjA2NDI0NzEzOX0.GMQlo0R7y96ENuX8I2HZ7EzWlhagx7m0piAkH04wNVk";

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);

export type Profile = Database["public"]["Tables"]["profiles"]["Row"];

// Auth helper functions
export const signUp = async (
  email: string,
  password: string,
  fullName?: string
) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        full_name: fullName,
      },
    },
  });
  return { data, error };
};

export const signIn = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  return { data, error };
};

export const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  return { error };
};

export const getCurrentUser = async () => {
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return user;
};

export const getProfile = async (userId: string) => {
  const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", userId)
    .single();
  return { data, error };
};
