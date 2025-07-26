import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://szfwycvhyhiiqcdrvphr.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN6Znd5Y3ZoeWhpaXFjZHJ2cGhyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM1MDk4OTIsImV4cCI6MjA2OTA4NTg5Mn0.2Lc7GVfcEX4K57qF7UYr4Tg8rm0ARY-DQLowGbAJ1s8";
export const supabase = createClient(supabaseUrl, supabaseKey);
1