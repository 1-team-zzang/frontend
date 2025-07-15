import { useEffect, useRef, useState } from 'react'
import { useCalendarContext } from './hooks/use-calendar-context'
import { CalendarMonth } from '.'
import useMonthObserver from './hooks/use-month-observer'

export default function CalendarScrollWrapper() {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const { allDatesByMonth, setCurrentMonth, monthRefs } = useCalendarContext()

  //현재달로 이동하는 함수
  useEffect(() => {
    const thisMonthIndex = new Date().getMonth()
    monthRefs.current[thisMonthIndex]?.scrollIntoView({ behavior: 'auto' })
  }, [])

  useMonthObserver({
    refs: monthRefs.current,
    containerRef,
    onVisibleMonthChange: (monthIndex) => {
      setCurrentMonth(new Date(2025, monthIndex, 1))
    },
  })

  return (
    <div ref={containerRef} className="overflow-y-scroll h-[26rem] flex flex-col scrollbar-hide">
      {allDatesByMonth.map((dates, i) => (
        <div key={i} ref={(el) => void (monthRefs.current[i] = el)}>
          <CalendarMonth dates={dates} />
        </div>
      ))}
    </div>
  )
}
