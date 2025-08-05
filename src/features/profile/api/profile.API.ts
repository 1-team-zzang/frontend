import { axiosInstance } from '@/shared/api'

import type { PasswordChangeRequestData, UserProfileRequestData } from '../types'
import type { User } from '@/entities/user'

export async function putUserProfile(data: UserProfileRequestData): Promise<User> {
  const res = await axiosInstance.put('/user/profile', data)

  return res.data.data
}

export async function putUserPassword(data: PasswordChangeRequestData): Promise<void> {
  await axiosInstance.put('/user/password', data)
}
