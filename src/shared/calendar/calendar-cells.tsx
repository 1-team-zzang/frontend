import { format, isSameDay, type EachDayOfIntervalResult } from 'date-fns'

import Button from './calendar-date-button'

interface Props {
  currentMonthAllDates: EachDayOfIntervalResult<{ start: Date; end: Date }, undefined>
  handleSelectedDate: (date: Date) => void
  selectedDate: Date
}
/**이번 달의 모든 날짜 셀*/
export default function CalendarCells({ currentMonthAllDates, handleSelectedDate, selectedDate }: Props) {
  return (
    <div className="grid grid-cols-7">
      {currentMonthAllDates.map((date) => (
        <Button
          key={date.getTime()}
          onClick={() => handleSelectedDate(date)}
          isSelectedDate={isSameDay(selectedDate, date)}
          isSunday={format(date, 'EEE') === 'Sun'}
        >
          {date.getDate()}
        </Button>
      ))}
    </div>
  )
}
