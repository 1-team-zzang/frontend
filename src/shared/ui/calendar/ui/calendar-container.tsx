import { useRef, type ReactNode } from 'react'

import { CalendarProvider, useVisibleMonth } from '../index.ts'

interface Props {
  children: ReactNode
  renderDateCellContent?: (date: Date) => ReactNode
}

export default function CalendarContainer({ children, renderDateCellContent }: Props) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { visibleMonth, monthRefs } = useVisibleMonth(containerRef)

  return (
    <CalendarProvider value={{ containerRef, monthRefs, visibleMonth, renderDateCellContent }}>
      {children}
    </CalendarProvider>
  )
}
