import { useSuspenseQuery } from '@tanstack/react-query'
import { useParams } from 'react-router'

import { groupByDate, scheduleQueryKeys } from '@/entities/schedule/models'

import { getShareSchedule } from '../api'

export function useShareScheduleByUserId() {
  const { userId } = useParams<{ userId: string }>()
  const { data: schedules = [] } = useSuspenseQuery({
    queryKey: scheduleQueryKeys.shareSchedules(userId!),
    queryFn: () => getShareSchedule(userId!),
  })

  const scheduleMap = groupByDate(schedules)

  return { scheduleMap }
}
