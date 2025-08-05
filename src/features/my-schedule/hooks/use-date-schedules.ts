import { useSuspenseQuery } from '@tanstack/react-query'

import { groupByDate } from '@/entities/schedule'
import { scheduleQueryKeys } from '@/entities/schedule/models/schedule.query'
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
