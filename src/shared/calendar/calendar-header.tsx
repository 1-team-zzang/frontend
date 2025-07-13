import { format } from 'date-fns'
import { useCalendarContext } from './hooks/useCalendarContext'

/**
 * @description  YYYY.MM 표시 헤더
 *
 */

export default function CalendarHeader() {
  const { currentMonth } = useCalendarContext()
  return (
    <div className="flex gap-1">
      <span>{format(currentMonth, 'yyyy.MM')}</span>
    </div>
  )
}
