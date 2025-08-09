import { format } from 'date-fns'
import { useState } from 'react'
import { Outlet, useNavigate } from 'react-router'

import { useMySchedulesByMonth } from '@/entities/schedule/hooks'
import { useMyMonthsStore } from '@/entities/schedule/models/use-month-store'
import { AuthGate } from '@/features/auth/ui'
import { HeaderButton, HeaderTodayButton, RenderScheduleBadges } from '@/features/calendar/ui'
import { ShareCalendarBottomSheet } from '@/features/my-calendar/ui'
import { IconCalendarAdd } from '@/shared/assets'
import { useIntroGuide } from '@/shared/hooks'
import { CalendarLayout } from '@/widgets/calendar'

export default function Home() {
  const navigate = useNavigate()

  const { months, setMonths } = useMyMonthsStore()
  const onDateClick = (date: Date) => {
    const dateStr = format(date, 'yyyy-MM-dd')
    navigate(`/my/detailed-schedule/date/${dateStr}`)
  }

  const goToCreateSchedule = () => {
    navigate('/my/schedule/create')
  }

  const { scheduleMap } = useMySchedulesByMonth(months)

  const [showModal, setShowModal] = useState(false)
  const onShareClick = () => setShowModal(true)

  useIntroGuide()

  return (
    <>
      <Outlet />
      <AuthGate>
        <CalendarLayout
          onDateClick={onDateClick}
          headerLeft={<HeaderTodayButton>오늘</HeaderTodayButton>}
          headerRight={
            <HeaderButton id="share-button" onClick={onShareClick}>
              공유
            </HeaderButton>
          }
          months={months}
          setMonths={setMonths}
          onCreateSchedule={goToCreateSchedule}
          renderDay={(date) => <RenderScheduleBadges isMyCalendar date={date} scheduleMap={scheduleMap} />}
          buttonIcon={<IconCalendarAdd />}
        />
        {showModal && <ShareCalendarBottomSheet isOpen={showModal} setIsOpen={setShowModal} />}
      </AuthGate>
    </>
  )
}
