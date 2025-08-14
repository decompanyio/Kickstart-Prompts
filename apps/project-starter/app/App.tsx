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
    title: '데이터베이스 스키마 설계',
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
