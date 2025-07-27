import axios from 'axios'

import { devLog } from '@/shared/utils/dev-log'

const API_BASE_URL = import.meta.env.VITE_API_URL
const REQUEST_TIMEOUT = Number(import.meta.env.VITE_API_TIMEOUT) || 7000

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true, // 쿠키 사용
  timeout: REQUEST_TIMEOUT,
  headers: {
    'Content-Type': 'application/json',
  },
})

// 요청 인터셉터
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    devLog('error', '요청 인터셉트에서 에러 발생', error)
    return Promise.reject(error)
  },
)

// 응답 인터셉터
axiosInstance.interceptors.response.use(
  (response) => {
    return response
  },

  async (error) => {
    const { response } = error

    if (!response) {
      // 서버 자체로부터 응답 없음
      devLog('error', '서버로부터 응답이 없습니다', error)
      return Promise.reject(error)
    }

    const { status, config } = response

    if (status === 401) {
      // 토큰 만료 및 미인증
      localStorage.removeItem('token')
      devLog('error', '권한이 없습니다')
    } else if (status === 403) {
      // 로그인됐으나 권한 x
      devLog('error', '접근 권한이 없습니다', error)
    } else if (status === 404) {
      // 존재하지 않는 API // 존재하지 않는 자원을 요청했을때
      devLog('error', `404 Not found: ${config.url}`, error)
    } else if (status >= 500) {
      // 백엔드 내부 오류
      devLog('error', '서버에 문제가 발생했습니다. 잠시 후 다시 시도해주세요.')
    }

    return Promise.reject(error)
  },
)

export default axiosInstance
