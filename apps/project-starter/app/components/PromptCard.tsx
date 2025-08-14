import React, { useState } from 'react'
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
import { cn } from '@repo/ui'

type PromptCardProps = {
  title: string
  description?: string
  prompt: string
  category?: string
  className?: string
}

const PromptCard = ({
  title,
  description,
  prompt,
  category,
  className,
}: PromptCardProps) => {
  const [isCopied, setIsCopied] = useState<boolean>(false)

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
    <Card
      className={cn(
        'w-full transition-all duration-200 hover:shadow-lg hover:scale-[1.02] border-l-4 border-l-primary/20',
        className
      )}
    >
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="space-y-2 flex-1">
            <CardTitle className="text-lg leading-tight">{title}</CardTitle>
            {category && (
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center rounded-full bg-gradient-to-r from-primary/10 to-primary/20 px-3 py-1 text-xs font-medium text-primary border border-primary/20">
                  {category}
                </span>
              </div>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        {description && (
          <CardDescription className="text-sm leading-relaxed">
            {description}
          </CardDescription>
        )}
      </CardContent>
      <CardFooter className="pt-3">
        <div className="flex w-full items-center">
          <Button
            variant={isCopied ? 'default' : 'outline'}
            size="sm"
            onClick={handleCopy}
            className={cn(
              'transition-all duration-200',
              isCopied && 'bg-green-500 hover:bg-green-600 text-white'
            )}
          >
            {isCopied ? (
              <>
                <Check className="mr-2 h-4 w-4" />
                복사됨!
              </>
            ) : (
              <>
                <Copy className="mr-2 h-4 w-4" />
                복사
              </>
            )}
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}

export default PromptCard
