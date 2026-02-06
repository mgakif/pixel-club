
import { createClient } from '@supabase/supabase-js';

// Not: Bu değerlerin Vercel env variables kısmından gelmesi gerekir.
// Demo için placeholder kullanılmıştır.
const supabaseUrl = process.env.SUPABASE_URL || 'https://placeholder-url.supabase.co';
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY || 'placeholder-key';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
