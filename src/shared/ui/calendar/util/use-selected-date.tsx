import { useState } from 'react'

/**
 * @description 선택된 날짜(selectedDate)를 상태로 관리하는 훅입니다.
 * - 기본값은 (null)
 * - 날짜 셀 클릭 시 handleSelectedDate 함수를 호출해 상태를 업데이트할 수 있습니다.
 *
 * @returns 사용자가 선택한 날짜 상태와 이를 설정하는 함수
 */

export default function useSelectedDate() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const handleSelectedDate = (date: Date) => {
    setSelectedDate(date)
  }
  return { selectedDate, setSelectedDate, handleSelectedDate }
}
