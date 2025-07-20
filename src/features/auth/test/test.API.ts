import axiosInstance from '@/shared/api/axios-instance'

export async function postTest(): Promise<void> {
  await axiosInstance.post('/auth/test')
}
