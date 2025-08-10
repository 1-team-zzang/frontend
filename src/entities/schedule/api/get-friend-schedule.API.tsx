import axiosInstance from '@/shared/api/axios-instance'

import type { Schedule } from '@/entities/schedule/models'

interface Props {
  friendId: string
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

  return res.data?.data?.scheduleResponseList ?? []
}
