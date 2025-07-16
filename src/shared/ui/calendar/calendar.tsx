import { useRef, useState, type ReactNode } from 'react'

import { CalendarProvider } from './hooks'
import useAllMonthDates from './hooks/use-all-month-dates'
import getCalendarDates from './util/get-calendar-date'
import useSelectedDate from './hooks/use-selected-date'
import GetDateVariantStates from './util/get-date-variant-states'

export default function Calendar({ children }: { children: ReactNode }) {
  const monthRefs = useRef<(HTMLDivElement | null)[]>([])
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const currentMonthAllDates = getCalendarDates(currentMonth)
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
    getDateVariantStates: (date: Date) => GetDateVariantStates({ selectedDate, date, month: currentMonth }),
  }

  return (
    <CalendarProvider value={providerValue}>
      <div className="flex flex-col w-96">{children}</div>
    </CalendarProvider>
  )
}
