import useCalendar from '../hooks/useCalendar'
import UseCurrentMonth from '../hooks/useCurrentMonth'
import useSelectedDate from '../hooks/useSelectedDate'

import CalendarCells from './calendar-cells'
import CalendarHeader from './calendar-header'
import WeekdayHeader from './weekday-header'

export default function Calendar() {
  const { currentMonth, onNextMonth, onPrevMonth } = UseCurrentMonth()
  const currentMonthAllDates = useCalendar(currentMonth)
  const { selectedDate, handleSelectedDate } = useSelectedDate()
  return (
    <div>
      <CalendarHeader currentMonth={currentMonth} onNextMonth={onNextMonth} onPrevMonth={onPrevMonth} />
      <WeekdayHeader />
      <CalendarCells
        currentMonthAllDates={currentMonthAllDates}
        handleSelectedDate={handleSelectedDate}
        selectedDate={selectedDate}
      />
    </div>
  )
}
