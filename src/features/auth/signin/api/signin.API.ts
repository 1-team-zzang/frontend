import axiosInstance from '@/shared/api/axios-instance'

import type { SigninFormDataType } from '../model/signin.type'

export async function postSignin(data: SigninFormDataType): Promise<void> {
  const res = await axiosInstance.post('/auth/login', data)
  const token = res.headers.authorization?.split(' ')[1]

  if (token) {
    localStorage.setItem('token', token)
  }
}
