import { useRef, useState, type ReactNode } from 'react'

import useAllMonthDates from './util/get-all-month-dates'
import getCalendarDates from './util/get-current-month-dates'
import GetDateVariantStates from './util/get-date-variant-states'
import { useControllableState } from '@/shared/hooks'
import { CalendarProvider } from './hooks/use-calendar-context'

/**
 *
 * @param selectedDate 외부에서 선택된 날짜, 기본값 null
 * @param onSelectDate: 날짜 선택될 때 외부에서 알려줄 함수
 */

interface CalendarProps {
  children: ReactNode
  selectedDate?: Date | null
  onSelectDate?: (value: Date | null) => void
}

export default function Calendar({ children, selectedDate: propSelectedDate, onSelectDate }: CalendarProps) {
  const monthRefs = useRef<(HTMLDivElement | null)[]>([])
  const [currentMonth, setCurrentMonth] = useState(new Date()) //현재보여줄 월(기본값 오늘기준)

  const currentYear = currentMonth.getFullYear() //현재월의 연도

  const currentMonthAllDates = getCalendarDates(currentMonth) //해당월의 모든 날짜 배열

  const [selectedDate, setSelectedDate] = useControllableState<Date | null>({
    prop: propSelectedDate,
    defaultProp: null,
    onChange: onSelectDate, //날짜가 바뀌면 실행되는 함수
  })

  const allDatesByMonth = useAllMonthDates(currentYear) // 1월1ㅜ터 12월까지 모든 날짜

  const providerValue = {
    currentMonth,
    setCurrentMonth,
    currentMonthAllDates,
    selectedDate,
    setSelectedDate,
    allDatesByMonth,
    monthRefs,
    //날짜 셀의 조건부 스타일(ex, 일요일인가? 오늘인가?)
    getDateVariantStates: (date: Date) => GetDateVariantStates({ date, month: currentMonth }),
  }

  return (
    <CalendarProvider value={providerValue}>
      <div className="flex flex-col w-96">{children}</div>
    </CalendarProvider>
  )
}
