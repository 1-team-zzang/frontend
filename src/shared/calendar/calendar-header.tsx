import { format } from 'date-fns'
import { useCalendarContext } from './calendar-provider'

export default function CalendarHeader() {
  const { currentMonth } = useCalendarContext()
  return (
    <div className="flex gap-1">
      <span>{format(currentMonth, 'yyyy.MM')}</span>
    </div>
  )
}
