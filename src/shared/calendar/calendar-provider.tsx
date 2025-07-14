import { CalendarProvider } from './hooks/use-calendar-context'
import useCalendarDates from './hooks/use-calendar-date'
import useMonthControl from './hooks/use-month-control'
import useYearControl from './hooks/use-year-control'
import useSelectedDate from './util/use-selected-date'

import type { ReactNode } from 'react'

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
 *     <CalendarHeader />
 *     <CalendarWeekdays />
 *     <CalendarCells />
 *   </Calendar>
 *
 */

export default function Calendar({ children }: { children: ReactNode }) {
  const { currentMonth, onNextMonth, onPrevMonth } = useMonthControl()
  const { onNextYear, onPrevYear } = useYearControl()
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
