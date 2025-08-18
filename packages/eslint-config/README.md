# @repo/eslint-config

프로젝트 전반에서 사용되는 ESLint 설정 모음입니다.

## 개요

이 패키지는 다양한 프로젝트 타입에 맞는 ESLint 설정을 제공합니다. React, Next.js, TypeScript 등 다양한 환경에 대응하는 설정들이 포함되어 있습니다.

## 설치

```bash
pnpm add -D @repo/eslint-config
```

## 사용법

### Base 설정

```javascript
// eslint.config.js
import baseConfig from '@repo/eslint-config/base'

export default baseConfig
```

### React 설정

```javascript
// eslint.config.js
import reactConfig from '@repo/eslint-config/react'

export default reactConfig
```

### Next.js 설정

```javascript
// eslint.config.js
import nextConfig from '@repo/eslint-config/next'

export default nextConfig
```

### React Internal 설정 (라이브러리용)

```javascript
// eslint.config.js
import reactInternalConfig from '@repo/eslint-config/react-internal'

export default reactInternalConfig
```

## 포함된 설정

- **base.js**: 기본 ESLint 설정 (TypeScript, Prettier 통합)
- **react.js**: React 애플리케이션용 설정
- **next.js**: Next.js 애플리케이션용 설정  
- **react-internal.js**: React 라이브러리 개발용 설정

## 주요 규칙

- TypeScript 엄격 모드
- Prettier와의 충돌 방지
- React Hook 규칙
- 접근성 규칙
- Import/Export 정렬

## 커스터마이징

프로젝트별로 추가 규칙이 필요한 경우:

```javascript
// eslint.config.js
import baseConfig from '@repo/eslint-config/base'

export default [
  ...baseConfig,
  {
    rules: {
      // 프로젝트별 추가 규칙
      'no-console': 'warn'
    }
  }
]
```
