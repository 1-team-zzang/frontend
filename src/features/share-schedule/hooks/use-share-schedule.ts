import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router'

import groupByDate from '@/entities/schedule/models/get-group-by-date'
import { scheduleQueryKeys } from '@/entities/schedule/models/schedule.query'

import { getShareSchedule } from '../api/share-schedule.API'

export function useShareSchedule() {
  const { userId } = useParams<{ userId: string }>()
  const {
    data: schedules = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: scheduleQueryKeys.userSchedules(userId!),
    queryFn: () => getShareSchedule(userId!),
    enabled: !!userId,
  })

  const scheduleMap = groupByDate(schedules)

  return { scheduleMap, isLoading, isError }
}
