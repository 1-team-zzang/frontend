import { useState, type ReactNode } from 'react'

import { devLog } from '@/shared/utils/dev-log.ts'

import {
  useCalendarRef,
  useInfiniteCalendarScroll,
  useAutoScrollToCurrentMonth,
  useVisibleMonthObserver,
  MonthlyCalendar,
} from '../../index.ts'
import getInitialMonth from '../utils/get-initial-month.ts'

import { useCalendarContext } from './calendar-context.tsx'

import type { Month } from '../type/calendar.types.ts'

interface Props {
  children?: (date: Date) => ReactNode
  disablePrev?: boolean //이전달 안보이게
  isPast?: boolean
}

export default function InfiniteCalendar({ children, disablePrev = false, isPast }: Props) {
  const { scrollContainerRef, topRef, bottomRef, monthRefs, setMonthRef } = useCalendarRef()

  const [months, setMonths] = useState<Month[]>(getInitialMonth(disablePrev))
  devLog('log', 'month[]', months)
  const { setVisibleMonth } = useCalendarContext()

  const today = new Date()

  useInfiniteCalendarScroll({ topRef, bottomRef, scrollContainerRef, setMonths, disablePrev })

  useAutoScrollToCurrentMonth()

  useVisibleMonthObserver({ scrollContainerRef, setVisibleMonth, monthRefs, months })

  return (
    <div ref={scrollContainerRef} className="flex flex-col overflow-y-auto h-[calc(100vh-128px)] scrollbar-hide">
      <div ref={topRef} />
      {months.map(({ year, month }) => {
        const key = `${year}-${month}`
        const isCurrent = year === today.getFullYear() && month === today.getMonth()

        return (
          <div key={key} ref={setMonthRef(key, isCurrent)} data-key={key}>
            <MonthlyCalendar year={year} month={month} isPast={isPast}>
              {children}
            </MonthlyCalendar>
          </div>
        )
      })}
      <div ref={bottomRef} />
    </div>
  )
}
