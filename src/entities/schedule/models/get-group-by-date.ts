import { format } from 'date-fns'

import type { Schedule } from './schedule.types'

export const groupByDate = (schedules: Schedule[]) => {
  const map: Record<string, Schedule[]> = {}
  for (const schedule of schedules) {
    const date = format(new Date(schedule.startAt), 'yyyy-MM-dd')
    if (!map[date]) {
      map[date] = []
    }
    map[date].push(schedule)
  }
  return map
}
