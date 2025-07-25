import { useQuery } from '@tanstack/react-query'
import { format } from 'date-fns'
import { ko } from 'date-fns/locale'
import { useParams } from 'react-router'

import groupByDate from '@/entities/schedule/models/get-group-by-date'
import repeatedSchedules from '@/entities/schedule/models/repeat-schedules'
import { getMySchedule } from '@/features/my-schedule'
import { IconCalendarAdd } from '@/shared/assets/icons'
import AddScheduleButton from '@/shared/ui/calendar/ui/add-schedule-button'

import Header from './header'
import ScheduleCard from './schedule-card'

export default function DetailedSchedule() {
  const { date } = useParams() // ex: '2025-08-01'

  const { data: schedules = [] } = useQuery({
    queryKey: ['schedule'],
    queryFn: getMySchedule,
  })

  const repeated = repeatedSchedules(schedules)
  const scheduleMap = groupByDate(repeated)

  const list = date ? (scheduleMap[date] ?? []) : []

  const formattedDate = date ? format(new Date(date), 'M월 d일') : ''

  return (
    <div className="h-screen">
      <Header date={formattedDate} />
      <div className="bg-gray-5 p-4 h-full">
        {list.length === 0 ? (
          <div className="text-center text-gray-400 mt-4">등록된 일정이 없습니다.</div>
        ) : (
          <div className="flex flex-col gap-4">
            {list.map((card) => {
              const start = new Date(card.startAt)
              const end = new Date(card.endAt)

              const formattedTime = card.isAllDay
                ? '하루종일'
                : `${format(start, 'a h:mm', { locale: ko })} ~ ${format(end, 'a h:mm', { locale: ko })}`

              return <ScheduleCard key={card.title} title={card.title} time={formattedTime} badgeColor={card.color} />
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
