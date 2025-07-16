import { useEffect, useRef } from 'react'

import { useCalendarContext } from './hooks/use-calendar-context'
import useMonthObserver from './hooks/use-month-observer'

import { CalendarMonth } from '.'

/**
 * @description
 * 스크롤 가능한 달력 전체 영역을 렌더링하는 컴포넌트입니다.
 * - 각 월별 날짜를 CalendarMonth 단위로 나열하며, 스크롤 시 보이는 월을 감지합니다.
 * - 컴포넌트가 마운트되면 현재 월 위치로 자동 스크롤합니다.
 * - useMonthObserver 훅을 통해 스크롤 시 현재 보이는 월을 감지하여 상태를 업데이트합니다.
 *
 * @returns 각 월을 순서대로 나열한 달력
 */

export default function CalendarScrollWrapper() {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const { allDatesByMonth, setCurrentMonth, monthRefs } = useCalendarContext()

  //마운트 시 현재달로 이동하는 함수
  useEffect(() => {
    const thisMonthIndex = new Date().getMonth()
    monthRefs.current[thisMonthIndex]?.scrollIntoView({ behavior: 'auto' })
  }, [])

  //옵져버 - 현재 보이는 월 감지
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
