import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import unusedImports from 'eslint-plugin-unused-imports'

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    plugins: {
      react,
      'react-hooks': reactHooks,
      'unused-imports': unusedImports,
    },
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      // React 17 이상에서는 필요 없는 규칙 제거
      'react/react-in-jsx-scope': 'off',

      // 화살표 함수만 허용
      'func-style': ['error', 'expression'],
      'arrow-body-style': 'off', // 화살표 함수의 body 스타일 제한 해제

      // React 컴포넌트도 화살표 함수만 허용
      'react/function-component-definition': [
        2,
        {
          namedComponents: 'arrow-function',
        },
      ],

      // 일반 함수 선언 방식 금지
      'prefer-arrow-callback': 'error',

      // 미사용 변수/import 자동 제거
      '@typescript-eslint/no-unused-vars': 'off', // typescript 기본 규칙은 끄고
      'unused-imports/no-unused-imports': 'error', // import 구문 자동 제거
      'unused-imports/no-unused-vars': [
        'error',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],

      // any 타입 허용
      '@typescript-eslint/no-explicit-any': 'off',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  {
    ignores: ['tailwind.config.ts', 'tailwind.config.js', 'dist/**', 'node_modules/**'],
  },
]
