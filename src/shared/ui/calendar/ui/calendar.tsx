import { useState, type ReactNode } from 'react'

import { CalendarProvider } from './calendar-context'

import type { Month } from '../type/calendar.types'

export default function Calendar({ children }: { children: ReactNode }) {
  const [visibleMonth, setVisibleMonth] = useState<Month | null>(null)
  return <CalendarProvider value={{ visibleMonth, setVisibleMonth }}>{children}</CalendarProvider>
}
