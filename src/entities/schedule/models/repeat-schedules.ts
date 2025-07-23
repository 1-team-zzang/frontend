import { addDays, addWeeks, addMonths, addYears } from 'date-fns'

import type { Schedule } from './schedule.types'

export default function expandRepeatedSchedules(schedules: Schedule[]): Schedule[] {
  const result: Schedule[] = []

  for (const schedule of schedules) {
    if (!schedule.isRepeated || !schedule.repeatRule || !schedule.repeatCount) {
      result.push(schedule)
      continue
    }

    const start = new Date(schedule.startAt)

    for (let i = 0; i < schedule.repeatCount; i++) {
      const nextDate = (() => {
        switch (schedule.repeatRule) {
          case 'DAILY':
            return addDays(start, i)
          case 'WEEKLY':
            return addWeeks(start, i)
          case 'MONTHLY':
            return addMonths(start, i)
          case 'YEARLY':
            return addYears(start, i)
          default:
            return start
        }
      })()

      result.push({
        ...schedule,
        startAt: nextDate.toISOString(),
      })
    }
  }

  return result
}
