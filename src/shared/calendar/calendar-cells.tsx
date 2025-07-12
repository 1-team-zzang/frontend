import { isSameDay, isSameMonth, type EachDayOfIntervalResult } from 'date-fns'

import Button from './calendar-date-button'

interface Props {
  currentMonth: Date
  currentMonthAllDates: EachDayOfIntervalResult<{ start: Date; end: Date }, undefined>
  handleSelectedDate: (date: Date) => void
  selectedDate: Date
}
/**이번 달의 모든 날짜 셀*/
export default function CalendarCells({ currentMonth, currentMonthAllDates, handleSelectedDate, selectedDate }: Props) {
  return (
    <div className="grid grid-cols-7">
      {currentMonthAllDates.map((date) => (
        <Button
          key={date.getTime()}
          onClick={() => handleSelectedDate(date)}
          isSelectedDate={isSameDay(selectedDate, date)}
          isSunday={date.getDay() === 0}
          isCurrentMonth={isSameMonth(date, currentMonth)}
        >
          {date.getDate()}
        </Button>
      ))}
    </div>
  )
}
