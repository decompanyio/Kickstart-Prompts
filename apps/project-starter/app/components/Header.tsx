import * as React from 'react'
import { Plus, Code2, Sparkles } from 'lucide-react'
import { Button } from '@repo/ui/button'

interface HeaderProps {
  onAddPrompt: () => void
}

const Header = ({ onAddPrompt }: HeaderProps) => {
  return (
    <div className="text-center mb-12">
      {/* 아이콘과 제목 */}
      <div className="flex items-center justify-center mb-4">
        <div className="bg-primary/10 p-3 rounded-full mr-4">
          <Code2 className="h-8 w-8 text-primary" />
        </div>
        <h1 className="text-4xl font-bold text-foreground">
          개발 프롬프트 스토어
        </h1>
        <Sparkles className="h-6 w-6 text-yellow-500 ml-2" />
      </div>

      {/* 설명 */}
      <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
        개발 작업을 더 효율적으로! 검증된 프롬프트 템플릿을 활용해서 빠르고
        정확한 코드를 생성해보세요.
      </p>

      {/* 액션 버튼 */}
      <div className="flex justify-center gap-4">
        <Button onClick={onAddPrompt} size="lg" className="shadow-lg">
          <Plus className="mr-2 h-5 w-5" />새 프롬프트 추가
        </Button>
      </div>

      {/* 통계 */}
      <div className="flex justify-center gap-8 mt-8 text-sm text-muted-foreground">
        <div className="text-center">
          <div className="font-semibold text-lg text-foreground">50+</div>
          <div>검증된 프롬프트</div>
        </div>
        <div className="text-center">
          <div className="font-semibold text-lg text-foreground">10+</div>
          <div>카테고리</div>
        </div>
        <div className="text-center">
          <div className="font-semibold text-lg text-foreground">100%</div>
          <div>무료 사용</div>
        </div>
      </div>
    </div>
  )
}

export default Header
