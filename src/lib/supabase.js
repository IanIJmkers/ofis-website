import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn(
    "Missing Supabase environment variables. Blog features will not work.\n" +
      "Copy .env.example to .env.local and fill in your Supabase project values."
  );
}

export const supabase = createClient(supabaseUrl ?? "", supabaseAnonKey ?? "");
