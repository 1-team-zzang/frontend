import { CalendarContainer, CalendarDayName, CalendarHeaderContent } from '@/shared/ui/calendar'
import YearlyCalendar from '@/shared/ui/calendar/ui/yearly-calendar'

import type { ReactNode } from 'react'

interface Props {
  disablePastDateStyling?: boolean
  renderDateCellContent?: (date: Date) => ReactNode
  onDateClick?: (date: Date) => void
  children?: ReactNode
}

export default function CalendarUI({
  disablePastDateStyling = true,
  renderDateCellContent,
  onDateClick,
  children,
}: Props) {
  return (
    <CalendarContainer
      disablePastDateStyling={disablePastDateStyling}
      renderDateCellContent={renderDateCellContent}
      onDateClick={onDateClick}
    >
      <CalendarHeaderContent />
      <CalendarDayName />
      <YearlyCalendar />
      {children}
    </CalendarContainer>
  )
}
