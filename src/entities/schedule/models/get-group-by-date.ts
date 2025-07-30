import { format, eachDayOfInterval } from 'date-fns'

import type { Schedule } from './schedule.types'

export default function groupByDate(schedules: Schedule[]) {
  const map: Record<string, Schedule[]> = {}

  for (const schedule of schedules) {
    // 반복 일정이면 startAt만 사용
    if (schedule.isRepeated) {
      const date = format(new Date(schedule.startAt), 'yyyy-MM-dd')
      if (!map[date]) {
        map[date] = []
      }
      map[date].push(schedule)
    } else {
      const start = new Date(schedule.startAt)
      const end = new Date(schedule.endAt)
      const days = eachDayOfInterval({ start, end })

      for (const day of days) {
        const dateStr = format(day, 'yyyy-MM-dd')
        if (!map[dateStr]) {
          map[dateStr] = []
        }
        map[dateStr].push(schedule)
      }
    }
  }

  return map
}
