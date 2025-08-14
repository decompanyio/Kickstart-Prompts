import PromptList from './components/PromptList'

// 예제 프롬프트 데이터
const samplePrompts = [
  {
    id: '1',
    title: 'React 컴포넌트 생성',
    description: 'TypeScript로 React 함수형 컴포넌트를 생성하는 프롬프트',
    category: 'React',
    prompt: `다음 조건에 맞는 React 함수형 컴포넌트를 TypeScript로 작성해주세요:

컴포넌트명: [컴포넌트명]
Props: [props 설명]
기능: [기능 설명]

요구사항:
- TypeScript 타입 정의 포함
- Props interface 정의
- 적절한 JSX 구조
- 스타일링은 Tailwind CSS 사용`,
  },
]

const App = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-8 px-4">
        <div className="max-w-6xl mx-auto">
          {/* 헤더 */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              개발 프롬프트 모음
            </h1>
            <p className="text-lg text-muted-foreground">
              개발 작업에 유용한 프롬프트들을 모아놨습니다. 복사 버튼을 클릭해서
              사용하세요.
            </p>
          </div>

          {/* 프롬프트 리스트 */}
          <PromptList prompts={samplePrompts} />
        </div>
      </div>
    </div>
  )
}

export default App
