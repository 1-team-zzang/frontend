import { format } from 'date-fns'
import { useNavigate, useParams } from 'react-router'

import isPastDate from '@/entities/utils/is-paste-date'
import { IconInvite } from '@/shared/assets/icons'
import {
  AddScheduleButton,
  Calendar,
  HeaderButton,
  HeaderContainer,
  HearderMonthLabel,
  InfiniteCalendar,
  RenderScheduleBadges,
} from '@/shared/ui/calendar'
import { toast } from '@/shared/ui/toast'

import { useShareSchedule } from '../hooks/use-share-schedule'

export default function ShareCalendar() {
  const navigate = useNavigate()
  const { userId } = useParams<{ userId: string }>()
  const { scheduleMap } = useShareSchedule()
  const onDateClick = (date: Date) => {
    if (isPastDate(date)) {
      toast.error('오늘 이전 날짜는 선택할 수 없습니다')
    }
    const dateStr = format(date, 'yyyy-MM-dd')
    navigate(`/share/${userId}/detailed-schedule/date/${dateStr}`)
  }

  const goToCreateAppointment = () => {
    alert('약속신청하기')
  }

  return (
    <Calendar onDateClick={onDateClick}>
      <HeaderContainer>
        <div className="size-4" />
        <HearderMonthLabel />
        <HeaderButton>오늘</HeaderButton>
      </HeaderContainer>
      <InfiniteCalendar disablePrev={true}>
        {(date) => <RenderScheduleBadges date={date} scheduleMap={scheduleMap} />}
      </InfiniteCalendar>
      <AddScheduleButton onClick={goToCreateAppointment}>
        <IconInvite />
      </AddScheduleButton>
    </Calendar>
  )
}
