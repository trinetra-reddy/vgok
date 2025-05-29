import { createClient } from "@supabase/supabase-js";
// get these values from the env
const SUPABASE_URL = 'https://xhqhdvokxtaufiptujyj.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhocWhkdm9reHRhdWZpcHR1anlqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYwODY3MDYsImV4cCI6MjA2MTY2MjcwNn0.RineNANc3-aT2neVyDfWWGkztD-lJVIAhU1wKEuWZBM';
export const supabase = createClient(SUPABASE_URL, supabaseAnonKey);

// import { createClient } from '@supabase/supabase-js';
// export const supabase = createClient(
//     import.meta.env.SUPABASE_URL!,
//     import.meta.env.SUPABASE_KEY!
// );