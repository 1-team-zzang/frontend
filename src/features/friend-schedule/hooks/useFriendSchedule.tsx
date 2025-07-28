import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router'

import groupByDate from '@/entities/schedule/models/get-group-by-date'
import { scheduleQueryKeys } from '@/entities/schedule/models/schedule.query'

import { getFriendSchedule } from '../api/friend-schedule.API'

export function useFriendSchedule() {
  const { friendId } = useParams<{ friendId: string }>()
  const {
    data: schedules = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: scheduleQueryKeys.userSchedules(friendId!),
    queryFn: () => getFriendSchedule(friendId!),
    enabled: !!friendId,
  })

  const scheduleMap = groupByDate(schedules)

  return { scheduleMap, isLoading, isError }
}
