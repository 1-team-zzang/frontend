import axiosInstance from '@/shared/api/axios-instance'

import type { Schedule } from '@/entities/schedule'

export async function getFriendSchedule(friendID: string): Promise<Schedule[]> {
  const res = await axiosInstance.get(`/schedules/user/${friendID}`, {
    params: {
      start: '2025-05-01',
      end: '2025-12-31',
    },
  })
  return res.data?.data?.scheduleResponseList ?? []
}
