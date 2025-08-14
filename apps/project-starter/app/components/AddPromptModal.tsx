import * as React from 'react'
import { X, Plus } from 'lucide-react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@repo/ui/card'
import { Button } from '@repo/ui/button'

interface AddPromptModalProps {
  isOpen: boolean
  onClose: () => void
  onSubmit: (prompt: {
    title: string
    description: string
    category: string
    prompt: string
  }) => void
}

const AddPromptModal = ({ isOpen, onClose, onSubmit }: AddPromptModalProps) => {
  const [formData, setFormData] = React.useState({
    title: '',
    description: '',
    category: '',
    prompt: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.title && formData.prompt) {
      onSubmit(formData)
      setFormData({ title: '', description: '', category: '', prompt: '' })
      onClose()
    }
  }

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <div>
            <CardTitle className="text-xl">새 프롬프트 추가</CardTitle>
            <CardDescription>
              새로운 개발 프롬프트를 추가해보세요.
            </CardDescription>
          </div>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">
                제목 *
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-input bg-background rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="프롬프트 제목을 입력하세요"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">
                설명
              </label>
              <input
                type="text"
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-input bg-background rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="프롬프트에 대한 간단한 설명을 입력하세요"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">
                카테고리
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-input bg-background rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              >
                <option value="">카테고리 선택</option>
                <option value="React">React</option>
                <option value="Next.js">Next.js</option>
                <option value="TypeScript">TypeScript</option>
                <option value="API">API</option>
                <option value="Database">Database</option>
                <option value="CSS">CSS</option>
                <option value="Testing">Testing</option>
                <option value="DevOps">DevOps</option>
                <option value="기타">기타</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">
                프롬프트 내용 *
              </label>
              <textarea
                name="prompt"
                value={formData.prompt}
                onChange={handleChange}
                rows={8}
                className="w-full px-3 py-2 border border-input bg-background rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                placeholder="프롬프트 내용을 입력하세요..."
                required
              />
            </div>

            <div className="flex justify-end space-x-2 pt-4">
              <Button type="button" variant="outline" onClick={onClose}>
                취소
              </Button>
              <Button type="submit">
                <Plus className="mr-2 h-4 w-4" />
                추가하기
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

export default AddPromptModal
