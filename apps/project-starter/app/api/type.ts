// Prompt 타입 정의
export interface PromptType {
  id: string
  title: string
  description: string
  prompt: string
  category?: string
  tag?: string
  created_at?: string
  updated_at?: string
}
