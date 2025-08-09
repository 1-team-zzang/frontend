import { useQuery } from '@tanstack/react-query'
import { format } from 'date-fns'
import { useNavigate, useParams } from 'react-router'

import { groupByDate, scheduleQueryKeys } from '@/entities/schedule/models'
import { Calendar, HeaderButton, HeaderLayout, InfiniteCalendar, RenderScheduleBadges } from '@/features/calendar/ui'
import { IconAppointmentArrowLeft, IconInvite } from '@/shared/assets/icons'
import { FloatButton } from '@/shared/ui'

import { getFriendSchedule } from '../../../entities/schedule/api/get-friend-schedule.API'

export default function FriendCalendar() {
  const { friendId } = useParams()
  const navigate = useNavigate()

  const { data: schedules = [] } = useQuery({
    queryKey: scheduleQueryKeys.userSchedules(friendId!),
    queryFn: () => getFriendSchedule(friendId!),
    enabled: !!friendId,
  })

  const scheduleMap = groupByDate(schedules)

  const onDateClick = (date: Date) => {
    const dateStr = format(date, 'yyyy-MM-dd')
    navigate(`/friends/${friendId}/calendar/detailed-schedule/date/${dateStr}`)
  }

  const goToCreateAppointment = () => {
    navigate(`/friends/${friendId}/calendar/appointment/create`)
  }

  return (
    <Calendar onDateClick={onDateClick}>
      <HeaderLayout
        left={
          <HeaderButton onClick={() => navigate(-1)}>
            <IconAppointmentArrowLeft />
          </HeaderButton>
        }
        right={<HeaderButton>오늘</HeaderButton>}
      />
      <InfiniteCalendar>{(date) => <RenderScheduleBadges date={date} scheduleMap={scheduleMap} />}</InfiniteCalendar>
      <FloatButton className="bg-primary-60" size="large" onClick={goToCreateAppointment}>
        <IconInvite className="size-8" />
      </FloatButton>
    </Calendar>
  )
}
