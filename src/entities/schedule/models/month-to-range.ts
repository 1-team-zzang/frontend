import { endOfMonth, format, startOfMonth } from 'date-fns'

const fmt = (d: Date) => format(d, 'yyyy-MM-dd')

export function monthToRange(year: number, month: number) {
  const base = new Date(year, month, 1)
  return {
    start: fmt(startOfMonth(base)),
    end: fmt(endOfMonth(base)),
  }
}
