import { useSuspenseQuery } from '@tanstack/react-query'
import { useParams } from 'react-router'

import groupByDate from '@/entities/schedule/models/get-group-by-date'
import { scheduleQueryKeys } from '@/entities/schedule/models/schedule.query'

import { getShareSchedule } from '../api/share-schedule.API'

export function useShareSchedule() {
  const { userId } = useParams<{ userId: string }>()
  const { data: schedules = [] } = useSuspenseQuery({
    queryKey: scheduleQueryKeys.userSchedules(userId!),
    queryFn: () => getShareSchedule(userId!),
  })

  const scheduleMap = groupByDate(schedules)

  return { scheduleMap }
}
