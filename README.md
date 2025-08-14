
# KICKSTART-PROMPTS

KICKSTART-PROMPTS는 GitHub Copilot, ChatGPT 등 AI 코딩 어시스턴트를 활용해
신규 프로젝트를 빠르고 일관되게 셋업할 수 있도록 돕는 프롬프트 모음집입니다.

## 🚀 빠른 시작

### 요구사항

- Node.js >= 22.0.0
- pnpm >= 10.14.0

### 설치

```bash
# 의존성 설치
pnpm install
```

### 실행

```bash
# 모든 앱 개발 서버 실행
pnpm dev

# 특정 앱만 실행
pnpm dev:project-starter  # 프로젝트 스타터 앱
pnpm dev:ui              # UI 컴포넌트 라이브러리

# 빌드
pnpm build               # 모든 패키지 빌드
pnpm build:project-starter  # 프로젝트 스타터만 빌드
pnpm build:ui            # UI 라이브러리만 빌드

# 린트 및 포맷팅
pnpm lint                # 전체 린트 검사
pnpm lint:fix            # 린트 자동 수정
pnpm format              # 코드 포맷팅
pnpm format:check        # 포맷팅 검사

# 타입 체크
pnpm check-types         # 전체 타입 체크
pnpm check-types:project-starter  # 특정 앱 타입 체크
```

## 📦 패키지 구조

이 레포지토리는 Turborepo를 사용한 모노레포로 구성되어 있습니다.

### Apps

- **`apps/project-starter`** - React + Vite 기반 프로젝트 스타터 애플리케이션

### Packages

- **`packages/ui`** - 공통 UI 컴포넌트 라이브러리
  - Button, Card, Code 등 재사용 가능한 컴포넌트
  - TypeScript + React 기반

- **`packages/eslint-config`** - ESLint 설정 패키지
  - Base, React, Next.js 등 다양한 환경별 설정
  - 일관된 코드 품질 유지

- **`packages/prettier-config`** - Prettier 설정 패키지
  - 통일된 코드 포맷팅 규칙

- **`packages/tailwind-config`** - Tailwind CSS 설정 패키지
  - 공통 디자인 시스템 및 스타일 설정

- **`packages/typescript-config`** - TypeScript 설정 패키지
  - Base, React, Next.js, Vite 등 환경별 TypeScript 설정

- **`packages/assets`** - 공통 에셋 패키지
  - Pretendard 폰트 및 기타 공통 리소스

## 🔄 의존성 업데이트

### 전체 워크스페이스 의존성 업데이트

```bash
# 모든 워크스페이스의 의존성을 semver 범위 내에서 업데이트
pnpm update --recursive

# 모든 의존성을 최신 버전으로 업데이트 (메이저 버전 포함)
pnpm update --recursive --latest

# 개발 의존성만 업데이트
pnpm update --recursive --dev
```

### 특정 패키지 업데이트

```bash
# 특정 패키지를 모든 워크스페이스에서 업데이트
pnpm update --recursive <package-name>

# 예시: React 관련 패키지 업데이트
pnpm update --recursive react react-dom @types/react @types/react-dom
```

### 특정 워크스페이스만 업데이트

```bash
# project-starter 앱의 의존성만 업데이트
pnpm --filter project-starter update

# UI 패키지의 의존성만 업데이트
pnpm --filter @repo/ui update
```

### 업데이트 후 검증

의존성 업데이트 후에는 다음 명령어로 검증하는 것을 권장합니다:

```bash
# 1. 타입 체크
pnpm check-types

# 2. 린트 검사
pnpm lint

# 3. 빌드 테스트
pnpm build

# 4. 개발 서버 실행 테스트
pnpm dev
```

## 🛠️ 개발 가이드

### 새로운 패키지 추가

1. `packages/` 디렉토리에 새 폴더 생성
2. `package.json` 파일 생성 및 설정
3. 루트의 `pnpm-workspace.yaml`에 자동으로 포함됨

### 새로운 앱 추가

1. `apps/` 디렉토리에 새 폴더 생성
2. 필요한 설정 파일들 구성
3. 루트 `package.json`에 스크립트 추가

### 코드 스타일

- ESLint와 Prettier가 설정되어 있음
- 커밋 전 `pnpm lint:fix`와 `pnpm format` 실행 권장
- TypeScript 엄격 모드 사용
