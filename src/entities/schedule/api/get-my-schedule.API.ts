import axiosInstance from '@/shared/api/axios-instance'
import { toast } from '@/shared/ui'
import { devLog } from '@/shared/utils'

import type { Schedule } from '@/entities/schedule/models'

export async function getMySchedule(start: string, end: string): Promise<Schedule[]> {
  try {
    const res = await axiosInstance.get('/schedules', {
      params: { start, end },
    })
    devLog('log', 'date', { start, end })
    devLog('log', 'schedules', res.data?.data?.scheduleResponseList)
    return res.data?.data?.scheduleResponseList ?? []
  } catch (error) {
    toast.error('캘린더 불러오기 실패')
    throw error
  }
}
