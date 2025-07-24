import { useQuery } from '@tanstack/react-query'
import { format } from 'date-fns'

import groupByDate from '@/entities/schedule/models/get-group-by-date'
import repeatedSchedules from '@/entities/schedule/models/repeat-schedules'
import { IconInvite } from '@/shared/assets/icons'
import { ScheduleBadgeFill } from '@/shared/ui/calendar'
import CalendarContainer from '@/shared/ui/calendar/ui/calendar-container'
import CalendarDayName from '@/shared/ui/calendar/ui/calendar-day-name'
import CalendarHeaderContent from '@/shared/ui/calendar/ui/calendar-header-content'
import YearlyCalendar from '@/shared/ui/calendar/ui/yearly-calendar'
import Text from '@/shared/ui/text/text'

import AddScheduleButton from '../../../shared/ui/calendar/ui/add-schedule-button'
import isPastDate from '../../../shared/ui/calendar/util/is-past-date'
import { getShareSchedule } from '../api/share-schedule.API'

import PrivateSchedule from './private-schedule'

export default function ShareSchedule() {
  const { data: schedules = [] } = useQuery({
    queryKey: ['share-schedule'],
    queryFn: getShareSchedule,
  })
  const repeat = repeatedSchedules(schedules)

  const scheduleMap = groupByDate(repeat)

  return (
    <CalendarContainer
      renderDateCellContent={(date) => {
        const key = format(date, 'yyyy-MM-dd')
        const items = scheduleMap[key] || []
        const visible = items.slice(0, 1)
        const hiddenCount = items.length - visible.length
        const isPast = isPastDate(date)

        return (
          <div className={'flex flex-col gap-1 w-full px-1'}>
            {!isPast &&
              visible.map((item) =>
                item.isVisible ? (
                  <ScheduleBadgeFill key={item.title} color={item.color}>
                    {item.title}
                  </ScheduleBadgeFill>
                ) : (
                  <PrivateSchedule key={item.title} />
                ),
              )}
            {!isPast && hiddenCount > 0 && (
              <Text as="span" typography="caption-10" className="w-full text-left text-gray-80">
                +{hiddenCount}
              </Text>
            )}
          </div>
        )
      }}
      onDateClick={(date) => {
        if (isPastDate(date)) {
          alert('오늘 이전 날짜는 선택할 수 없습니다')
          return
        }

        const dateStr = format(date, 'yyyy-MM-dd')
        alert(`${dateStr} 클릭`)
      }}
    >
      <AddScheduleButton>
        <IconInvite />
      </AddScheduleButton>
      <CalendarHeaderContent />
      <CalendarDayName />
      <YearlyCalendar />
    </CalendarContainer>
  )
}
