import { useSuspenseQuery } from '@tanstack/react-query'

import { groupByDate, scheduleQueryKeys } from '@/entities/schedule/models'
import { useUserStore } from '@/entities/user/models/use-user-store'
import { devLog } from '@/shared/utils'

import { getMySchedule } from '../api'

interface Props {
  start: string
  end: string
}

export function useDateSchedules({ start, end }: Props) {
  const userId = useUserStore((state) => state.user?.userId)
  const { data: schedules = [] } = useSuspenseQuery({
    queryKey: scheduleQueryKeys.userSchedulesList(userId!, start),
    queryFn: () => getMySchedule(start, end),
  })

  const scheduleMap = groupByDate(schedules)
  devLog('log', 'scheduleMap', scheduleMap)
  devLog('log', 'start, end', { start, end })
  return {
    scheduleMap,
  }
}
