import { addMonths, subMonths } from 'date-fns'
import { useState } from 'react'

/** 월 상태 관리 및 핸들러함수 */

export default function useCurrentMonth() {
  const [currentMonth, setCurrentMonth] = useState(new Date()) //초기값 현재

  const onNextMonth = () => {
    setCurrentMonth((prevDate) => addMonths(prevDate, 1)) //다음달
  }

  const onPrevMonth = () => {
    setCurrentMonth((prevDate) => subMonths(prevDate, 1)) //이전달
  }

  return { currentMonth, onNextMonth, onPrevMonth }
}
