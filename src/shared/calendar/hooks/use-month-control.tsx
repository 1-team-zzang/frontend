import { addMonths, subMonths } from 'date-fns'
import { useState } from 'react'

/**
 * @description 현재 월을 기준으로 이전/다음 달로 이동할 수 있는 상태 관리 훅입니다.
 *
 *  * @param initialDate 해당 날짜의 연도로 초기화
 *  - 기본값 오늘날짜(new Date())
 * - ex) const { year } = useCalendarYear(new Date('2026-01-01'))
 *
 * @returns 현재 월 상태와 월 변경 핸들러
 */

export default function useMonthControl(initialDate = new Date()) {
  const [currentMonth, setCurrentMonth] = useState(initialDate)

  //다음달
  const onNextMonth = () => {
    setCurrentMonth((prevDate) => addMonths(prevDate, 1))
  }

  //이전달
  const onPrevMonth = () => {
    setCurrentMonth((prevDate) => subMonths(prevDate, 1))
  }

  return { currentMonth, onNextMonth, onPrevMonth }
}
