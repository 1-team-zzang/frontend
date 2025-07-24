/**
 * 지정한 연/월/일에 해당하는 날짜 정보를 계산하여 반환합니다.
 *
 * 반환 정보:
 * - `day`: 요일 (0: 일요일 ~ 6: 토요일)
 * - `isSunday`: 일요일 여부
 * - `isSaturday`: 토요일 여부
 * - `isToday`: 오늘 날짜와 같은지 여부
 * - `isPast`: 과거 날짜인지 여부
 *
 * @param {number} year - 연도 (예: 2025)
 * @param {number} month - 월 (0 = 1월)
 * @param {number} date - 일
 *
 * @returns {{
 *   day: number,
 *   isSunday: boolean,
 *   isSaturday: boolean,
 *   isToday: boolean
 *   isPast:boolean
 * }}
 */

import isPastDate from './is-past-date'

export function getDayInfo(year: number, month: number, date: number) {
  const target = new Date(year, month, date)

  const day = target.getDay()
  const isSunday = day === 0
  const isSaturday = day === 6

  const today = new Date()
  const isToday =
    today.getFullYear() === target.getFullYear() &&
    today.getMonth() === target.getMonth() &&
    today.getDate() === target.getDate()

  const isPast = isPastDate(target)

  return {
    day,
    isSunday,
    isSaturday,
    isToday,
    isPast,
  }
}
