import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router'

import groupByDate from '@/entities/schedule/models/get-group-by-date'
import repeatedSchedules from '@/entities/schedule/models/repeat-schedules'

import { getFriendSchedule } from '../api/friend-schedule.API'

export function useFriendSchedule() {
  const { friendId } = useParams<{ friendId: string }>()
  const {
    data: schedules = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['friend-schedule', friendId],
    queryFn: () => getFriendSchedule(friendId!),
    enabled: !!friendId,
  })

  const repeated = repeatedSchedules(schedules)
  const scheduleMap = groupByDate(repeated)

  return { scheduleMap, isLoading, isError }
}
