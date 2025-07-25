import { useQuery } from '@tanstack/react-query'

import groupByDate from '@/entities/schedule/models/get-group-by-date'
import repeatedSchedules from '@/entities/schedule/models/repeat-schedules'
import { getMySchedule } from '@/features/my-schedule'

export function useDateSchedules() {
  const {
    data: schedules = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['schedule'],
    queryFn: getMySchedule,
  })

  const repeated = repeatedSchedules(schedules)
  const scheduleMap = groupByDate(repeated)

  return {
    scheduleMap,
    isLoading,
    isError,
  }
}
