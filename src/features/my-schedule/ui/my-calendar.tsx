import { useQuery } from '@tanstack/react-query'
import { format } from 'date-fns'

import groupByDate from '@/entities/schedule/models/get-group-by-date'
import repeatedSchedules from '@/entities/schedule/models/repeat-schedules'
import { IconCalendarAdd } from '@/shared/assets/icons'
import { ScheduleBadgeFill } from '@/shared/ui/calendar'
import AddScheduleButton from '@/shared/ui/calendar/ui/add-schedule-button'
import Text from '@/shared/ui/text/text'
import CalendarUI from '@/widget/ui/calendar-ui'

import { getMySchedule } from '../api/my-schedule.API'

export default function MyCalendar() {
  const { data: schedules = [] } = useQuery({
    queryKey: ['schedule'],
    queryFn: getMySchedule,
  })
  const repeat = repeatedSchedules(schedules)

  const scheduleMap = groupByDate(repeat)

  return (
    <CalendarUI
      disablePastDateStyling={true}
      renderDateCellContent={(date) => {
        const key = format(date, 'yyyy-MM-dd')
        const items = scheduleMap[key] || []
        const visible = items.slice(0, 1)
        const hiddenCount = items.length - visible.length

        return (
          <div className="flex flex-col gap-1 w-full px-1">
            {visible.map((item) => (
              <ScheduleBadgeFill key={item.title} color={item.color}>
                {item.title}
              </ScheduleBadgeFill>
            ))}
            {hiddenCount > 0 && (
              <Text as="span" typography="caption-10" className="w-full text-left text-gray-80">
                +{hiddenCount}
              </Text>
            )}
          </div>
        )
      }}
      onDateClick={(date) => {
        const dateStr = format(date, 'yyyy-MM-dd')
        alert(`${dateStr} 클릭`)
      }}
    >
      <AddScheduleButton>
        <IconCalendarAdd />
      </AddScheduleButton>
    </CalendarUI>
  )
}
