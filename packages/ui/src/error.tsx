import { cn } from './lib/utils'

type ErrorProps = {
  title?: string
  message?: string
  className?: string
  variant?: 'default' | 'destructive' | 'warning'
  size?: 'sm' | 'md' | 'lg'
  onRetry?: () => void
  retryText?: string
}

export const Error = ({ 
  title = '오류가 발생했습니다',
  message,
  className,
  variant = 'default',
  size = 'md',
  onRetry,
  retryText = '다시 시도'
}: ErrorProps) => {
  const variantClasses = {
    default: 'border-red-200 bg-red-50 text-red-800 dark:border-red-800 dark:bg-red-950 dark:text-red-200',
    destructive: 'border-red-500 bg-red-100 text-red-900 dark:border-red-600 dark:bg-red-900 dark:text-red-100',
    warning: 'border-yellow-200 bg-yellow-50 text-yellow-800 dark:border-yellow-800 dark:bg-yellow-950 dark:text-yellow-200'
  }

  const iconVariantClasses = {
    default: 'text-red-500 dark:text-red-400',
    destructive: 'text-red-600 dark:text-red-300',
    warning: 'text-yellow-500 dark:text-yellow-400'
  }

  const sizeClasses = {
    sm: 'p-3 text-sm',
    md: 'p-4 text-base',
    lg: 'p-6 text-lg'
  }

  const iconSizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6'
  }

  return (
    <div className={cn(
      'rounded-lg border flex items-start space-x-3',
      variantClasses[variant],
      sizeClasses[size],
      className
    )}>
      {/* Error Icon */}
      <div className={cn('flex-shrink-0 mt-0.5', iconVariantClasses[variant])}>
        <svg 
          className={iconSizeClasses[size]} 
          fill="currentColor" 
          viewBox="0 0 20 20"
        >
          <path 
            fillRule="evenodd" 
            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" 
            clipRule="evenodd" 
          />
        </svg>
      </div>
      
      {/* Content */}
      <div className="flex-1 min-w-0">
        <h3 className="font-medium">{title}</h3>
        {message && (
          <p className="mt-1 opacity-90">{message}</p>
        )}
        {onRetry && (
          <button
            onClick={onRetry}
            className="mt-3 text-sm font-medium underline hover:no-underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-current rounded"
          >
            {retryText}
          </button>
        )}
      </div>
    </div>
  )
}

// 간단한 인라인 에러 메시지
export const ErrorMessage = ({ 
  message, 
  className 
}: { 
  message: string
  className?: string 
}) => {
  return (
    <p className={cn(
      'text-sm text-red-600 dark:text-red-400 flex items-center space-x-1',
      className
    )}>
      <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
        <path 
          fillRule="evenodd" 
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" 
          clipRule="evenodd" 
        />
      </svg>
      <span>{message}</span>
    </p>
  )
}

// 404 페이지용 에러 컴포넌트
export const ErrorNotFound = ({ 
  title = '페이지를 찾을 수 없습니다',
  message = '요청하신 페이지가 존재하지 않거나 이동되었습니다.',
  onGoHome,
  homeText = '홈으로 돌아가기',
  className
}: {
  title?: string
  message?: string
  onGoHome?: () => void
  homeText?: string
  className?: string
}) => {
  return (
    <div className={cn('text-center py-12', className)}>
      <div className="mx-auto w-24 h-24 text-gray-300 dark:text-gray-600 mb-6">
        <svg fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      </div>
      <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">404</h1>
      <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">{title}</h2>
      <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-md mx-auto">{message}</p>
      {onGoHome && (
        <button
          onClick={onGoHome}
          className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          {homeText}
        </button>
      )}
    </div>
  )
}

// 네트워크 에러용 컴포넌트
export const ErrorNetwork = ({
  title = '연결에 실패했습니다',
  message = '네트워크 연결을 확인하고 다시 시도해주세요.',
  onRetry,
  retryText = '다시 시도',
  className
}: {
  title?: string
  message?: string
  onRetry?: () => void
  retryText?: string
  className?: string
}) => {
  return (
    <div className={cn('text-center py-8', className)}>
      <div className="mx-auto w-16 h-16 text-gray-300 dark:text-gray-600 mb-4">
        <svg fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h2v2h-2v-2zm0-8h2v6h-2V9z"/>
        </svg>
      </div>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">{title}</h3>
      <p className="text-gray-500 dark:text-gray-400 mb-6">{message}</p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="inline-flex items-center px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
        >
          <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
          </svg>
          {retryText}
        </button>
      )}
    </div>
  )
}
