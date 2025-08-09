import { addMonths, format } from 'date-fns'

import axiosInstance from '@/shared/api/axios-instance'
import { toast } from '@/shared/ui'

import type { Schedule } from '@/entities/schedule/models'

export async function getShareSchedule(userId: string): Promise<Schedule[]> {
  const start = format(new Date(), 'yyyy-MM-dd')
  const end = format(addMonths(new Date(), 1), 'yyyy-MM-dd')

  try {
    const res = await axiosInstance.get(`/schedules/user/${userId}`, {
      params: {
        start: start,
        end: end,
      },
    })
    return res.data?.data?.scheduleResponseList ?? []
  } catch (error) {
    toast.error('일정 불러오기 실패')
    throw error
  }
}
