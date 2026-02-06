
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;

// Değişkenlerin tanımlı olup olmadığını ve geçerli bir URL olup olmadığını kontrol et
export const isSupabaseConfigured = 
  !!supabaseUrl && 
  !!supabaseAnonKey && 
  supabaseUrl.startsWith('https://') &&
  !supabaseUrl.includes('placeholder');

// Eğer konfigürasyon yoksa, uygulamanın çökmemesi için dummy bir client döndür
export const supabase = createClient(
  isSupabaseConfigured ? supabaseUrl : 'https://dummy.supabase.co', 
  isSupabaseConfigured ? supabaseAnonKey : 'dummy-key'
);
