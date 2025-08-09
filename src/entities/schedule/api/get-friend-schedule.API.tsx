import axiosInstance from '@/shared/api/axios-instance'
import { devLog } from '@/shared/utils'

import type { Schedule } from '@/entities/schedule/models'

interface Props {
  friendId?: string
  start: string
  end: string
}

export async function getFriendSchedule({ friendId, start, end }: Props): Promise<Schedule[]> {
  const res = await axiosInstance.get(`/schedules/user/${friendId}`, {
    params: {
      start: start,
      end: end,
    },
  })
  devLog('log', 'friendId', friendId)
  devLog('log', 'friend-date', { start, end })
  devLog('log', 'friend-schedules', res.data?.data?.scheduleResponseList)
  return res.data?.data?.scheduleResponseList ?? []
}
