import { axiosInstance } from '@/shared/api'

import type { SignupInputData, SignupResponse } from '../model'

export async function postSignup(data: SignupInputData): Promise<SignupResponse> {
  const res = await axiosInstance.post('/auth/signup', data)

  return res.data
}
