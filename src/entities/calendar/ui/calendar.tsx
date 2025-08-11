import { useRef, useState, type ReactNode } from 'react'

import { CalendarProvider, type Month } from '../model'

interface Props {
  children: ReactNode
  onDateClick: ((date: Date) => void) | undefined
}

export default function Calendar({ children, onDateClick }: Props) {
  const [visibleMonth, setVisibleMonth] = useState<Month | null>(null)
  const currentMonthRef = useRef<HTMLDivElement | null>(null)
  return (
    <CalendarProvider value={{ visibleMonth, setVisibleMonth, onDateClick, currentMonthRef }}>
      {children}
    </CalendarProvider>
  )
}
