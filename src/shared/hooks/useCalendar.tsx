import {
  addMonths,
  addYears,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  startOfMonth,
  startOfWeek,
  subMonths,
  subYears,
} from 'date-fns'
import { useState } from 'react'

/**캘린더 날짜 정보 가져와주는 함수
 * 이번달이 아닌 날짜 표시 해주거나 없애기
 */

export default function useCalendar() {
  const date = new Date()
  const [currentDate, setCurrentDate] = useState(date) //오늘날짜
  const [selectedDate, setselectedDate] = useState<Date>(date) //선택한날짜, 기본 오늘날짜

  const monthStart = startOfWeek(startOfMonth(currentDate)) //현재 달의 첫주 시작 날짜
  const monthEnd = endOfWeek(endOfMonth(currentDate)) // 현재 달의 마지막주의 마지막 날짜

  const currentMonthAllDates = eachDayOfInterval({
    start: monthStart,
    end: monthEnd,
  }) // 이번달의 첫주 시작 날짜부터 마지막 주 마지막 날짜까지의 모든 날

  const handleNextMonth = () => {
    setCurrentDate((prevDate) => addMonths(prevDate, 1)) //다음달
  }

  const handlePrevMonth = () => {
    setCurrentDate((prevDate) => subMonths(prevDate, 1)) //이전달
  }

  const handleNextYear = () => {
    setCurrentDate((prevDate) => addYears(prevDate, 1)) //다음년
  }
  const handlePrevYear = () => {
    setCurrentDate((prevDate) => subYears(prevDate, 1)) //이전년
  }

  const handleselectedDate = (date: Date) => {
    setselectedDate(date)
    console.log(date)
  } //선택한 날짜

  const year = format(currentDate, 'yyyy') //올해
  const month = format(currentDate, 'M') //현재 달

  return {
    selectedDate,
    currentMonthAllDates,
    handleNextMonth,
    handlePrevMonth,
    handleNextYear,
    handlePrevYear,
    handleselectedDate,
    year,
    month,
  }
}
