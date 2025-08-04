import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router'

import { getRepeatText } from '@/entities/utils/format-repeat-text'
import DetailedScheduleCard from '@/shared/ui/detailed-schedule/detailed-schedule-card'

import getDetailedSchedule from '../api/detailed-schedule.API'

export default function MyDetailedSchedule() {
  const { scheduleId } = useParams()
  const { data } = useQuery({
    queryKey: ['detailed-schedule', scheduleId],
    queryFn: () => getDetailedSchedule(scheduleId!),
    enabled: !!scheduleId,
  })
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
    />
  ) : (
    <div>아직 일정이 없어요</div>
  )
}
