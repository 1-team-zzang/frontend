import axiosInstance from '@/shared/api/axios-instance'

import type { PasswordChangeRequestData, UserProfileRequestData } from '../types/profile.types'
import type { User } from '@/entities/user/models/user.types'

export async function putUserProfile(data: UserProfileRequestData): Promise<User> {
  const res = await axiosInstance.put('/user/profile', data)

  return res.data.data
}

export async function putUserPassword(data: PasswordChangeRequestData): Promise<void> {
  await axiosInstance.put('/user/password', data)
}
