import { useState, useMemo } from 'react'

import PromptList from '@app/components/PromptList'
import SearchAndFilter from '@app/components/SearchAndFilter'
import { Loading, ErrorMessage } from '@repo/ui'

import { useGetPrompts } from '@app/hooks/usePrompt.ts'

const App = () => {
  const { data: prompts, loading, error } = useGetPrompts()
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')

  // 카테고리 목록 추출
  const categories = useMemo(() => {
    const cats = prompts.map((p) => p.category).filter(Boolean)
    return [...new Set(cats)] as string[]
  }, [prompts])

  // 필터링된 프롬프트
  const filteredPrompts = useMemo(() => {
    return prompts.filter((prompt) => {
      const matchesSearch =
        prompt.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        prompt.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        prompt.prompt.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory =
        !selectedCategory || prompt.category === selectedCategory
      return matchesSearch && matchesCategory
    })
  }, [prompts, searchTerm, selectedCategory])

  if (loading) {
    return <Loading />
  }

  if (error) {
    return <ErrorMessage message="프롬프트를 불러오는 데 실패했습니다." />
  }

  return (
    <div>
      {/* 검색 및 필터 */}
      <SearchAndFilter
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        categories={categories}
      />

      {/* 결과 카운트 */}
      <div className="mb-6">
        <p className="text-sm text-muted-foreground">
          {filteredPrompts.length}개의 프롬프트
          {searchTerm && ` "${searchTerm}" 검색 결과`}
          {selectedCategory && ` - ${selectedCategory} 카테고리`}
        </p>
      </div>

      {/* 프롬프트 리스트 */}
      {filteredPrompts.length > 0 ? (
        <PromptList prompts={filteredPrompts} />
      ) : (
        <div className="text-center py-12">
          <p className="text-lg text-muted-foreground mb-4">
            검색 조건에 맞는 프롬프트가 없습니다.
          </p>
          <p className="text-sm text-muted-foreground">
            다른 검색어를 시도하거나 새로운 프롬프트를 추가해보세요.
          </p>
        </div>
      )}
    </div>
  )
}

export default App
