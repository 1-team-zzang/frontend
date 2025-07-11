import { eachDayOfInterval, startOfWeek, endOfWeek, startOfMonth, endOfMonth } from 'date-fns'

/** 달력을 구성하는 날짜 계산 */

export default function useCalendar(currentDate: Date) {
  const monthStart = startOfWeek(startOfMonth(currentDate)) //현재 달의 첫주 시작 날짜
  const monthEnd = endOfWeek(endOfMonth(currentDate)) // 현재 달의 마지막주의 마지막 날짜

  const currentMonthAllDates = eachDayOfInterval({
    start: monthStart,
    end: monthEnd,
  }) //현재 달 모든 날짜
  return currentMonthAllDates
}
