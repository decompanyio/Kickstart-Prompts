# @repo/ui

모던하고 확장 가능한 React 컴포넌트 라이브러리입니다. shadcn/ui 패턴을 기반으로 구축되었으며, TypeScript와 Tailwind CSS를 사용합니다.

## 🏗️ 아키텍처

### 기술 스택
- **React 19** - 컴포넌트 라이브러리
- **TypeScript** - 타입 안전성
- **Tailwind CSS** - 유틸리티 우선 스타일링
- **CVA (Class Variance Authority)** - 타입 안전한 variant 관리
- **Radix UI** - 접근 가능한 primitive 컴포넌트
- **clsx + tailwind-merge** - 조건부 클래스 병합

### 디자인 원칙
1. **Compound Components** - 복합 컴포넌트 패턴 사용
2. **Polymorphic Components** - `asChild` prop으로 다형성 지원
3. **Variant-driven Design** - CVA를 통한 일관된 변형 관리
4. **Accessible by Default** - Radix UI 기반 접근성 보장

## 📦 컴포넌트

### Button
다양한 스타일 변형을 지원하는 버튼 컴포넌트입니다.

```tsx
import { Button } from '@repo/ui'

// Variants
<Button variant="default">Default</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="outline">Outline</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>

// Sizes
<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
<Button size="icon">Icon</Button>

// Polymorphic usage
<Button asChild>
  <a href="/link">Link Button</a>
</Button>
```

#### Props
```tsx
interface ButtonProps {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'
  size?: 'default' | 'sm' | 'lg' | 'icon'
  asChild?: boolean
}
```

### Card
복합 컴포넌트 패턴을 사용하는 카드 컴포넌트입니다.

```tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@repo/ui'

<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description goes here</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card content</p>
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>
```

### Code
인라인 코드 또는 코드 블록을 표시하는 컴포넌트입니다.

```tsx
import { Code } from '@repo/ui'

<Code>inline code</Code>
```

## 🎨 디자인 토큰

### 색상 시스템
CSS Custom Properties를 사용한 시맨틱 색상 시스템:

```css
/* Primary Colors */
--primary: 222.2 47.4% 11.2%
--primary-foreground: 210 40% 98%

/* Secondary Colors */
--secondary: 210 40% 96%
--secondary-foreground: 222.2 84% 4.9%

/* UI Colors */
--background: 0 0% 100%
--foreground: 222.2 84% 4.9%
--muted: 210 40% 96%
--muted-foreground: 215.4 16.3% 46.9%
--accent: 210 40% 96%
--accent-foreground: 222.2 84% 4.9%

/* Semantic Colors */
--destructive: 0 84.2% 60.2%
--destructive-foreground: 210 40% 98%

/* Border & Input */
--border: 214.3 31.8% 91.4%
--input: 214.3 31.8% 91.4%
--ring: 222.2 84% 4.9%
```

### 다크 모드
`.dark` 클래스를 통해 다크 모드 지원:

```css
.dark {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
  /* ... 기타 다크 모드 토큰 */
}
```

### 타이포그래피
- **폰트**: Pretendard Variable (한국어 최적화)
- **폰트 웨이트**: 100-900 (Variable Font)
- **폰트 로딩**: `font-display: swap`

### 간격 & 크기
- **Border Radius**: `--radius` 기반 계산형 값
  - `lg`: `var(--radius)`
  - `md`: `calc(var(--radius) - 2px)`
  - `sm`: `calc(var(--radius) - 4px)`

## 🛠️ 유틸리티

### cn() 함수
조건부 클래스 이름을 안전하게 병합하는 유틸리티 함수:

```tsx
import { cn } from '@repo/ui'

const className = cn(
  'base-class',
  {
    'conditional-class': condition,
  },
  props.className
)
```

## 📝 사용 가이드

### 1. 새 컴포넌트 추가

```tsx
// src/new-component.tsx
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "./lib/utils"

const newComponentVariants = cva(
  "base-styles",
  {
    variants: {
      variant: {
        default: "variant-styles",
      },
      size: {
        default: "size-styles",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface NewComponentProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof newComponentVariants> {}

const NewComponent = React.forwardRef<HTMLDivElement, NewComponentProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        className={cn(newComponentVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
NewComponent.displayName = "NewComponent"

export { NewComponent }
```

### 2. index.ts에 export 추가

```tsx
// src/index.ts
export { NewComponent } from './new-component'
```

### 3. 앱에서 사용

```tsx
import { NewComponent } from '@repo/ui'

<NewComponent variant="default" size="lg" />
```

## 🎯 컨벤션

### 네이밍
- **컴포넌트**: PascalCase (`Button`, `Card`)
- **Props**: camelCase (`variant`, `asChild`)
- **Variants**: kebab-case (`primary-foreground`)

### 파일 구조
```
src/
├── index.ts              # 메인 export
├── button.tsx           # 단일 컴포넌트
├── card.tsx             # 복합 컴포넌트
└── lib/
    └── utils.ts         # 유틸리티 함수
```

### TypeScript 패턴
- `React.forwardRef` 사용으로 ref 전달 지원
- `VariantProps<typeof variants>` 타입 추론
- HTML 속성 확장 (`extends React.ButtonHTMLAttributes`)

## 🔄 확장 가이드

### 새로운 Variant 추가
```tsx
const buttonVariants = cva(
  "base-styles",
  {
    variants: {
      variant: {
        default: "existing-variant",
        newVariant: "new-variant-styles", // 새 variant 추가
      },
    },
  }
)
```

### 새로운 Size 추가
```tsx
const buttonVariants = cva(
  "base-styles",
  {
    variants: {
      size: {
        default: "existing-size",
        xl: "h-12 rounded-lg px-10", // 새 size 추가
      },
    },
  }
)
```

### 복합 컴포넌트 패턴
```tsx
// 메인 컴포넌트
const Card = React.forwardRef<HTMLDivElement, CardProps>(...)

// 서브 컴포넌트들
const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(...)
const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(...)

// 함께 export
export { Card, CardHeader, CardContent }
```

## 🚀 성능 최적화

### Tree Shaking
각 컴포넌트는 독립적으로 import 가능:

```tsx
// ✅ Good - Tree shaking 가능
import { Button } from '@repo/ui'

// ❌ Bad - 전체 라이브러리 import
import * as UI from '@repo/ui'
```

### 번들 크기
- **Base CSS**: Tailwind의 purging으로 사용되지 않는 스타일 제거
- **JavaScript**: 사용되는 컴포넌트만 번들에 포함
- **폰트**: Variable Font로 파일 크기 최적화

## 🔧 개발 도구

### Scripts
```bash
# 타입 체크
pnpm run check-types

# 린팅
pnpm run lint

# 컴포넌트 생성 (Turbo Generator)
pnpm run generate:component
```

## 📚 참고 자료

- [shadcn/ui](https://ui.shadcn.com/) - 디자인 시스템 패턴
- [CVA Documentation](https://cva.style/) - Variant 관리
- [Radix UI](https://www.radix-ui.com/) - Primitive 컴포넌트
- [Tailwind CSS](https://tailwindcss.com/) - 유틸리티 CSS

---

> 이 디자인 시스템은 확장성과 일관성을 고려하여 설계되었습니다. 새로운 컴포넌트를 추가할 때는 기존 패턴을 따라 일관성을 유지해 주세요.
