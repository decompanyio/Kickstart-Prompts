# @repo/prettier-config

프로젝트 전반에서 사용되는 Prettier 설정입니다.

## 개요

이 패키지는 일관된 코드 포맷팅을 위한 공통 Prettier 설정을 제공합니다. 모든 프로젝트에서 동일한 코드 스타일을 유지할 수 있습니다.

## 사용법

### package.json에서 설정

```json
{
  "prettier": "@repo/prettier-config"
}
```

### .prettierrc 파일에서 설정

```json
"@repo/prettier-config"
```

### 설정 확장

```javascript
// prettier.config.js
import baseConfig from '@repo/prettier-config'

export default {
  ...baseConfig,
  // 프로젝트별 추가 설정
  printWidth: 120
}
```

## 포함된 설정

```javascript
{
  semi: false,              // 세미콜론 제거
  singleQuote: true,        // 단일 따옴표 사용
  tabWidth: 2,              // 탭 너비 2
  trailingComma: 'es5',     // ES5 호환 trailing comma
  printWidth: 100,          // 줄 길이 100자
  useTabs: false,           // 스페이스 사용 (탭 아님)
  bracketSpacing: true,     // 객체 괄호 내 공백
  arrowParens: 'avoid'      // 화살표 함수 괄호 최소화
}
```

## VS Code 통합

`.vscode/settings.json`에 다음 설정을 추가하면 저장 시 자동 포맷팅됩니다:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode"
}
```

## 스크립트

```json
{
  "scripts": {
    "format": "prettier --write .",
    "format:check": "prettier --check ."
  }
}
```

## ESLint와의 통합

ESLint와 함께 사용할 때는 `eslint-config-prettier`가 자동으로 포함되어 충돌을 방지합니다.
