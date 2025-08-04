import { useSuspenseQuery } from '@tanstack/react-query'
import { useParams } from 'react-router'

import { getRepeatText } from '@/entities/utils/format-repeat-text'
import getDetailedSchedule from '@/features/my-schedule/detailed-schedule/api/detailed-schedule.API'
import DetailedScheduleCard from '@/shared/ui/detailed-schedule/detailed-schedule-card'

export default function FriendDetailedSchedule() {
  const { scheduleId } = useParams()
  const { data } = useSuspenseQuery({
    queryKey: ['detailed-friend-schedule', scheduleId],
    queryFn: () => getDetailedSchedule(scheduleId!),
  })
  const repeatText = getRepeatText({
    repeatRule: data?.repeatRule ?? null,
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
    <div>아직 일정이 없어요</div>
  )
}
