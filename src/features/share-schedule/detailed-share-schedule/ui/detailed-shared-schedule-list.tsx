import { useNavigate, useParams } from 'react-router'

import { formatScheduleTime } from '@/entities/utils/format-schedule-time'
import { useDateSchedules } from '@/features/my-schedule'
import { DetailedScheduleListCard } from '@/shared/ui/calendar'

export default function DetailedSharedScheduleList() {
  const navigate = useNavigate()
  const { date } = useParams() // ex: '2025-08-01'

  const { scheduleMap } = useDateSchedules()

  const list = date ? (scheduleMap[date] ?? []) : []

  const onClick = (scheduleId: number) => {
    navigate(`sheard-calendar/date/${date}/schedule/${scheduleId}`)
  }

  return (
    <div>
      {list.length === 0 ? (
        <div className="text-center">아직 일정이 없어요</div>
      ) : (
        <div className="flex flex-col gap-4">
          {list.map((card) => {
            return (
              <DetailedScheduleListCard
                onCardClick={() => onClick(card.scheduleId)}
                key={card.scheduleId}
                title={card.title}
                time={formatScheduleTime(card)}
                badgeColor={card.color}
              />
            )
          })}
        </div>
      )}
    </div>
  )
}
