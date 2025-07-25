import axiosInstance from '@/shared/api/axios-instance'

import type { Schedule } from '@/entities/schedule'

export default async function getDetailedSchedule(date: number): Promise<Schedule> {
  const res = await axiosInstance(`/schedules/${date}`)
  return res.data.data
}
