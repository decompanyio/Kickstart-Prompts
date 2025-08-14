import tailwindConfig from '@repo/tailwind-config'

/** @type {import('tailwindcss').Config} */
export default {
  ...tailwindConfig,
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    '../../packages/ui/src/**/*.{js,ts,jsx,tsx}',
  ],
}
