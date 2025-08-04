import { axiosInstance } from '@/shared/api'

export async function postLogout(): Promise<void> {
  await axiosInstance.post('/auth/logout')
  localStorage.removeItem('token')
}
