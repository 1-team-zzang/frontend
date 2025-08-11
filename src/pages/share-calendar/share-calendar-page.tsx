import { format } from 'date-fns'
import { Outlet, useNavigate, useParams } from 'react-router'

import { isPastDate } from '@/entities/calendar/lib'
import { HeaderTodayButton } from '@/entities/calendar/ui'
import { useShareScheduleByUserId } from '@/entities/schedule/model'
import { RenderScheduleBadges } from '@/features/calendar/ui'
import { IconInvite } from '@/shared/assets'
import { toast } from '@/shared/ui'
import { CalendarLayout } from '@/widgets/calendar'

export default function ShareCalendarPage() {
  const navigate = useNavigate()
  const { userId } = useParams<{ userId: string }>()
  const { scheduleMap } = useShareScheduleByUserId()

  const onDateClick = (date: Date) => {
    if (isPastDate(date)) {
      toast.error('오늘 이전 날짜는 선택할 수 없습니다')
      return
    }
    const dateStr = format(date, 'yyyy-MM-dd')
    navigate(`/share/${userId}/detailed-schedule/date/${dateStr}`)
  }

  const goToCreateAppointment = () => {
    navigate(`/share/${userId}/appointment/create`)
  }
  return (
    <>
      <Outlet />
      <CalendarLayout
        onDateClick={onDateClick}
        headerLeft={<div className="size-4" />}
        headerRight={<HeaderTodayButton>오늘</HeaderTodayButton>}
        onCreateSchedule={goToCreateAppointment}
        renderDay={(date) => <RenderScheduleBadges isShareCalendar date={date} scheduleMap={scheduleMap} />}
        buttonIcon={<IconInvite />}
        isPast={true}
      />
    </>
  )
}
