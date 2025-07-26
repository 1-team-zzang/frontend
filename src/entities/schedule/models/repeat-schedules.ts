import { addDays, addWeeks, addMonths, addYears } from 'date-fns'

import type { Schedule } from './schedule.types'

export default function repeatedSchedules(schedules: Schedule[]): Schedule[] {
  const result: Schedule[] = []

  for (const schedule of schedules) {
    if (!schedule.isRepeated || !schedule.repeatRule || !schedule.repeatCount) {
      result.push(schedule)
      continue
    } //반복 일정이 없다면 그대로 배열에 담김

    const start = new Date(schedule.startAt)

    for (let i = 0; i < schedule.repeatCount; i++) {
      let nextDate = start

      if (schedule.repeatRule === 'DAILY') {
        nextDate = addDays(start, i)
      } else if (schedule.repeatRule === 'WEEKLY') {
        nextDate = addWeeks(start, i)
      } else if (schedule.repeatRule === 'MONTHLY') {
        nextDate = addMonths(start, i)
      } else if (schedule.repeatRule === 'YEARLY') {
        nextDate = addYears(start, i)
      }

      result.push({
        ...schedule,
        startAt: nextDate.toISOString(),
      })
    }
  }

  return result
}
