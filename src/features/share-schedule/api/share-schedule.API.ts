import axiosInstance from '@/shared/api/axios-instance'

import type { Schedule } from '@/entities/schedule'

const shareToken = async () => {
  const res = await axiosInstance.get('/schedules/share')
  return res.data.data
}

export async function getShareSchedule(): Promise<Schedule[]> {
  const userID = await shareToken()
  const res = await axiosInstance.get(`/api/schedules/user/${userID}?start=2025-05-01&end=2025-12-31`, {})
  return res.data.data
}
