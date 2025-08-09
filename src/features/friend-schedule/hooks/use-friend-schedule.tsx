import { useSuspenseQuery } from '@tanstack/react-query'
import { useParams } from 'react-router'

import { groupByDate, scheduleQueryKeys } from '@/entities/schedule/models'

import { getFriendSchedule } from '../../../entities/schedule/api/get-friend-schedule.API'

export function useFriendSchedule() {
  const { friendId } = useParams<{ friendId: string }>()
  const { data: schedules = [] } = useSuspenseQuery({
    queryKey: scheduleQueryKeys.userSchedules(friendId!),
    queryFn: () => getFriendSchedule(friendId!),
  })

  const scheduleMap = groupByDate(schedules)

  return { scheduleMap }
}
