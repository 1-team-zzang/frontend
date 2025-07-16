import { isSameDay, isSameMonth, isToday } from 'date-fns'

interface Props {
  selectedDate: Date | null
  date: Date
  month: Date
}

export default function GetDateVariantStates({ selectedDate, date, month }: Props) {
  const isSelectedDate = !!selectedDate && isSameDay(selectedDate, date)
  const isThisMonthDate = isSameMonth(date, month)
  const isSunday = date.getDay() === 0 && isSameMonth(date, month)
  const isSaturday = date.getDay() === 6 && isSameMonth(date, month)
  const isTodayDate = isToday(date)

  return { isSelectedDate, isThisMonthDate, isSunday, isSaturday, isTodayDate }
}
