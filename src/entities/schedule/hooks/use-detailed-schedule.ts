import { useSuspenseQuery } from '@tanstack/react-query'

import { getDetailedSchedule } from '../api'
import { scheduleQueryKeys } from '../lib'

export function useDetailedSchedule(scheduleId: string) {
  const { data } = useSuspenseQuery({
    queryKey: scheduleQueryKeys.detailedSchedule(scheduleId!),
    queryFn: () => getDetailedSchedule(scheduleId),
  })

  return data
}
