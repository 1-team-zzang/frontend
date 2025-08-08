import { format } from 'date-fns'
import { ko } from 'date-fns/locale'

type Callback = (date: string, dayOfWeek: string) => string

export function formatDateTimeWithDay(date: string | Date, callback?: Callback, isShowAmPm = true) {
  const formattedDate = format(date, 'yyyy.MM.dd')
  const formattedTime = format(date, 'HH:mm')
  const formattedAmPm = format(date, 'a', { locale: ko })

  const dayOfWeek = format(date, 'E', { locale: ko })

  if (callback) {
    return callback(formattedDate, dayOfWeek)
  }

  if (!isShowAmPm) {
    return `${formattedDate} ${formattedTime}`
  }

  return `${formattedDate} ${formattedAmPm} ${formattedTime} (${dayOfWeek})`
}
