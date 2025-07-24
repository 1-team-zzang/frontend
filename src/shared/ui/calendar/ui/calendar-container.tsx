import { useRef, type ReactNode } from 'react'

import { CalendarProvider, useVisibleMonth } from '../index.ts'

interface Props {
  children: ReactNode
  renderDateCellContent?: (date: Date) => ReactNode
  onDateClick?: (date: Date) => void
  disablePastDateStyling?: boolean
}

export default function CalendarContainer({ children, renderDateCellContent, onDateClick }: Props) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { visibleMonth, monthRefs } = useVisibleMonth(containerRef)

  return (
    <CalendarProvider
      value={{
        containerRef,
        monthRefs,
        visibleMonth,
        renderDateCellContent,
        onDateClick,
        disablePastDateStyling: true,
      }}
    >
      {children}
    </CalendarProvider>
  )
}
