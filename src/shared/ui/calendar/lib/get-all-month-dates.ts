import getCurrentMonthDates from './get-current-month-dates'

/**
 * @description 2025년 1~12월 날짜 배열을 한 번에 모두 리턴하는 함수
 * @returns Date[][] - 12개월치 날짜 배열 (한 달 = Date[])
 *
 *
 */

export default function getAllMonthDates(year: number): Date[][] {
  const allDatesByMonth = Array.from({ length: 12 }, (_, i) => {
    //12달 짜리 배열
    const date = new Date(year, i, 1) //각 월의 1일
    return getCurrentMonthDates(date) //각 월의 전체 날짜
  })

  return allDatesByMonth
}
