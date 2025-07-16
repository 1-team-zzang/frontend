import { isSameMonth, isToday } from 'date-fns'

interface Props {
  date: Date
  month: Date
}

export default function getDateVariantStates({ date, month }: Props) {
  const isThisMonthDate = isSameMonth(date, month)
  const isSunday = date.getDay() === 0 && isSameMonth(date, month)
  const isSaturday = date.getDay() === 6 && isSameMonth(date, month)
  const isTodayDate = isToday(date)

  return { isThisMonthDate, isSunday, isSaturday, isTodayDate }
}
