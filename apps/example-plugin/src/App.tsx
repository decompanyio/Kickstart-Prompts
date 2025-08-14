import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen flex-center">
      <div className="container-center">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          {/* 로고 섹션 */}
          <div className="flex space-x-8">
            <a
              href="https://vite.dev"
              target="_blank"
              className="hover:opacity-80 transition-opacity"
            >
              <img src={viteLogo} className="w-24 h-24" alt="Vite logo" />
            </a>
            <a
              href="https://react.dev"
              target="_blank"
              className="hover:opacity-80 transition-opacity"
            >
              <img
                src={reactLogo}
                className="w-24 h-24 animate-spin-slow"
                alt="React logo"
              />
            </a>
          </div>

          {/* 타이틀 */}
          <h1 className="text-4xl">Vite + React + Tailwind CSS + Test</h1>

          {/* 폰트 테스트 섹션 */}
          <div className="card max-w-xl mx-auto">
            <h3 className="text-lg font-semibold mb-4">폰트 테스트</h3>
            <div className="space-y-3 text-left">
              <div>
                <p className="text-sm text-gray-600">
                  기본 폰트 (sans - Pretendard)
                </p>
                <p className="font-sans text-lg">
                  안녕하세요! 폴라노트 플러그인입니다. (기본 폰트)
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Pretendard (명시적)</p>
                <p className="font-pretendard text-lg">
                  안녕하세요! 폴라노트 플러그인입니다.
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Pretendard Bold</p>
                <p className="font-pretendard font-bold text-lg">
                  안녕하세요! 폴라노트 플러그인입니다.
                </p>
              </div>
            </div>
          </div>

          {/* 카드 컴포넌트 */}
          <div className="card card-hover max-w-md mx-auto">
            <button
              onClick={() => setCount((count) => count + 1)}
              className="btn btn-primary w-full mb-4"
            >
              count is {count}
            </button>
            <p className="text-body">
              Edit{' '}
              <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">
                src/App.tsx
              </code>{' '}
              and save to test HMR
            </p>
          </div>

          {/* 추가 UI 컴포넌트들 데모 */}
          <div className="space-y-4">
            <h2 className="text-subheading">폴라노트 플러그인 UI 데모</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="card">
                <h3 className="text-lg font-semibold mb-2">Primary Button</h3>
                <button className="btn btn-primary">Primary</button>
              </div>

              <div className="card">
                <h3 className="text-lg font-semibold mb-2">Secondary Button</h3>
                <button className="btn btn-secondary">Secondary</button>
              </div>

              <div className="card">
                <h3 className="text-lg font-semibold mb-2">Outline Button</h3>
                <button className="btn btn-outline">Outline</button>
              </div>
            </div>

            <div className="card">
              <h3 className="text-lg font-semibold mb-4">Input Field</h3>
              <input
                type="text"
                placeholder="폴라노트 플러그인 이름을 입력하세요"
                className="input"
              />
            </div>
          </div>

          <p className="text-caption">
            Click on the Vite and React logos to learn more
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
