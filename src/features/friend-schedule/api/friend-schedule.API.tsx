import { addMonths, endOfMonth, format, startOfMonth } from 'date-fns'

import axiosInstance from '@/shared/api/axios-instance'

import type { Schedule } from '@/entities/schedule/models'

export async function getFriendSchedule(friendID: string): Promise<Schedule[]> {
  const start = format(startOfMonth(new Date()), 'yyyy-MM-dd')
  const end = format(endOfMonth(addMonths(new Date(), 1)), 'yyyy-MM-dd')
  const res = await axiosInstance.get(`/schedules/user/${friendID}`, {
    params: {
      start: start,
      end: end,
    },
  })

  return res.data?.data?.scheduleResponseList ?? []
}
