import { useSuspenseQuery } from '@tanstack/react-query'

import { getDetailedSchedule, scheduleQueryKeys } from '../models'

export function useDetailedSchedule(scheduleId: string) {
  const { data } = useSuspenseQuery({
    queryKey: scheduleQueryKeys.detailedSchedule(scheduleId!),
    queryFn: () => getDetailedSchedule(scheduleId),
  })

  return data
}
