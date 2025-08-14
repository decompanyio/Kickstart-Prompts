import PromptCard from './PromptCard'

export interface Prompt {
  id: string
  title: string
  description?: string
  prompt: string
  category?: string
}

type PromptListProps = {
  prompts: Prompt[]
  className?: string
}

const PromptList = ({ prompts, className }: PromptListProps) => {
  return (
    <div
      className={`grid gap-4 md:grid-cols-2 lg:grid-cols-3 ${className || ''}`}
    >
      {prompts.map((prompt) => (
        <PromptCard
          key={prompt.id}
          title={prompt.title}
          description={prompt.description}
          prompt={prompt.prompt}
          category={prompt.category}
        />
      ))}
    </div>
  )
}

export default PromptList
