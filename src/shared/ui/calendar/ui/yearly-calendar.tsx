import { useEffect } from 'react'

import { useCalendarContext } from '../hooks/calendar-context'
import { rangeMonth } from '../util/range'
import { scrollToCurrentMonth } from '../util/scroll-current-month'

import MonthlyCalendar from './monthly-calendar'

export default function YearlyCalendar() {
  const { containerRef, monthRefs } = useCalendarContext()
  useEffect(() => scrollToCurrentMonth(containerRef, monthRefs), [])

  return (
    <div ref={containerRef} className="overflow-y-scroll h-[26rem] scrollbar-hide">
      {rangeMonth(12).map((month) => (
        <div
          key={month}
          ref={(el) => {
            monthRefs.current[month] = el
          }}
        >
          <MonthlyCalendar month={month} year={2025} />
        </div>
      ))}
    </div>
  )
}
