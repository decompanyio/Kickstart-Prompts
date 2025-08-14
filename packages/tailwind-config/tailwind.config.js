/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // UI 컴포넌트들
    "../../packages/ui/src/**/*.{js,ts,jsx,tsx}",
    // 모든 앱들
    "../../apps/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {}
  },
  plugins: [],
};
