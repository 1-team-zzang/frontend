import axiosInstance from '@/shared/api/axios-instance'

import type { Schedule } from '@/entities/schedule/lib'

export async function getMySchedule(start: string, end: string): Promise<Schedule[]> {
  const res = await axiosInstance.get('/schedules', {
    params: { start, end },
  })
  return res.data?.data?.scheduleResponseList ?? []
}
