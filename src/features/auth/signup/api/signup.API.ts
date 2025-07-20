import axiosInstance from '@/shared/api/axios-instance'

import type { SignupInputData, SignupResponse } from '../model/signup.type'

export async function postSignup(data: SignupInputData): Promise<SignupResponse> {
  const res = await axiosInstance.post('/auth/signup', data)

  return res.data
}
