import { useQuery } from '@tanstack/react-query'

import groupByDate from '@/entities/schedule/models/get-group-by-date'
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

  const scheduleMap = groupByDate(schedules)

  return {
    scheduleMap,
    isLoading,
    isError,
  }
}
