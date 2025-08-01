import { useState, type ReactNode } from 'react'

import { useCalendarRef } from '../hooks/use-calendar-ref.ts'
import useInfiniteCalendarScroll from '../hooks/use-infinite-calendar-scroll.ts'
import useScrollToCurrentMonth from '../hooks/use-scroll-to-current-month.ts'
import useVisibleMonthObserver from '../hooks/use-visible-month-observer.tsx'
import getInitialMonth from '../utils/get-initial-month.ts'

import { useCalendarContext } from './calendar-context.tsx'
import MonthlyCalendar from './montly-calendar.tsx'

import type { Month } from '../type/calendar.types.ts'

export default function InfiniteCalendar({ children }: { children?: (date: Date) => ReactNode }) {
  const { scrollContainerRef, topRef, bottomRef, currentMonthRef, monthRefs, setMonthRef } = useCalendarRef()

  const [months, setMonths] = useState<Month[]>(getInitialMonth())
  const { setVisibleMonth } = useCalendarContext()

  const today = new Date()

  useInfiniteCalendarScroll({ topRef, bottomRef, scrollContainerRef, setMonths })

  useScrollToCurrentMonth({ currentMonthRef })

  useVisibleMonthObserver({ scrollContainerRef, setVisibleMonth, monthRefs, months })

  return (
    <div ref={scrollContainerRef} className="flex flex-col overflow-y-auto h-[calc(100vh-128px)] scrollbar-hide">
      <div ref={topRef} />
      {months.map(({ year, month }) => {
        const key = `${year}-${month}`
        const isCurrent = year === today.getFullYear() && month === today.getMonth()

        return (
          <div key={key} ref={setMonthRef(key, isCurrent)} data-key={key}>
            <MonthlyCalendar year={year} month={month}>
              {children}
            </MonthlyCalendar>
          </div>
        )
      })}
      <div ref={bottomRef} />
    </div>
  )
}
