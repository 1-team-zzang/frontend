import { useParams } from 'react-router'

import { DetailedScheduleCard, NonSchedule } from '@/entities/detailed-schedule/ui'
import { useDetailedSchedule } from '@/entities/schedule/model'
import { getRepeatText } from '@/entities/utils'

export default function FriendDetailedSchedule() {
  const { scheduleId } = useParams()
  const data = useDetailedSchedule(scheduleId!)
  const repeatText = getRepeatText({
    repeatRule: data?.repeatRule ?? '',
    repeatType: data?.repeatType ?? null,
    repeatCount: data?.repeatCount ?? null,
    repeatEndAt: data?.repeatEndAt ?? null,
  })

  return data ? (
    <DetailedScheduleCard
      badgeColor={data.color}
      title={data.title}
      startDate={data.startAt}
      endDate={data.endAt}
      repeat={repeatText ?? ''}
      visible={data.isVisible}
      content={data.content}
    />
  ) : (
    <NonSchedule />
  )
}
