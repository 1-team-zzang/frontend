import { useRef, useState, type ReactNode } from 'react'
import { CalendarProvider, useCalendarDates } from './hooks'
import useAllMonthDates from './hooks/use-all-month-dates'
import useSelectedDate from './util/use-selected-date'

export default function Calendar({ children }: { children: ReactNode }) {
  const monthRefs = useRef<(HTMLDivElement | null)[]>([])
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const currentMonthAllDates = useCalendarDates(currentMonth)
  const { selectedDate, handleSelectedDate } = useSelectedDate()

  const allDatesByMonth = useAllMonthDates()

  const providerValue = {
    currentMonth,
    setCurrentMonth,
    currentMonthAllDates,
    selectedDate,
    handleSelectedDate,
    allDatesByMonth,
    monthRefs,
  }

  return (
    <CalendarProvider value={providerValue}>
      <div className="flex flex-col w-96">{children}</div>
    </CalendarProvider>
  )
}
