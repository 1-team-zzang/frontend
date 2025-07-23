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

  return {
    day,
    isSunday,
    isSaturday,
    isToday,
  }
}
