import { useQuery } from '@tanstack/react-query'

import groupByDate from '@/entities/schedule/models/get-group-by-date'
import repeatedSchedules from '@/entities/schedule/models/repeat-schedules'

import { getShareSchedule } from '../api/share-schedule.API'

export function useShareSchedule() {
  const {
    data: schedules = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['share-schedule'],
    queryFn: () => getShareSchedule(),
  })

  const repeated = repeatedSchedules(schedules)
  const scheduleMap = groupByDate(repeated)

  return { scheduleMap, isLoading, isError }
}
