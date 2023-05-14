import { createClient } from "@supabase/supabase-js";
const NEXT_PUBLIC_SUPABASE_URL = "https://jyfzabtxovewikfmxsqi.supabase.co";
const NEXT_PUBLIC_SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp5ZnphYnR4b3Zld2lrZm14c3FpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODMwNjgwOTgsImV4cCI6MTk5ODY0NDA5OH0.1jNLBIJpnyxlc0K87ZgBlnVWmcRlpGSlsoe1Kj-l0LI";
export const supabase = createClient(
  NEXT_PUBLIC_SUPABASE_URL,
  NEXT_PUBLIC_SUPABASE_ANON_KEY
);
