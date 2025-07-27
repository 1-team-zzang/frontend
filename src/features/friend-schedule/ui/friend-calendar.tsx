import { useQuery } from '@tanstack/react-query'
import { format } from 'date-fns'
import { useNavigate, useParams } from 'react-router'

import groupByDate from '@/entities/schedule/models/get-group-by-date'
import { IconCalendarAdd } from '@/shared/assets/icons'
import { DateCellContent } from '@/shared/ui/calendar'
import AddScheduleButton from '@/shared/ui/calendar/ui/add-schedule-button'
import CalendarUI from '@/widget/ui/calendar-ui'

import { getFriendSchedule } from '../api/friend-schedule.API'

export default function FriendCalendar() {
  const { friendId } = useParams()
  const navigate = useNavigate()

  const { data: schedules = [] } = useQuery({
    queryKey: ['friend-schedule', friendId],
    queryFn: () => getFriendSchedule(friendId!),
    enabled: !!friendId,
  })

  const scheduleMap = groupByDate(schedules)

  const handleDateClick = (date: Date) => {
    const dateStr = format(date, 'yyyy-MM-dd')
    navigate(`/friends/${friendId}/calendar/detailed-schedule/date/${dateStr}`)
  }

  return (
    <CalendarUI
      disablePastDateStyling
      renderDateCellContent={(date) => <DateCellContent scheduleMap={scheduleMap} date={date} />}
      onDateClick={handleDateClick}
    >
      <AddScheduleButton>
        <IconCalendarAdd />
      </AddScheduleButton>
    </CalendarUI>
  )
}
