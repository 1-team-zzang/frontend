import axiosInstance from '@/shared/api/axios-instance'
import { devLog } from '@/shared/utils/dev-log'

import type { Schedule } from '@/entities/schedule'

export async function getMySchedule(): Promise<Schedule[]> {
  try {
    const res = await axiosInstance.get('/schedules', {
      params: {
        start: '2025-05-01',
        end: '2025-12-31',
      },
    })
    return res.data?.data?.scheduleResponseList ?? []
  } catch (error) {
    devLog('log', '❌ 요청 실패', error)
    throw error
  }
}
