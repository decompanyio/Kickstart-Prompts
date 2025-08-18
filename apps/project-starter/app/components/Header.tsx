import { Sparkles } from 'lucide-react'

const Header = () => {
  return (
    <div className="text-center mb-12">
      <div className="flex items-center justify-center mb-4">
        <h1 className="text-4xl font-bold text-foreground">
          프로젝트 프롬프트 스토어
        </h1>
        <Sparkles className="h-6 w-6 text-yellow-500 ml-2" />
      </div>

      <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
        작업을 더 효율적으로! 검증된 프롬프트 템플릿을 활용해서 빠르고 정확한
        코드를 생성해보세요.
      </p>
    </div>
  )
}

export default Header
