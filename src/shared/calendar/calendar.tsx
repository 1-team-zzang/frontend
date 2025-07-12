import CalendarCells from './calendar-cells'
import CalendarHeader from './calendar-header'
import useCalendar from './hooks/useCalendar'
import useCurrentMonth from './hooks/useCurrentMonth'
import useSelectedDate from './hooks/useSelectedDate'
import WeekdayHeader from './weekday-header'

export default function Calendar() {
  const { currentMonth, onNextMonth, onPrevMonth } = useCurrentMonth()
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
        currentMonth={currentMonth}
      />
    </div>
  )
}
