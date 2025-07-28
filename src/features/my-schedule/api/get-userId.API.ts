import axiosInstance from '@/shared/api/axios-instance'
import { devLog } from '@/shared/utils/dev-log'

export default async function getUserId() {
  try {
    const res = await axiosInstance.get('/schedules/share')
    return res.data.data.userId
  } catch (error) {
    devLog('log', '❌ 요청 실패', error)
    throw error
  }
}
