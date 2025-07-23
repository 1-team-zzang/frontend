import axiosInstance from '@/shared/api/axios-instance'

import type { SigninFormDataType } from '../model/signin.type'
import type { User } from '@/entities/user/models/user.types'

export async function postSignin(data: SigninFormDataType): Promise<User> {
  const res = await axiosInstance.post('/auth/login', data)
  const token = res.headers.authorization?.split(' ')[1]

  if (token) {
    localStorage.setItem('token', token)
  }

  return res.data.data // 유저 정보만 반환
}
