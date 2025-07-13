import { addMonths, addYears, subMonths, subYears } from 'date-fns'
import { useState } from 'react'

/**
 * @description 현재 월을 기준으로 이전/다음 달, 이전/다음 해로 이동할 수 있는 상태 관리 훅입니다.
 * - 초기값 오늘날짜(new Date())
 *
 * @returns 현재 월 상태와 월/연도 변경 핸들러
 */

export default function useCalendarNavigation() {
  const [currentMonth, setCurrentMonth] = useState(new Date())

  //다음달
  const onNextMonth = () => {
    setCurrentMonth((prevDate) => addMonths(prevDate, 1))
  }

  //이전달
  const onPrevMonth = () => {
    setCurrentMonth((prevDate) => subMonths(prevDate, 1))
  }

  // 내년
  const onNextYear = () => {
    setCurrentMonth((prevDate) => addYears(prevDate, 1))
  }

  // 작년
  const onPrevYear = () => {
    setCurrentMonth((prevDate) => subYears(prevDate, 1))
  }

  return { currentMonth, onNextMonth, onPrevMonth, onNextYear, onPrevYear }
}
