# @repo/api

공통 API 설정 및 클라이언트 라이브러리입니다.

## 개요

이 패키지는 프로젝트 전반에서 사용되는 API 클라이언트 설정을 제공합니다. Supabase와 Axios 설정이 포함되어 있습니다.

## 사용법

### Supabase 클라이언트

```typescript
import { supabase } from '@repo/api/supabase'

// Supabase 클라이언트 사용
const { data, error } = await supabase.from('your_table').select('*')
```

### Axios 클라이언트

```typescript
import { apiClient } from '@repo/api/axios'

// Axios 클라이언트 사용
const response = await apiClient.get('/api/endpoint')
```

## 구조

```
packages/api/
├── index.ts          # 메인 엔트리 포인트
├── supabase/
│   └── config.ts     # Supabase 클라이언트 설정
└── axios/
    └── config.ts     # Axios 클라이언트 설정
```

## 환경 변수

Supabase 설정을 위해 다음 환경 변수가 필요합니다:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## 개발

```bash
# 타입 체크
pnpm check-types

# 린팅
pnpm lint

# 포맷팅
pnpm format
```
