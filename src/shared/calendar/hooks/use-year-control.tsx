import { useState } from 'react'

/**
 * @description 현재 월을 기준으로 작년/내년으로 이동할 수 있는 상태 관리 훅입니다.
 *
 * @param initialDate 해당 날짜의 연도로 초기화
 *  - 기본값 오늘날짜(new Date())
 * - ex) const { year } = useCalendarYear(new Date('2026-01-01'))
 *
 * @returns 현재 연도 상태와 연도 변경 핸들러
 */

export default function useYearControl(initialDate = new Date()) {
  const [year, setYear] = useState(initialDate.getFullYear())

  const onNextYear = () => setYear((prev) => prev + 1)
  const onPrevYear = () => setYear((prev) => prev - 1)

  return { year, onNextYear, onPrevYear }
}
