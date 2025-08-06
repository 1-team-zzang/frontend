import axiosInstance from '@/shared/api/axios-instance'
import { toast } from '@/shared/ui'

import type { Schedule } from '@/entities/schedule/models'

export async function getMySchedule(): Promise<Schedule[]> {
  try {
    const res = await axiosInstance.get('/schedules', {
      params: {
        start: '2025-01-01',
        end: '2025-12-31',
      },
    })
    return res.data?.data?.scheduleResponseList ?? []
  } catch (error) {
    toast.error('캘린더 불러오기 실패')
    throw error
  }
}
