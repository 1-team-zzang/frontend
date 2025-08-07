import { useSuspenseQuery } from '@tanstack/react-query'

import { groupByDate, scheduleQueryKeys } from '@/entities/schedule/models'
import { useUserStore } from '@/entities/user/models/use-user-store'

import { getMySchedule } from '../api'

export function useDateSchedules() {
  const userId = useUserStore((state) => state.user?.userId)
  const { data: schedules = [] } = useSuspenseQuery({
    queryKey: scheduleQueryKeys.userSchedules(userId!),
    queryFn: getMySchedule,
  })

  const scheduleMap = groupByDate(schedules)

  return {
    scheduleMap,
  }
}
