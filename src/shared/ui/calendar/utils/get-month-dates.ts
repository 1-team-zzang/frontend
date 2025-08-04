/**
 *
 * @param targetDate : 해당 달
 * @returns
 */

export function getMonthDates(targetDate: Date) {
  const getStartOfCurrentMonth = () => {
    return new Date(targetDate.getFullYear(), targetDate.getMonth(), 1)
  } //시작 날짜 구하는 함수

  const getLastDateOfCurrentMonth = () => {
    const nextMonth = new Date(targetDate.getFullYear(), targetDate.getMonth() + 1, 0)
    return nextMonth.getDate()
  } //마지막 날짜 구하는 함수

  const firstDayOfMonth = getStartOfCurrentMonth().getDay() //시작요일 구하는 함수 월요일이면 1

  const LastDayOfMonth = getLastDateOfCurrentMonth()

  const lastDate = new Date(targetDate.getFullYear(), targetDate.getMonth(), LastDayOfMonth)
  const lastDayOfWeek = lastDate.getDay() // 마지막 날짜의 요일
  const remainingDaysInWeek = 6 - lastDayOfWeek

  return { firstDayOfMonth, LastDayOfMonth, remainingDaysInWeek }
}
