# @repo/typescript-config

프로젝트 전반에서 사용되는 TypeScript 설정 모음입니다.

## 개요

이 패키지는 다양한 프로젝트 타입에 맞는 TypeScript 설정을 제공합니다. React 애플리케이션, Next.js, Vite, 라이브러리 개발 등 각각의 환경에 최적화된 설정이 포함되어 있습니다.

## 사용법

### Base 설정

```json
// tsconfig.json
{
  "extends": "@repo/typescript-config/base.json",
  "compilerOptions": {
    "outDir": "./dist"
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

### Next.js 설정

```json
// tsconfig.json
{
  "extends": "@repo/typescript-config/nextjs.json",
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    ".next/types/**/*.ts"
  ]
}
```

### Vite 애플리케이션 설정

```json
// tsconfig.json
{
  "extends": "@repo/typescript-config/vite-app.json",
  "include": [
    "src/**/*.ts",
    "src/**/*.tsx",
    "src/**/*.vue"
  ]
}
```

### React 라이브러리 설정

```json
// tsconfig.json
{
  "extends": "@repo/typescript-config/react-library.json",
  "compilerOptions": {
    "outDir": "./dist",
    "declarationDir": "./dist/types"
  }
}
```

## 포함된 설정

### base.json
- 기본 TypeScript 설정
- 엄격한 타입 체크
- 최신 ES 기능 지원
- Node.js 모듈 해상도

### nextjs.json  
- Next.js 최적화 설정
- JSX 변환 설정
- Next.js 플러그인 지원

### vite-app.json
- Vite 환경 최적화
- ES 모듈 지원
- 빠른 빌드를 위한 설정

### react-library.json
- 라이브러리 개발용 설정
- Declaration 파일 생성
- Tree-shaking 지원

## 주요 설정값

```json
{
  "strict": true,                    // 엄격 모드
  "noUncheckedIndexedAccess": true, // 배열 접근 안전성
  "exactOptionalPropertyTypes": true, // 선택적 속성 엄격 체크
  "verbatimModuleSyntax": true,     // 모듈 구문 보존
  "allowImportingTsExtensions": true, // TS 확장자 import 허용
  "resolveJsonModule": true,        // JSON 모듈 지원
  "isolatedModules": true,          // 독립 모듈 컴파일
  "skipLibCheck": true              // 라이브러리 타입 체크 건너뛰기
}
```

## Path Mapping

프로젝트에서 path mapping을 사용하려면:

```json
// tsconfig.json
{
  "extends": "@repo/typescript-config/base.json",
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"],
      "@/components/*": ["./src/components/*"]
    }
  }
}
```

## 개발 워크플로우

```bash
# 타입 체크
pnpm tsc --noEmit

# 빌드 (선언 파일 포함)
pnpm tsc --build

# Watch 모드
pnpm tsc --watch
```
