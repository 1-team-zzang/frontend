import { useQuery } from '@tanstack/react-query'
import { format } from 'date-fns'
import { useNavigate, useParams } from 'react-router'

import groupByDate from '@/entities/schedule/models/get-group-by-date'
import { IconCalendarArrowLeft, IconInvite } from '@/shared/assets/icons'
import {
  AddScheduleButton,
  Calendar,
  HeaderButton,
  HeaderContainer,
  HeaderMonthLabel,
  InfiniteCalendar,
  RenderScheduleBadges,
} from '@/shared/ui/calendar'

import { getFriendSchedule } from '../api/friend-schedule.API'

export default function FriendCalendar() {
  const { friendId } = useParams()
  const navigate = useNavigate()

  const { data: schedules = [] } = useQuery({
    queryKey: ['friend-schedule', friendId],
    queryFn: () => getFriendSchedule(friendId!),
    enabled: !!friendId,
  })

  const scheduleMap = groupByDate(schedules)

  const onDateClick = (date: Date) => {
    const dateStr = format(date, 'yyyy-MM-dd')
    navigate(`/friends/${friendId}/calendar/detailed-schedule/date/${dateStr}`)
  }

  const goToCreateAppointment = () => {
    alert('약속 신청하기')
  }

  return (
    <Calendar onDateClick={onDateClick}>
      <HeaderContainer>
        <HeaderButton>
          <IconCalendarArrowLeft />
        </HeaderButton>
        <HeaderMonthLabel />
        <HeaderButton>오늘</HeaderButton>
      </HeaderContainer>
      <InfiniteCalendar>{(date) => <RenderScheduleBadges date={date} scheduleMap={scheduleMap} />}</InfiniteCalendar>
      <AddScheduleButton onClick={goToCreateAppointment}>
        <IconInvite />
      </AddScheduleButton>
    </Calendar>
  )
}
