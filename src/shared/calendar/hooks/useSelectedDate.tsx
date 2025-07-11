import { useState } from 'react'

/** 클릭한 날짜 관리 */

export default function useSelectedDate() {
  const [selectedDate, setSelectedDate] = useState(new Date())
  const handleSelectedDate = (date: Date) => {
    setSelectedDate(date)
  }
  return { selectedDate, setSelectedDate, handleSelectedDate }
}
