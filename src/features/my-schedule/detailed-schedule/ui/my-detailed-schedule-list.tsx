import { format } from 'date-fns'
import { useNavigate, useParams } from 'react-router'

import { formatScheduleTime } from '@/entities/utils/format-schedule-time'
import { DetailedScheduleHeader, DetailedScheduleListCard } from '@/shared/ui/calendar'
import { devLog } from '@/shared/utils/dev-log'

import { useDateSchedules } from '../../hooks/use-date-schedules'

export default function MyDetailedScheduleList() {
  const navigate = useNavigate()
  const { date } = useParams() // ex: '2025-08-01'

  const { scheduleMap } = useDateSchedules()

  const list = date ? (scheduleMap[date] ?? []) : []
  devLog('log', 'date-list', list)

  const formattedDate = date ? format(new Date(date), 'M월 d일') : ''

  const onClick = (scheduleId: number) => {
    navigate(`/my-calendar/schedule/${scheduleId}`)
  }

  return (
    <div className="h-screen">
      <DetailedScheduleHeader date={formattedDate} />
      <div className="p-4 h-full">
        {list.length === 0 ? (
          <div className="text-center">아직 일정이 없어요</div>
        ) : (
          <div className="flex flex-col gap-4">
            {list.map((card) => {
              return (
                <DetailedScheduleListCard
                  onCardClick={() => onClick(card.scheduleId)}
                  key={card.title}
                  title={card.title}
                  time={formatScheduleTime(card)}
                  badgeColor={card.color}
                />
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}
