import axiosInstance from '@/shared/api/axios-instance'
import { devLog } from '@/shared/utils/dev-log'

import type { Schedule } from '@/entities/schedule'

export default async function getDetailedSchedule(scheduleId: string): Promise<Schedule> {
  const res = await axiosInstance(`/schedules/${scheduleId}`)
  devLog('log', 'res.data', res.data)
  devLog('log', 'rea.data.data', res.data.data)
  return res.data.data
}
