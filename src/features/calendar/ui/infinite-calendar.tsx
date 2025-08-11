import { useState, type Dispatch, type ReactNode, type SetStateAction } from 'react'

import { getInitialMonth } from '@/entities/calendar/lib'
import { useCalendarContext } from '@/entities/calendar/model'
import { MonthlyCalendar } from '@/entities/calendar/ui'

import {
  useAutoScrollToCurrentMonth,
  useCalendarRef,
  useInfiniteCalendarScroll,
  useVisibleMonthObserver,
} from '../model/index.ts'

import type { Month } from '@/entities/calendar/model/calendar.types.ts'

interface Props {
  children?: (date: Date) => ReactNode
  disablePrev?: boolean //이전달 안보이게
  isPast?: boolean
  months?: Month[] //달력 배열 초기값:이전달, 현재달, 다음달
  setMonths?: Dispatch<SetStateAction<Month[]>>
}

export default function InfiniteCalendar({
  children,
  disablePrev = false,
  isPast,
  months: externalMonths,
  setMonths: externalSetMonths,
}: Props) {
  const { scrollContainerRef, topRef, bottomRef, monthRefs, setMonthRef } = useCalendarRef()

  const [internalMonths, internalSetMonths] = useState<Month[]>(getInitialMonth(disablePrev))

  const months = externalMonths ?? internalMonths
  const setMonths = externalSetMonths ?? internalSetMonths

  const { setVisibleMonth } = useCalendarContext()

  const today = new Date()

  useInfiniteCalendarScroll({ topRef, bottomRef, scrollContainerRef, setMonths, disablePrev })

  useAutoScrollToCurrentMonth()

  useVisibleMonthObserver({ scrollContainerRef, setVisibleMonth, monthRefs, months })

  return (
    <div ref={scrollContainerRef} className="flex flex-col overflow-y-auto h-[calc(100dvh-128px)] scrollbar-hide">
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
