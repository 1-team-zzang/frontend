import { format } from 'date-fns'
import { ko } from 'date-fns/locale'

import type { Schedule } from '../schedule'

export function formatScheduleTime(schedule: Pick<Schedule, 'isAllDay' | 'startAt' | 'endAt'>): string {
  if (schedule.isAllDay) {
    return '하루종일'
  }

  const start = new Date(schedule.startAt)
  const end = new Date(schedule.endAt)

  if (isNaN(start.getTime()) || isNaN(end.getTime())) {
    return ''
  }

  return `${format(start, 'a h:mm', { locale: ko })} ~ ${format(end, 'a h:mm', { locale: ko })}`
}
