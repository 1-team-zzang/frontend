import { format } from 'date-fns'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router'

import { useUserStore } from '@/entities/user'
import isPastDate from '@/entities/utils/is-past-date'
import { AppointmentModal } from '@/features/appointment/ui'
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
  const { user } = useUserStore()
  const [showNonMemberModal, setShowNonMemberModal] = useState(false)

  // 비회원 사용자인지 확인
  const isLoggedIn = !!user

  // 비회원 사용자일 때 모달 표시
  useEffect(() => {
    if (!isLoggedIn) {
      setShowNonMemberModal(true)
    }
  }, [isLoggedIn])

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

  // 비회원 모달 핸들러
  const handleContinue = () => {
    setShowNonMemberModal(false)
    // 비회원 사용자도 캘린더를 볼 수 있도록 함
  }

  const handleLoginSignup = () => {
    setShowNonMemberModal(false)
    // 로그인/회원가입 페이지로 이동
    navigate('/auth/signin')
  }

  return (
    <>
      {/* 비회원 모달 */}
      {showNonMemberModal && !isLoggedIn && (
        <AppointmentModal
          isOpen={showNonMemberModal}
          onOpenChange={setShowNonMemberModal}
          isLoggedIn={isLoggedIn}
          onContinue={handleContinue}
          onLoginSignup={handleLoginSignup}
        />
      )}

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
    </>
  )
}
