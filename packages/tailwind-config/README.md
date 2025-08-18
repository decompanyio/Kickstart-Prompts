# @repo/tailwind-config

프로젝트 전반에서 사용되는 Tailwind CSS 설정입니다.

## 개요

이 패키지는 일관된 디자인 시스템을 위한 공통 Tailwind CSS 설정을 제공합니다. 커스텀 색상, 폰트, 간격 등의 디자인 토큰이 포함되어 있습니다.

## 사용법

### tailwind.config.js에서 설정

```javascript
import baseConfig from '@repo/tailwind-config'

export default {
  ...baseConfig,
  content: [
    // 프로젝트별 content 경로
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ]
}
```

### CSS에서 기본 스타일 import

```css
/* globals.css */
@import '@repo/tailwind-config/globals.css';
```

## 포함된 설정

### 색상 팔레트
- 브랜드 색상
- 그레이스케일
- 시맨틱 색상 (success, warning, error)

### 타이포그래피
- Pretendard Variable 폰트 패밀리
- 반응형 타이포그래피 스케일

### 간격 시스템
- 일관된 spacing 토큰
- 반응형 레이아웃 유틸리티

### 컴포넌트 클래스
- 버튼 변형
- 카드 스타일
- 폼 요소 스타일

## 구조

```text
packages/tailwind-config/
├── index.js           # Tailwind 설정
├── globals.css        # 글로벌 CSS 스타일
├── postcss.config.js  # PostCSS 설정
└── package.json
```

## 커스터마이징

프로젝트별로 설정을 확장할 수 있습니다:

```javascript
// tailwind.config.js
import baseConfig from '@repo/tailwind-config'

export default {
  ...baseConfig,
  theme: {
    ...baseConfig.theme,
    extend: {
      ...baseConfig.theme.extend,
      colors: {
        ...baseConfig.theme.extend.colors,
        custom: {
          primary: '#your-color'
        }
      }
    }
  }
}
```

## PostCSS 통합

PostCSS 설정도 함께 제공됩니다:

```javascript
// postcss.config.js
export { default } from '@repo/tailwind-config/postcss.config.js'
```

## 다크 모드

다크 모드가 기본적으로 지원됩니다:

```html
<div class="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
  다크 모드 지원 컨텐츠
</div>
```
