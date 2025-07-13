import CalendarCells from './calendar-cells'
import CalendarHeader from './calendar-header'
import { CalendarProvider } from './hooks/useCalendarContext'
import useCalendarDates from './hooks/useCalendarDate'
import useCalendarNavigation from './hooks/useCalendarNavigation'
import useSelectedDate from './hooks/useSelectedDate'
import WeekdayHeader from './weekday-header'

/**
 * @description 캘린더 UI 컴포넌트
 * CalendarProvider로 context를 하위 컴포넌트에 전달합니다.
 *
 * <하위컴포넌트>
 * Calendar.Header - YYYY.MM 표시 헤더,
 * Calendar.Weekdays - 일~토 요일 표시 헤더,
 * Calendar.Cells - 이번 달 날짜
 *
 *
 * @example
 *    <Calendar>
 *     <Calendar.Header />
 *     <Calendar.Weekdays />
 *     <Calendar.Cells />
 *   </Calendar>
 *
 */

export default function Calendar({ children }: { children: React.ReactNode }) {
  const { currentMonth, onNextMonth, onPrevMonth, onNextYear, onPrevYear } = useCalendarNavigation()
  const currentMonthAllDates = useCalendarDates(currentMonth)
  const { selectedDate, handleSelectedDate } = useSelectedDate()

  const providerValue = {
    currentMonth,
    onNextMonth,
    onPrevMonth,
    onNextYear,
    onPrevYear,
    currentMonthAllDates,
    selectedDate,
    handleSelectedDate,
  }
  return (
    <CalendarProvider value={providerValue}>
      <div>{children}</div>
    </CalendarProvider>
  )
}

Calendar.Header = CalendarHeader
Calendar.Weekdays = WeekdayHeader
Calendar.Cells = CalendarCells
