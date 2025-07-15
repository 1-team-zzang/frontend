import { startOfWeek, endOfWeek, addDays, startOfMonth, endOfMonth, isSameMonth } from 'date-fns'

export default function getWeeksInMonth(month: Date): Date[][] {
  if (!(month instanceof Date) || isNaN(month.getTime())) return []

  const start = startOfWeek(startOfMonth(month), { weekStartsOn: 0 })
  const end = endOfWeek(endOfMonth(month), { weekStartsOn: 0 })

  const weeks: Date[][] = []
  let current = start

  while (current <= end) {
    const week: Date[] = []
    for (let i = 0; i < 7; i++) {
      week.push(current)
      current = addDays(current, 1)
    }
    weeks.push(week)
  }

  return weeks
}
