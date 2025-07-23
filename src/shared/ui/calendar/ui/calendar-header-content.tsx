import { useCalendarContext } from '../hooks/calendar-context'
import { scrollToCurrentMonth } from '../util/scroll-current-month'

import CalendarHeaderButton from './calendar-header-button'
import CalendarHeader from './calendar-header-container'
import CalendarHeaderMonthLabel from './calendar-header-month-label'

export default function CalendarHeaderContent() {
  const { containerRef, monthRefs } = useCalendarContext()

  return (
    <CalendarHeader>
      <CalendarHeaderButton onClick={() => scrollToCurrentMonth(containerRef, monthRefs)}>오늘</CalendarHeaderButton>
      <CalendarHeaderMonthLabel />
      <CalendarHeaderButton onClick={() => scrollToCurrentMonth(containerRef, monthRefs)}>공유</CalendarHeaderButton>
    </CalendarHeader>
  )
}
