import { useSuspenseQuery } from '@tanstack/react-query'

import { groupByDate, scheduleQueryKeys } from '@/entities/schedule/models'
import { useUserStore } from '@/entities/user/models/use-user-store'

import { getMySchedule } from '../api'

export function useDateSchedules() {
  const userId = useUserStore((state) => state.user?.userId)
  const start = '2025-01-01'
  const end = '2025-12-31'
  const { data: schedules = [] } = useSuspenseQuery({
    queryKey: scheduleQueryKeys.userSchedules(userId!),
    queryFn: () => getMySchedule(start, end),
  })

  const scheduleMap = groupByDate(schedules)

  return {
    scheduleMap,
  }
}
