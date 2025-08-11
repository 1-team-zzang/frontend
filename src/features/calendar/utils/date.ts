import type { Month } from '../type/calendar.types'

export function getNextMonth({ year, month }: Month): Month {
  const next = new Date(year, month + 1, 1)
  return { year: next.getFullYear(), month: next.getMonth() }
}

export function getPrevMonth({ year, month }: Month): Month {
  const prev = new Date(year, month - 1, 1)
  return { year: prev.getFullYear(), month: prev.getMonth() }
}
