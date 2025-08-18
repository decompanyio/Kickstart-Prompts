# @repo/assets

공통 에셋(폰트, 아이콘, 이미지 등)을 관리하는 패키지입니다.

## 개요

이 패키지는 프로젝트 전반에서 사용되는 정적 에셋들을 중앙 집중식으로 관리합니다. 폰트, 아이콘, 이미지, 로고 등을 포함합니다.

## 설치

```bash
pnpm add @repo/assets
```

## 사용법

### 폰트

```css
/* CSS에서 폰트 import */
@import '@repo/assets/fonts';

body {
  font-family: 'Pretendard Variable', sans-serif;
}
```

### 에셋 파일 직접 접근

```typescript
// 이미지 import
import logoImage from '@repo/assets/images/logo.png'

// 아이콘 import
import iconFile from '@repo/assets/icons/check.svg'
```

## 구조

```text
packages/assets/
├── index.js          # 메인 엔트리 포인트
├── fonts/
│   ├── fonts.css     # 폰트 CSS 정의
│   └── pretendard/
│       ├── LICENSE.txt
│       └── PretendardVariable.woff2
├── icons/            # SVG 아이콘들
├── images/           # 이미지 파일들
└── logos/            # 로고 파일들
```

## 폰트

현재 포함된 폰트:
- **Pretendard Variable**: 한국어와 영어를 지원하는 가변 폰트

## 에셋 추가

새로운 에셋을 추가할 때는 적절한 폴더에 파일을 추가하고 `package.json`의 exports 필드를 업데이트해주세요.

## 라이선스

각 에셋의 라이선스는 해당 폴더의 LICENSE 파일을 참조하세요.
