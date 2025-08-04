import { useSuspenseQuery } from '@tanstack/react-query'

import { getDetailedSchedule } from '../models/detailed-schedule.API'
import { scheduleQueryKeys } from '../models/schedule.query'

export function useDetailedSchedule(scheduleId: string) {
  const { data } = useSuspenseQuery({
    queryKey: scheduleQueryKeys.detailedSchedule(scheduleId!),
    queryFn: () => getDetailedSchedule(scheduleId),
  })

  return data
}
