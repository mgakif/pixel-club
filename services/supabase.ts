
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL || '';
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY || '';

// Eğer anahtarlar yoksa bile client oluşturuyoruz ama bir uyarı bayrağı ekliyoruz
export const isSupabaseConfigured = supabaseUrl !== '' && !supabaseUrl.includes('placeholder');

export const supabase = createClient(
  isSupabaseConfigured ? supabaseUrl : 'https://example.supabase.co', 
  isSupabaseConfigured ? supabaseAnonKey : 'no-key'
);
