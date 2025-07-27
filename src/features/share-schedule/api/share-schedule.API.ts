import axiosInstance from '@/shared/api/axios-instance'
import { devLog } from '@/shared/utils/dev-log'

import type { Schedule } from '@/entities/schedule'

const getuserId = async () => {
  const res = await axiosInstance.get('/schedules/share')
  devLog('log', 'userId', res.data.data)
  return res.data.data
}

export async function getShareSchedule(): Promise<Schedule[]> {
  const { userId } = await getuserId()
  try {
    const res = await axiosInstance.get(`/schedules/user/${userId}`, {
      params: {
        start: '2025-05-01',
        end: '2025-12-31',
      },
    })
    devLog('log', 'data', res.data.data)

    return res.data?.data?.scheduleResponseList ?? []
  } catch (error) {
    devLog('log', '❌ 요청 실패', error)
    throw error
  }
}
