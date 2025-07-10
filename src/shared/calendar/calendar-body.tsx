import { format, isSameDay, type EachDayOfIntervalResult } from 'date-fns'
import { cn } from '../utils'

interface CalendarBodyProps {
  currentMonthAllDates: EachDayOfIntervalResult<
    {
      start: Date
      end: Date
    },
    undefined
  >
  handleselectedDate: (date: Date) => void
  selectedDate: Date
}
/**이번 달의 모든 일자를 보여주는 컴포넌트 */
export default function CalendarBody({ currentMonthAllDates, handleselectedDate, selectedDate }: CalendarBodyProps) {
  return (
    <div className="grid grid-cols-7">
      {currentMonthAllDates.map((date, idx) => (
        <>
          <button
            className={cn(
              isSameDay(selectedDate, date) && 'bg-primary-01',
              format(date, 'EEE') === 'Sun' && 'text-primary-99',
            )}
            onClick={() => handleselectedDate(date)}
            key={idx}
          >
            {date.getDate()}
          </button>
        </>
      ))}
    </div>
  )
}
