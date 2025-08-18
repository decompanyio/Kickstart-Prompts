import axios from 'axios'

// 기본 axios 인스턴스
export const api = axios.create({
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

// 요청 인터셉터
api.interceptors.request.use(
  (config) => {
    // 요청 전에 실행할 로직 (토큰 추가 등)
    console.log('Request:', config.method?.toUpperCase(), config.url)
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 응답 인터셉터
api.interceptors.response.use(
  (response) => {
    // 성공 응답 처리
    console.log('Response:', response.status, response.config.url)
    return response
  },
  (error) => {
    // 에러 응답 처리
    console.error('API Error:', error.response?.status, error.config?.url)
    
    if (error.response?.status === 401) {
      // 인증 에러 처리
      console.error('Authentication error')
    }
    
    return Promise.reject(error)
  }
)

export default api
