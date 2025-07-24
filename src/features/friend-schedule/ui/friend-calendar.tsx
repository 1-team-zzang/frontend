import { useQuery } from '@tanstack/react-query'
import { format } from 'date-fns'

import groupByDate from '@/entities/schedule/models/get-group-by-date'
import repeatedSchedules from '@/entities/schedule/models/repeat-schedules'
import { IconCalendarAdd } from '@/shared/assets/icons'
import { ScheduleBadgeFill } from '@/shared/ui/calendar'
import AddScheduleButton from '@/shared/ui/calendar/ui/add-schedule-button'
import CalendarContainer from '@/shared/ui/calendar/ui/calendar-container'
import CalendarDayName from '@/shared/ui/calendar/ui/calendar-day-name'
import CalendarHeaderContent from '@/shared/ui/calendar/ui/calendar-header-content'
import YearlyCalendar from '@/shared/ui/calendar/ui/yearly-calendar'
import Text from '@/shared/ui/text/text'

import { PrivateSchedule } from '../../share-schedule'
import { getFriendSchedule } from '../api/friend-schedule.API'

export default function FriendCalendar() {
  const { data: schedules = [] } = useQuery({
    queryKey: ['friend-schedule'],
    queryFn: getFriendSchedule,
  })

  // const { friendID } = useParams()

  // const { data } = useQuery({
  //   queryKey: ['friend-schedule', friendID],
  //   queryFn: () => {
  //     if (!friendID) throw new Error('No friend ID')
  //     return getFriendSchedule(friendID)
  //   },
  //   enabled: !!friendID,
  // })

  const repeat = repeatedSchedules(schedules)

  const scheduleMap = groupByDate(repeat)

  return (
    <CalendarContainer
      renderDateCellContent={(date) => {
        const key = format(date, 'yyyy-MM-dd')
        const items = scheduleMap[key] || []
        const visible = items.slice(0, 1)
        const hiddenCount = items.length - visible.length

        return (
          <div className="flex flex-col gap-1 w-full px-1">
            {visible.map((item) =>
              item.isVisible ? (
                <ScheduleBadgeFill key={item.title} color={item.color}>
                  {item.title}
                </ScheduleBadgeFill>
              ) : (
                <PrivateSchedule key={item.title} />
              ),
            )}
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
      }} //셀 클릭시 실행될 함수, 세부일정보기 구현 후 수정
    >
      <CalendarHeaderContent />
      <CalendarDayName />
      <YearlyCalendar />
      <AddScheduleButton>
        <IconCalendarAdd />
      </AddScheduleButton>
    </CalendarContainer>
  )
}
