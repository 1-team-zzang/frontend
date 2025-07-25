import { format } from 'date-fns'
import { useParams } from 'react-router'

import { formatScheduleTime } from '@/entities/utils/format-schedule-time'
import { IconCalendarAdd } from '@/shared/assets/icons'
import { DetailedScheduleHeader, DetailedScheduleListCard } from '@/shared/ui/calendar'
import AddScheduleButton from '@/shared/ui/calendar/ui/add-schedule-button'

import { useDateSchedules } from '../../hooks/use-date-schedules'

export default function MyDetailedScheduleList() {
  const { date } = useParams() // ex: '2025-08-01'

  const { scheduleMap } = useDateSchedules()

  const list = date ? (scheduleMap[date] ?? []) : []

  const formattedDate = date ? format(new Date(date), 'M월 d일') : ''

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
                  key={card.title}
                  title={card.title}
                  time={formatScheduleTime(card)}
                  badgeColor={card.color}
                />
              )
            })}
          </div>
        )}
        <AddScheduleButton>
          <IconCalendarAdd />
        </AddScheduleButton>
      </div>
    </div>
  )
}
