import { CalendarContainer, CalendarDayName, CalendarHeaderContent } from '@/shared/ui/calendar'
import YearlyCalendar from '@/shared/ui/calendar/ui/yearly-calendar'

import type { ReactNode } from 'react'

interface Props {
  disablePastDateStyling?: boolean
  renderDateCellContent?: (date: Date) => ReactNode
  onDateClick?: (date: Date) => void
  children?: ReactNode
  showShareButton?: boolean
  isFriendCalendar?: boolean
  isShareCalendar?: boolean
}

export default function CalendarUI({
  disablePastDateStyling = true,
  renderDateCellContent,
  onDateClick,
  showShareButton = false,
  isFriendCalendar = false,
  isShareCalendar = false,
  children,
}: Props) {
  return (
    <CalendarContainer
      disablePastDateStyling={disablePastDateStyling}
      renderDateCellContent={renderDateCellContent}
      onDateClick={onDateClick}
    >
      <CalendarHeaderContent
        showShareButton={showShareButton}
        isFriendCalendar={isFriendCalendar}
        isShareCalendar={isShareCalendar}
      />
      <CalendarDayName />
      <YearlyCalendar />
      {children}
    </CalendarContainer>
  )
}
