import { format } from 'date-fns'
import { Outlet, useNavigate, useParams } from 'react-router'

import { useFriendSchedulesByuserId } from '@/entities/schedule/hooks/use-friend-schedule-by-userId'
import { useFriendMonths } from '@/entities/schedule/models'
import { HeaderButton, HeaderTodayButton, RenderScheduleBadges } from '@/features/calendar/ui'
import { IconAppointmentArrowLeft, IconInvite } from '@/shared/assets'
import { CalendarLayout } from '@/widgets/calendar'

export default function FriendCalendarPage() {
  const { friendId } = useParams()
  const navigate = useNavigate()

  const { months, setMonths } = useFriendMonths(friendId!)

  const { scheduleMap } = useFriendSchedulesByuserId({ months, friendId: friendId! })

  const onDateClick = (date: Date) => {
    const dateStr = format(date, 'yyyy-MM-dd')
    navigate(`/friends/${friendId}/calendar/detailed-schedule/date/${dateStr}`)
  }

  const goToCreateAppointment = () => {
    navigate(`/friends/${friendId}/calendar/appointment/create`)
  }
  return (
    <>
      <Outlet />
      <CalendarLayout
        onDateClick={onDateClick}
        headerLeft={
          <HeaderButton onClick={() => navigate(-1)}>
            <IconAppointmentArrowLeft />
          </HeaderButton>
        }
        headerRight={<HeaderTodayButton>오늘</HeaderTodayButton>}
        months={months}
        setMonths={setMonths}
        onCreateSchedule={goToCreateAppointment}
        renderDay={(date) => <RenderScheduleBadges date={date} scheduleMap={scheduleMap} />}
        buttonIcon={<IconInvite className="size-8" />}
      />
    </>
  )
}
