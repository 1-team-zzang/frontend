import DayOfWeek from './day-of-week'
import CalendarNavigator from './calendar-navigator'
import CalendarBody from './calendar-body'
import useCalendar from '../hooks/useCalendar'

export default function Calendar() {
  const {
    selectedDate,
    currentMonthAllDates,
    handleNextMonth,
    handlePrevMonth,
    handleNextYear,
    handlePrevYear,
    handleselectedDate,
    year,
    month,
  } = useCalendar()

  return (
    <>
      <CalendarNavigator
        next={'다음년'}
        prev={'이전년'}
        text={year + '년'}
        handlePrev={handlePrevYear}
        handleNext={handleNextYear}
      />
      <CalendarNavigator
        next={'다음달'}
        prev={'이전달'}
        text={month + '월'}
        handlePrev={handlePrevMonth}
        handleNext={handleNextMonth}
      />
      <DayOfWeek />
      <CalendarBody
        currentMonthAllDates={currentMonthAllDates}
        handleselectedDate={handleselectedDate}
        selectedDate={selectedDate}
      />
    </>
  )
}
