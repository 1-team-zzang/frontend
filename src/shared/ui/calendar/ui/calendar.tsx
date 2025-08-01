import { useState, type ReactNode } from 'react'

import { CalendarProvider } from './calendar-context'

import type { Month } from '../type/calendar.types'

interface Props {
  children: ReactNode
  onDateClick: ((date: Date) => void) | undefined
}

export default function Calendar({ children, onDateClick }: Props) {
  const [visibleMonth, setVisibleMonth] = useState<Month | null>(null)
  return <CalendarProvider value={{ visibleMonth, setVisibleMonth, onDateClick }}>{children}</CalendarProvider>
}
