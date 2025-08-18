import { useState, useEffect } from 'react'

import { getPrompts, insertPrompt } from '@app/api/supabase.ts'
import type { PromptType } from '@app/api/type.ts'

export const useGetPrompts = () => {
  const [prompts, setPrompts] = useState<PromptType[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<unknown>(null)

  useEffect(() => {
    const fetchPrompts = async () => {
      setLoading(true)
      try {
        const data = await getPrompts()
        setPrompts(data)
      } catch (error) {
        setError(error)
      } finally {
        setLoading(false)
      }
    }

    fetchPrompts()
  }, [])

  return {
    data: prompts,
    loading,
    error
  }
}

export const useInsertPrompt = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<unknown>(null)

  const insert = async (prompt: Omit<PromptType, 'id' | 'created_at'>) => {
    setLoading(true)
    setError(null)
    try {
      const data = await insertPrompt(prompt)
      return data
    } catch (error) {
      setError(error)
      throw error
    } finally {
      setLoading(false)
    }
  }

  return {
    insert,
    loading,
    error
  }
}
