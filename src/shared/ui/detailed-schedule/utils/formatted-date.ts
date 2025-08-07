import { format } from 'date-fns'
import { ko } from 'date-fns/locale'

interface Props {
  startDate: string
  endDate: string
}

export function formattedDate({ startDate, endDate }: Props) {
  const formattedStartData = format(startDate, 'yyyy년 M월 d일')
  const formattedStartDataweekday = format(startDate, 'EE', { locale: ko })
  const formattedStateDateAmPm = format(startDate, 'a', { locale: ko })
  const formattedStateDateTime = format(startDate, 'h:mm')

  const formattedEndData = format(endDate, 'yyyy년 M월 d일')
  const formattedEndDataweekday = format(endDate, 'EE', { locale: ko })
  const formattedEndDateAmPm = format(endDate, 'a', { locale: ko })
  const formattedEndDateTime = format(endDate, 'h:mm')

  return {
    formattedStartData,
    formattedStartDataweekday,
    formattedStateDateAmPm,
    formattedStateDateTime,
    formattedEndData,
    formattedEndDataweekday,
    formattedEndDateAmPm,
    formattedEndDateTime,
  }
}
