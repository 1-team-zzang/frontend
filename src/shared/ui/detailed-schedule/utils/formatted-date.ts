import { format } from 'date-fns'
import { ko } from 'date-fns/locale'

interface Props {
  startDate: string
  endDate: string
}

export function formattedDate({ startDate, endDate }: Props) {
  const startData = format(startDate, 'yyyy년 M월 d일')
  const startDataweekday = format(startDate, 'EE', { locale: ko })
  const startDateAmPm = format(startDate, 'a', { locale: ko })
  const startDateTime = format(startDate, 'h:mm')

  const endData = format(endDate, 'yyyy년 M월 d일')
  const endDataweekday = format(endDate, 'EE', { locale: ko })
  const endDateAmPm = format(endDate, 'a', { locale: ko })
  const endDateTime = format(endDate, 'h:mm')

  return {
    startData,
    startDataweekday,
    startDateAmPm,
    startDateTime,
    endData,
    endDataweekday,
    endDateAmPm,
    endDateTime,
  }
}
