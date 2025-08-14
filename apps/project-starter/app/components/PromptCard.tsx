import * as React from 'react'
import { Copy, Check } from 'lucide-react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@repo/ui/card'
import { Button } from '@repo/ui/button'
import { cn } from '../../../../packages/ui/src/lib/utils'

type PromptCardProps = {
  title: string
  description?: string
  prompt: string
  category?: string
  className?: string
}

const CopyIcon = Copy as any
const CheckIcon = Check as any

const PromptCard = ({
  title,
  description,
  prompt,
  category,
  className,
}: PromptCardProps) => {
  const [isCopied, setIsCopied] = React.useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(prompt)
      setIsCopied(true)
      setTimeout(() => setIsCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  return (
    <Card className={cn('w-full transition-all hover:shadow-md', className)}>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <CardTitle className="text-lg">{title}</CardTitle>
            {description && <CardDescription>{description}</CardDescription>}
            {category && (
              <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                {category}
              </span>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="rounded-md bg-muted p-3">
          <pre className="text-sm text-muted-foreground whitespace-pre-wrap">
            {prompt}
          </pre>
        </div>
      </CardContent>
      <CardFooter>
        <Button
          variant="outline"
          size="sm"
          onClick={handleCopy}
          className="ml-auto"
        >
          {isCopied ? (
            <>
              <CheckIcon className="mr-2 h-4 w-4" />
              복사됨
            </>
          ) : (
            <>
              <CopyIcon className="mr-2 h-4 w-4" />
              복사
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  )
}

export default PromptCard
