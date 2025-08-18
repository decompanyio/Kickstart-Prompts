import type { PromptType } from '@app/api/type.ts'

import { createSupabaseClient } from '@repo/api'

const supabase = createSupabaseClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_KEY
)

export const getPrompts = async () => {
  try {
    const { data, error } = await supabase.from('prompts').select('*')

    if (error) {
      throw error
    }

    return data as PromptType[]
  } catch (error) {
    console.error('Error fetching prompts:', error)
    throw error
  }
}

export const insertPrompt = async (
  prompt: Omit<PromptType, 'id' | 'created_at'>
) => {
  try {
    const { data, error } = await supabase
      .from('prompts')
      .insert([prompt])
      .select()
      .single()

    if (error) {
      throw error
    }

    return data as PromptType
  } catch (error) {
    console.error('Error inserting prompt:', error)
    throw error
  }
}
