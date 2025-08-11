import axiosInstance from '@/shared/api/axios-instance'

import type { Schedule } from '@/entities/schedule/models'

export async function getDetailedSchedule(scheduleId: string): Promise<Schedule> {
  const res = await axiosInstance(`/schedules/${scheduleId}`)

  return res.data.data
}
