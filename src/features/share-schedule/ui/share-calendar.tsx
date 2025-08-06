import { format } from 'date-fns'
import { useNavigate, useParams } from 'react-router'

import isPastDate from '@/entities/utils/is-past-date'
import { IconInvite } from '@/shared/assets/icons'
import { FloatButton } from '@/shared/ui'
import {
  Calendar,
  HeaderContainer,
  HeaderMonthLabel,
  HeaderTodayButton,
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
      return
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
        <HeaderMonthLabel />
        <HeaderTodayButton>오늘</HeaderTodayButton>
      </HeaderContainer>
      <InfiniteCalendar disablePrev isPast>
        {(date) => <RenderScheduleBadges date={date} scheduleMap={scheduleMap} isShareCalendar />}
      </InfiniteCalendar>
      <FloatButton className="bg-primary-60" size="large" onClick={goToCreateAppointment}>
        <IconInvite className="size-8" />
      </FloatButton>
    </Calendar>
  )
}
