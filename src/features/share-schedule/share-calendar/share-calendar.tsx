import { format } from 'date-fns'
import { useNavigate, useParams } from 'react-router'

import { IconInvite } from '@/shared/assets/icons'
import { DateCellContent } from '@/shared/ui/calendar'
import CalendarUI from '@/widget/ui/calendar-ui'

import AddScheduleButton from '../../../shared/ui/calendar/ui/add-schedule-button'
import isPastDate from '../../../shared/ui/calendar/util/is-past-date'
import { useShareSchedule } from '../hooks/use-share-schedule'

export default function ShareCalendar() {
  const { scheduleMap } = useShareSchedule()
  const navigate = useNavigate()
  const { userId } = useParams<{ userId: string }>()

  const handleDateClick = (date: Date, navigate: ReturnType<typeof useNavigate>) => {
    if (isPastDate(date)) {
      alert('오늘 이전 날짜는 선택할 수 없습니다')
      return
    }
    const dateStr = format(date, 'yyyy-MM-dd')
    navigate(`/share/${userId}/detailed-schedule/date/${dateStr}`)
  }

  const goToCreateAppointment = () => {
    alert('약속 생성 기능은 아직 구현되지 않았습니다.')
  }

  return (
    <CalendarUI
      disablePastDateStyling={false}
      renderDateCellContent={(date) => DateCellContent({ scheduleMap, date, isPast: isPastDate(date) })}
      onDateClick={(date) => handleDateClick(date, navigate)}
    >
      <AddScheduleButton onClick={goToCreateAppointment}>
        <IconInvite />
      </AddScheduleButton>
    </CalendarUI>
  )
}
