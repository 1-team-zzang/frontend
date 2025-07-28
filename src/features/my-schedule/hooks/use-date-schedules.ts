import { useQuery } from '@tanstack/react-query'

import groupByDate from '@/entities/schedule/models/get-group-by-date'
import { scheduleQueryKeys } from '@/entities/schedule/models/schedule.query'
import { useUserStore } from '@/entities/user/models/use-user-store'
import { getMySchedule } from '@/features/my-schedule'

export function useDateSchedules() {
  const userId = useUserStore((state) => state.user?.userId)
  const {
    data: schedules = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: scheduleQueryKeys.userSchedules(userId!),
    queryFn: getMySchedule,
    enabled: !!userId,
  })

  const scheduleMap = groupByDate(schedules)

  return {
    scheduleMap,
    isLoading,
    isError,
  }
}
