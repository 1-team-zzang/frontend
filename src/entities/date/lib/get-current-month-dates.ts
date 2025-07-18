import { eachDayOfInterval, endOfMonth, endOfWeek, startOfMonth, startOfWeek } from 'date-fns'

/**
 * @description
 * 지정한 날짜(currentDate)를 기준으로 해당 달의 모든 날짜(Date[]) 배열을 반환하는 함수입니다.
 * - 각 달은 주 단위(일~토)로 표시되기 때문에,
 *   시작 날짜는 해당 달의 첫 주의 일요일
 *   끝 날짜는 해당 달의 마지막 주의 토요일
 * - ex) 2025년 7월이면 6.29 ~ 8.2 까지 반환
 *
 * @param currentDate 기준이 되는 날짜
 * @returns () => Date[] : 계산된 날짜 배열
 *
 * @example
 * const dates = useCalendarDates(new Date(2025, 7, 1))
 * // => 6.29 ~ 8.2
 */
export default function getCurrentMonthDates(currentDate: Date) {
  const monthStart = startOfWeek(startOfMonth(currentDate))
  const monthEnd = endOfWeek(endOfMonth(currentDate))

  return eachDayOfInterval({ start: monthStart, end: monthEnd })
}
