import { useQuery } from '@tanstack/react-query'
import { format } from 'date-fns'

import CalendarContainer from '@/shared/ui/calendar/ui/calendar-container'
import CalendarDayName from '@/shared/ui/calendar/ui/calendar-day-name'
import CalendarHeaderContent from '@/shared/ui/calendar/ui/calendar-header-content'
import YearlyCalendar from '@/shared/ui/calendar/ui/yearly-calendar'
import Text from '@/shared/ui/text/text'

import { groupByDate } from '../../../entities/schedule/models/get-group-by-date'
import expandRepeatedSchedules from '../../../entities/schedule/models/repeat-schedules'
import { getMySchedule } from '../api/my-schedule.API'

import ScheduleBadgeFill from './schedule-badge-fill'

export default function MySchedule() {
  const { data: schedules = [] } = useQuery({
    queryKey: ['schdule'],
    queryFn: getMySchedule,
  })
  const expanded = expandRepeatedSchedules(schedules)

  const scheduleMap = groupByDate(expanded)

  return (
    <CalendarContainer
      renderDateCellContent={(date) => {
        const key = format(date, 'yyyy-MM-dd')
        const items = scheduleMap[key] || []

        const visible = items.slice(0, 1)
        const hiddenCount = items.length - visible.length

        return (
          <div className="flex flex-col gap-1 w-full px-1">
            {visible.map((item) => (
              <ScheduleBadgeFill key={item.title} color={item.color}>
                {item.title.length > 6 ? item.title.slice(0, 6) + '…' : item.title}
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
    >
      <CalendarHeaderContent />
      <CalendarDayName />
      <YearlyCalendar />
    </CalendarContainer>
  )
}
