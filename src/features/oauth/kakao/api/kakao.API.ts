import { axiosInstance } from '@/shared/api'

import type { User } from '@/entities/user'

export async function postKakaoLogin(code: string): Promise<User> {
  const res = await axiosInstance.post('/auth/kakao/signup', { code })

  const token = res.headers.authorization?.split(' ')[1]

  if (token) {
    localStorage.setItem('token', token)
  }

  return res.data.data // 유저 정보만 반환
}
