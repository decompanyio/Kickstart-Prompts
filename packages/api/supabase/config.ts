import { createClient } from '@supabase/supabase-js'

export const createSupabaseClient = (
  supabaseUrl: string,
  supabaseKey: string
) => {
  if (!supabaseUrl || !supabaseKey) {
    alert('Supabase URL과 Key가 필요합니다.')
    throw new Error('Supabase URL과 Key가 필요합니다.')
  }

  return createClient(supabaseUrl, supabaseKey)
}
