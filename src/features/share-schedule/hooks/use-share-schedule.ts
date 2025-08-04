import { useSuspenseQuery } from '@tanstack/react-query'
import { useParams } from 'react-router'

import { groupByDate } from '@/entities/schedule'
import { scheduleQueryKeys } from '@/entities/schedule/models/schedule.query'

import { getShareSchedule } from '../api/share-schedule.API'

export function useShareSchedule() {
  const { userId } = useParams<{ userId: string }>()
  const { data: schedules = [] } = useSuspenseQuery({
    queryKey: scheduleQueryKeys.shareSchedules(userId!),
    queryFn: () => getShareSchedule(userId!),
  })

  const scheduleMap = groupByDate(schedules)

  return { scheduleMap }
}
