import { cn } from './lib/utils'

interface LoadingProps {
  size?: 'sm' | 'md' | 'lg'
  className?: string
  text?: string
}

export const Loading = ({ size = 'md', className, text }: LoadingProps) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  }

  return (
    <div className={cn('flex items-center justify-center space-x-2', className)}>
      <div
        className={cn(
          'animate-spin rounded-full border-2 border-gray-300 border-t-blue-600',
          sizeClasses[size]
        )}
      />
      {text && (
        <span className="text-sm text-gray-600 dark:text-gray-400">
          {text}
        </span>
      )}
    </div>
  )
}

// 점 스타일 로딩 컴포넌트
export const LoadingDots = ({ className }: { className?: string }) => {
  return (
    <div className={cn('flex space-x-1', className)}>
      <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
      <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
      <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
    </div>
  )
}

// 바 스타일 로딩 컴포넌트
export const LoadingBars = ({ className }: { className?: string }) => {
  return (
    <div className={cn('flex space-x-1', className)}>
      <div className="w-1 h-4 bg-blue-600 rounded animate-pulse" style={{ animationDelay: '0ms' }} />
      <div className="w-1 h-4 bg-blue-600 rounded animate-pulse" style={{ animationDelay: '150ms' }} />
      <div className="w-1 h-4 bg-blue-600 rounded animate-pulse" style={{ animationDelay: '300ms' }} />
      <div className="w-1 h-4 bg-blue-600 rounded animate-pulse" style={{ animationDelay: '450ms' }} />
    </div>
  )
}

// 스켈레톤 로딩 컴포넌트
export const LoadingSkeleton = ({ 
  className,
  lines = 3,
  width = 'full'
}: { 
  className?: string
  lines?: number
  width?: 'full' | 'half' | 'quarter'
}) => {
  const widthClasses = {
    full: 'w-full',
    half: 'w-1/2',
    quarter: 'w-1/4'
  }

  return (
    <div className={cn('space-y-3', className)}>
      {Array.from({ length: lines }).map((_, index) => (
        <div
          key={index}
          className={cn(
            'h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse',
            index === lines - 1 ? widthClasses.half : widthClasses[width]
          )}
        />
      ))}
    </div>
  )
}
