import { useQuery } from '@tanstack/react-query'
import { format } from 'date-fns'
import { useParams } from 'react-router'

import groupByDate from '@/entities/schedule/models/get-group-by-date'
import repeatedSchedules from '@/entities/schedule/models/repeat-schedules'
import { IconCalendarAdd } from '@/shared/assets/icons'
import { DateCellContent } from '@/shared/ui/calendar'
import AddScheduleButton from '@/shared/ui/calendar/ui/add-schedule-button'
import CalendarUI from '@/widget/ui/calendar-ui'

import { getFriendSchedule } from '../api/friend-schedule.API'

export default function FriendCalendar() {
  const { friendID } = useParams()

  const { data: schedules = [] } = useQuery({
    queryKey: ['friend-schedule', friendID],
    queryFn: () => getFriendSchedule(friendID!),
    enabled: !!friendID,
  })

  const repeat = repeatedSchedules(schedules)

  const scheduleMap = groupByDate(repeat)

  return (
    <CalendarUI
      disablePastDateStyling
      renderDateCellContent={(date) => DateCellContent({ scheduleMap, date })}
      onDateClick={(date) => alert(`Selected date: ${format(date, 'yyyy-MM-dd')}`)}
    >
      <AddScheduleButton>
        <IconCalendarAdd />
      </AddScheduleButton>
    </CalendarUI>
  )
}
