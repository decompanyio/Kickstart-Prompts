import PromptCard from '@app/components/PromptCard'

import type { PromptType } from '@app/api/type.ts'

type PromptListProps = {
  prompts: PromptType[]
}

const PromptList = ({ prompts }: PromptListProps) => {
  return (
    <div className={`grid gap-6 md:grid-cols-2 xl:grid-cols-3`}>
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
