import useCalendarDates from './use-calendar-date'

/**
 * @description 2025년 1~12월 날짜 배열을 한 번에 모두 리턴하는 훅
 * @returns Date[][] - 12개월치 날짜 배열 (한 달 = Date[])
 */
export default function useAllMonthDates(): Date[][] {
  const allDatesByMonth = Array.from({ length: 12 }, (_, i) => {
    const date = new Date(2025, i, 1)
    return useCalendarDates(date)
  })

  return allDatesByMonth
}
