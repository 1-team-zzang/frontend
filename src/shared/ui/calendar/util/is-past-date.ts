import { isBefore, startOfDay } from 'date-fns'

export default function isPastDate(date: Date) {
  const today = startOfDay(new Date())
  return isBefore(date, today)
}
//isBefore: 파라미터 날짜가 오늘 이전인지
