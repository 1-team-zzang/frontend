import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router'

import { groupByDate, scheduleQueryKeys } from '@/entities/schedule/lib'

import { getShareSchedule } from '../api'

export function useShareScheduleByUserId() {
  const { userId } = useParams<{ userId: string }>()
  const { data: schedules = [] } = useQuery({
    queryKey: scheduleQueryKeys.shareSchedules(userId!),
    queryFn: () => getShareSchedule(userId!),
    enabled: !!userId,
  })

  const scheduleMap = groupByDate(schedules)

  return { scheduleMap }
}
