import axiosInstance from '@/shared/api/axios-instance'
import { toast } from '@/shared/ui'

import type { Schedule } from '@/entities/schedule/models'

export async function getMySchedule(start: string, end: string): Promise<Schedule[]> {
  try {
    const res = await axiosInstance.get('/schedules', {
      params: { start, end },
    })
    return res.data?.data?.scheduleResponseList ?? []
  } catch (error) {
    toast.error('캘린더 불러오기 실패')
    throw error
  }
}
