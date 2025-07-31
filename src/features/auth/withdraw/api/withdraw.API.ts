import axiosInstance from '@/shared/api/axios-instance'

export async function deleteWithdraw(): Promise<void> {
  await axiosInstance.post('/auth/withdraw')
}
