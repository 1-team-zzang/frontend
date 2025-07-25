import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router'

import DetailedScheduleCard from '@/shared/ui/calendar/ui/detailed-schedule-card'
import { devLog } from '@/shared/utils/dev-log'

import getDetailedSchedule from '../api/detailed-schedule.API'

export default function MyDetailedSchedule() {
  const { scheduleId } = useParams()
  const { data } = useQuery({
    queryKey: ['detailed-schedule', scheduleId],
    queryFn: () => getDetailedSchedule(scheduleId!),
    enabled: !!scheduleId,
  })
  devLog('log', '세부일정', data)
  return data ? (
    <DetailedScheduleCard
      badgeColor={data.color}
      title={data.title}
      startDate={data.startAt}
      endDate={data.endAt}
      repeat={data.repeatType ?? '없음'}
    />
  ) : (
    <div>아직 일정이 없어요</div>
  )
}
