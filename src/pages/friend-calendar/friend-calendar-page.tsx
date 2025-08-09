import { format } from 'date-fns'
import { useState } from 'react'
import { Outlet, useNavigate, useParams } from 'react-router'

import { useFriendSchedulesByMonth } from '@/entities/schedule/hooks/use-friend-schedule-by-userId'
import { HeaderButton, RenderScheduleBadges } from '@/features/calendar/ui'
import { getInitialMonth } from '@/features/calendar/utils'
import { IconAppointmentArrowLeft, IconInvite } from '@/shared/assets'
import { CalendarLayout } from '@/widgets/calendar'

import type { Month } from '@/features/calendar/type'

export default function FriendCalendarPage() {
  const { friendId } = useParams()
  const navigate = useNavigate()

  const [months, setMonths] = useState<Month[]>(getInitialMonth(false))
  const { scheduleMap } = useFriendSchedulesByMonth(months)

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
        headerRight={<HeaderButton>오늘</HeaderButton>}
        months={months}
        setMonths={setMonths}
        onCreateSchedule={goToCreateAppointment}
        renderDay={(date) => <RenderScheduleBadges date={date} scheduleMap={scheduleMap} />}
        buttonIcon={<IconInvite className="size-8" />}
      />
    </>
  )
}
