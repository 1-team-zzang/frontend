import { useSuspenseQuery } from '@tanstack/react-query'
import { useParams } from 'react-router'

import groupByDate from '@/entities/schedule/models/get-group-by-date'
import { scheduleQueryKeys } from '@/entities/schedule/models/schedule.query'

import { getFriendSchedule } from '../api/friend-schedule.API'

export function useFriendSchedule() {
  const { friendId } = useParams<{ friendId: string }>()
  const { data: schedules = [] } = useSuspenseQuery({
    queryKey: scheduleQueryKeys.userSchedules(friendId!),
    queryFn: () => getFriendSchedule(friendId!),
  })

  const scheduleMap = groupByDate(schedules)

  return { scheduleMap }
}
