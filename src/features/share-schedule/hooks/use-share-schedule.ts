import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router'

import groupByDate from '@/entities/schedule/models/get-group-by-date'
import repeatedSchedules from '@/entities/schedule/models/repeat-schedules'

import { getShareSchedule } from '../api/share-schedule.API'

export function useShareSchedule() {
  const { userId } = useParams<{ userId: string }>()

  const {
    data: schedules = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['share-schedule', userId],
    queryFn: () => getShareSchedule(userId!),
    enabled: !!userId,
  })

  const repeated = repeatedSchedules(schedules)
  const scheduleMap = groupByDate(repeated)

  return { scheduleMap, isLoading, isError }
}
