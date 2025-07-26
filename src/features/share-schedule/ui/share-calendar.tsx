import { format } from 'date-fns'

import { IconInvite } from '@/shared/assets/icons'
import { ScheduleBadgeFill } from '@/shared/ui/calendar'
import Text from '@/shared/ui/text/text'
import CalendarUI from '@/widget/ui/calendar-ui'

import AddScheduleButton from '../../../shared/ui/calendar/ui/add-schedule-button'
import isPastDate from '../../../shared/ui/calendar/util/is-past-date'
import { useShareSchedule } from '../hooks/use-share-schedule'

import PrivateSchedule from './private-schedule'

export default function ShareCalendar() {
  const { scheduleMap } = useShareSchedule()

  return (
    <CalendarUI
      disablePastDateStyling={false}
      renderDateCellContent={(date) => {
        const key = format(date, 'yyyy-MM-dd')
        const items = scheduleMap[key] || []
        const visible = items.slice(0, 1)
        const hiddenCount = items.length - visible.length
        const isPast = isPastDate(date)

        return (
          <div className="flex flex-col gap-1 w-full px-1">
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
    </CalendarUI>
  )
}
