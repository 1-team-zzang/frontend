import { format } from 'date-fns'
import { useNavigate } from 'react-router'

import { IconInvite } from '@/shared/assets/icons'
import { DateCellContent } from '@/shared/ui/calendar'
import CalendarUI from '@/widget/ui/calendar-ui'

import AddScheduleButton from '../../../shared/ui/calendar/ui/add-schedule-button'
import isPastDate from '../../../shared/ui/calendar/util/is-past-date'
import { useShareSchedule } from '../hooks/use-share-schedule'

export default function ShareCalendar() {
  const { scheduleMap } = useShareSchedule()
  const navigate = useNavigate()

  const handleDateClick = (date: Date, navigate: ReturnType<typeof useNavigate>) => {
    if (isPastDate(date)) {
      alert('오늘 이전 날짜는 선택할 수 없습니다')
      return
    }
    const dateStr = format(date, 'yyyy-MM-dd')
    navigate(`/sheard-calendar/date/${dateStr}`)
  }

  return (
    <CalendarUI
      disablePastDateStyling={false}
      renderDateCellContent={(date) => DateCellContent({ scheduleMap, date, isPast: isPastDate(date) })}
      onDateClick={(date) => handleDateClick(date, navigate)}
    >
      <AddScheduleButton>
        <IconInvite />
      </AddScheduleButton>
    </CalendarUI>
  )
}
