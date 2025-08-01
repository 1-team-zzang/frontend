import type { Month } from '../type/calendar.types'

export default function getInitialMonth(): Month[] {
  const now = new Date()
  const current = { year: now.getFullYear(), month: now.getMonth() }
  const prev = new Date(now.getFullYear(), now.getMonth() - 1, 1)
  const next = new Date(now.getFullYear(), now.getMonth() + 1, 1)

  return [
    { year: prev.getFullYear(), month: prev.getMonth() },
    current,
    { year: next.getFullYear(), month: next.getMonth() },
  ]
}
