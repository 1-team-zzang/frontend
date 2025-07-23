/**
 *
 * @param targetDate : 해당 달의 1일~31일
 * @returns
 */

export default function getMonthDates(targetDate: Date) {
  const getStartOfCurrentMonth = () => {
    return new Date(targetDate.getFullYear(), targetDate.getMonth(), 1)
  } //시작 날짜 구하는 함수

  const getLastDateOfCurrentMonth = () => {
    const nextMonth = new Date(targetDate.getFullYear(), targetDate.getMonth() + 1, 0)
    return nextMonth.getDate()
  } //마지막 날짜 구하는 함수

  const firstDayOfMonth = getStartOfCurrentMonth().getDay() //시작요일 구하는 함수 월요일이면 1

  const daysInMonth = getLastDateOfCurrentMonth()

  return { firstDayOfMonth, daysInMonth }
}
