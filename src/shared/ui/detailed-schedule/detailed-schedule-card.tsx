import { format } from 'date-fns'
import { ko } from 'date-fns/locale'

import Text from '../text/text'

import { DetailedScheduleCardContent, DetailedScheduleColorBadge, DetailedScheduleDate } from '.'

import type { ColorType } from '@/entities/schedule'

interface Props {
  badgeColor: ColorType
  title: string
  startDate: string
  endDate: string
  repeat: string | null
  visible: boolean
  content: string
}

export default function DetailedScheduleCard({
  badgeColor,
  title,
  startDate,
  endDate,
  repeat,
  visible,
  content,
}: Props) {
  const formattedStartData = format(startDate, 'yyyy년 M월 d일')
  const formattedStartDataweekday = format(startDate, 'EE', { locale: ko })
  const formattedStateDateAmPm = format(startDate, 'a', { locale: ko })
  const formattedStateDateTime = format(startDate, 'h:mm')

  const formattedEndData = format(endDate, 'yyyy년 M월 d일')
  const formattedEndDataweekday = format(endDate, 'EE', { locale: ko })
  const formattedEndDateAmPm = format(endDate, 'a', { locale: ko })
  const formattedEndDateTime = format(endDate, 'h:mm')

  return (
    <div className="w-full h-full bg-white p-6 rounded-[0.625em] flex flex-col  gap-4 mb-4">
      <div className="flex items-center justify-center gap-2">
        <DetailedScheduleColorBadge badgeColor={badgeColor} />
        <Text typography="h2-heading" className="w-[90%] font-bold text-center truncate">
          {title}
        </Text>
      </div>

      <div className="flex justify-between items-center">
        <DetailedScheduleDate
          date={formattedStartData}
          weekday={formattedStartDataweekday}
          AmPm={formattedStateDateAmPm}
          time={formattedStateDateTime}
        />
        <Text typography="h1-heading" className="text-gray-80">
          {'〉'}
        </Text>
        <DetailedScheduleDate
          date={formattedEndData}
          weekday={formattedEndDataweekday}
          AmPm={formattedEndDateAmPm}
          time={formattedEndDateTime}
        />
      </div>
      <DetailedScheduleCardContent label="공개" value={visible ? '전체공개' : '나만보기'} />
      <DetailedScheduleCardContent label="반복" value={repeat ?? '없음'} />
      <DetailedScheduleCardContent className="flex-col items-start" label="일정내용" value={content} />
    </div>
  )
}
