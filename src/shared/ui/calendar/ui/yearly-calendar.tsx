import { useEffect } from 'react'

import { useCalendarContext } from '../hooks/calendar-context'
import { rangeMonth } from '../util/range'
import { scrollToCurrentMonth } from '../util/scroll-current-month'

import MonthlyCalendar from './monthly-calendar'

/**
 *
 * 1월부터 12월까지 2025년의 달력을 스크롤 가능한 세로 뷰로 렌더링하는 컴포넌트입니다.
 *
 * - 각 달(Month)은 `<MonthlyCalendar />`로 렌더링됩니다.
 * - `monthRefs`를 통해 각 월의 DOM 요소를 저장하고,
 *   `IntersectionObserver`에서 보이는 월을 추적하는 데 사용됩니다.
 * - 최초 마운트 시 `scrollToCurrentMonth`를 호출하여 오늘 날짜 기준 월로 자동 스크롤합니다.
 *
 */

export default function YearlyCalendar() {
  const { containerRef, monthRefs } = useCalendarContext()
  const currentYear = new Date().getFullYear()
  useEffect(() => scrollToCurrentMonth(containerRef, monthRefs), [])

  return (
    <div ref={containerRef} className="overflow-y-scroll  h-[calc(100vh-127px)] scrollbar-hide">
      {rangeMonth(12).map((month) => (
        <div
          key={month}
          ref={(el) => {
            monthRefs.current[month] = el
          }}
        >
          <MonthlyCalendar year={currentYear} month={month} />
        </div>
      ))}
    </div>
  )
}
