import { eachDayOfInterval, startOfWeek, endOfWeek, startOfMonth, endOfMonth } from 'date-fns'

/**
 * @description 캘린더에 표시할 날짜 배열을 계산하는 훅입니다.
 * 주어진 currentDate를 기준으로
 * 시작 날짜부터 끝 날짜까지의 Date 배열을 반환합니다.
 *
 *
 * @param currentDate 기준이 되는 현재 날짜
 * @returns 캘린더에 표시할 날짜 배열 (Date[]) ex) 7월 기준 6.29~8.2
 */

export default function useCalendarDates(currentDate: Date) {
  const monthStart = startOfWeek(startOfMonth(currentDate)) //현재 달의 첫주 시작 날짜
  const monthEnd = endOfWeek(endOfMonth(currentDate)) // 현재 달의 마지막주의 마지막 날짜

  const currentMonthAllDates = eachDayOfInterval({
    start: monthStart,
    end: monthEnd,
  })

  return currentMonthAllDates
}
