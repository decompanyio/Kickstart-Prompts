import * as React from 'react'
import PromptList from './components/PromptList'
import Header from './components/Header'
import SearchAndFilter from './components/SearchAndFilter'
import AddPromptModal from './components/AddPromptModal'
import type { Prompt } from './components/PromptList'

// 예제 프롬프트 데이터
const initialPrompts: Prompt[] = [
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
  {
    id: '2',
    title: 'API 함수 작성',
    description: 'axios를 사용한 REST API 함수 생성',
    category: 'API',
    prompt: `다음 조건에 맞는 API 함수를 작성해주세요:

엔드포인트: [API URL]
메서드: [GET/POST/PUT/DELETE]
요청 데이터: [request body 타입]
응답 데이터: [response 타입]

요구사항:
- axios 사용
- TypeScript 타입 정의
- 에러 핸들링 포함
- async/await 패턴 사용`,
  },
  {
    id: '3',
    title: '커스텀 훅 생성',
    description: 'React 커스텀 훅을 만드는 프롬프트',
    category: 'React',
    prompt: `다음 기능을 가진 React 커스텀 훅을 작성해주세요:

훅 이름: [훅명]
기능: [기능 설명]
반환값: [반환값 설명]

요구사항:
- TypeScript로 작성
- 적절한 타입 정의
- 성능 최적화 고려
- 테스트 가능한 구조`,
  },
  {
    id: '4',
    title: 'Prisma 스키마 설계',
    description: 'Prisma를 사용한 데이터베이스 스키마 생성',
    category: 'Database',
    prompt: `다음 요구사항에 맞는 Prisma 스키마를 작성해주세요:

테이블: [테이블명들]
관계: [테이블 간 관계 설명]
제약조건: [제약조건 설명]

요구사항:
- 적절한 데이터 타입 사용
- 인덱스 설정
- 관계 설정 (1:1, 1:N, N:M)
- 기본값 및 제약조건 설정`,
  },
  {
    id: '5',
    title: 'Next.js 페이지 컴포넌트',
    description: 'Next.js 13+ App Router를 사용한 페이지 컴포넌트',
    category: 'Next.js',
    prompt: `다음 조건에 맞는 Next.js 페이지 컴포넌트를 작성해주세요:

페이지 경로: [경로]
기능: [페이지 기능 설명]
데이터 페칭: [SSG/SSR/클라이언트 사이드]

요구사항:
- App Router 사용 (app 디렉토리)
- TypeScript로 작성
- 메타데이터 설정
- 적절한 SEO 최적화
- 로딩 및 에러 상태 처리`,
  },
  {
    id: '6',
    title: 'Tailwind CSS 컴포넌트',
    description: 'Tailwind CSS를 사용한 스타일링 컴포넌트',
    category: 'CSS',
    prompt: `다음 디자인 요구사항에 맞는 컴포넌트를 Tailwind CSS로 스타일링해주세요:

컴포넌트: [컴포넌트 설명]
디자인: [디자인 요구사항]
반응형: [반응형 요구사항]

요구사항:
- Tailwind CSS 클래스만 사용
- 반응형 디자인 고려
- 접근성 고려
- 다크 모드 지원 (선택사항)
- 호버, 포커스 상태 스타일링`,
  },
  {
    id: '7',
    title: 'Jest 테스트 작성',
    description: 'React 컴포넌트를 위한 Jest 테스트 코드',
    category: 'Testing',
    prompt: `다음 컴포넌트에 대한 Jest 테스트를 작성해주세요:

컴포넌트: [컴포넌트명]
기능: [테스트할 기능 설명]
시나리오: [테스트 시나리오]

요구사항:
- React Testing Library 사용
- 단위 테스트 및 통합 테스트
- 다양한 케이스 커버
- 모킹이 필요한 부분 처리
- 스냅샷 테스트 포함`,
  },
  {
    id: '8',
    title: 'Express API 서버',
    description: 'Express.js를 사용한 RESTful API 서버 구축',
    category: 'API',
    prompt: `다음 요구사항에 맞는 Express.js API 서버를 작성해주세요:

기능: [API 기능 설명]
엔드포인트: [필요한 엔드포인트들]
데이터베이스: [사용할 데이터베이스]

요구사항:
- RESTful API 설계
- 미들웨어 설정 (cors, helmet 등)
- 에러 핸들링
- 입력 유효성 검사
- JWT 인증 (필요시)`,
  },
]

const App = () => {
  const [prompts, setPrompts] = React.useState<Prompt[]>(initialPrompts)
  const [searchTerm, setSearchTerm] = React.useState('')
  const [selectedCategory, setSelectedCategory] = React.useState('')
  const [isModalOpen, setIsModalOpen] = React.useState(false)

  // 카테고리 목록 추출
  const categories = React.useMemo(() => {
    const cats = prompts.map((p) => p.category).filter(Boolean)
    return [...new Set(cats)] as string[]
  }, [prompts])

  // 필터링된 프롬프트
  const filteredPrompts = React.useMemo(() => {
    return prompts.filter((prompt) => {
      const matchesSearch =
        prompt.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        prompt.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        prompt.prompt.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory =
        !selectedCategory || prompt.category === selectedCategory
      return matchesSearch && matchesCategory
    })
  }, [prompts, searchTerm, selectedCategory])

  // 새 프롬프트 추가
  const handleAddPrompt = (newPrompt: Omit<Prompt, 'id'>) => {
    const prompt: Prompt = {
      ...newPrompt,
      id: Date.now().toString(),
    }
    setPrompts((prev) => [prompt, ...prev])
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      <div className="container mx-auto py-8 px-4">
        <div className="max-w-7xl mx-auto">
          {/* 헤더 */}
          <Header onAddPrompt={() => setIsModalOpen(true)} />

          {/* 검색 및 필터 */}
          <SearchAndFilter
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            categories={categories}
          />

          {/* 결과 카운트 */}
          <div className="mb-6">
            <p className="text-sm text-muted-foreground">
              {filteredPrompts.length}개의 프롬프트
              {searchTerm && ` "${searchTerm}" 검색 결과`}
              {selectedCategory && ` - ${selectedCategory} 카테고리`}
            </p>
          </div>

          {/* 프롬프트 리스트 */}
          {filteredPrompts.length > 0 ? (
            <PromptList prompts={filteredPrompts} />
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground mb-4">
                검색 조건에 맞는 프롬프트가 없습니다.
              </p>
              <p className="text-sm text-muted-foreground">
                다른 검색어를 시도하거나 새로운 프롬프트를 추가해보세요.
              </p>
            </div>
          )}

          {/* 프롬프트 추가 모달 */}
          <AddPromptModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            onSubmit={handleAddPrompt}
          />
        </div>
      </div>
    </div>
  )
}

export default App
