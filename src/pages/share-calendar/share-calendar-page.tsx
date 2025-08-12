import { format } from 'date-fns'
import { useEffect, useState } from 'react'
import { Outlet, useNavigate, useParams } from 'react-router'

import { isPastDate } from '@/entities/calendar/lib'
import { HeaderTodayButton, OwnerFloating } from '@/entities/calendar/ui'
import { useShareScheduleByUserId } from '@/entities/schedule/model'
import { useUserStore } from '@/entities/user'
import { AppointmentModal } from '@/features/appointment/ui'
import { RenderScheduleBadges } from '@/features/calendar/ui'
import { IconInvite } from '@/shared/assets'
import { toast } from '@/shared/ui'
import { CalendarLayout } from '@/widgets/calendar'

export default function ShareCalendarPage() {
  const navigate = useNavigate()
  const { userId } = useParams<{ userId: string }>()
  const { scheduleMap } = useShareScheduleByUserId()
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
      <Outlet />
      <OwnerFloating />
      <CalendarLayout
        onDateClick={onDateClick}
        headerLeft={<div className="size-4" />}
        headerRight={<HeaderTodayButton>오늘</HeaderTodayButton>}
        onCreateSchedule={goToCreateAppointment}
        renderDay={(date) => <RenderScheduleBadges isShareCalendar date={date} scheduleMap={scheduleMap} />}
        buttonIcon={<IconInvite />}
        isPast={true}
        disablePrev={true}
      />
    </>
  )
}
