import { format } from 'date-fns'
import { useState } from 'react'
import { Outlet, useNavigate } from 'react-router'

import { HeaderButton } from '@/entities/calendar/ui'
import { useMySchedulesByMonth } from '@/entities/schedule/hooks'
import { useMyMonthsStore } from '@/entities/schedule/models/use-month-store'
import { useUserStore } from '@/entities/user'
import { HeaderTodayButton, RenderScheduleBadges } from '@/features/calendar/ui'
import { ShareCalendarBottomSheet, SwitchModal } from '@/features/my-calendar/ui'
import { IconCalendarAdd } from '@/shared/assets'
import { useIntroGuide } from '@/shared/hooks'
import { CalendarLayout } from '@/widgets/calendar'

import type { AuthModalType } from '@/features/auth'

export default function Home() {
  const navigate = useNavigate()

  const user = useUserStore((s) => s.user)

  const { months, setMonths } = useMyMonthsStore()
  const { scheduleMap } = useMySchedulesByMonth(user ? months : [])

  const [isOpen, setIsOpen] = useState(!user)
  const [switchModal, setSwitchModal] = useState<AuthModalType>('LoginSelect')

  const onDateClick = (date: Date) => {
    if (!user) {
      setSwitchModal('LoginSelect')
      setIsOpen(true)
      return
    }
    const dateStr = format(date, 'yyyy-MM-dd')
    navigate(`/my/detailed-schedule/date/${dateStr}`)
  }

  const goToCreateSchedule = () => {
    if (!user) {
      setSwitchModal('LoginSelect')
      setIsOpen(true)
      return
    }
    navigate('/my/schedule/create')
  }

  const [showShareSheet, setShowShareSheet] = useState(false)
  const onShareClick = () => setShowShareSheet(true)

  useIntroGuide()

  return (
    <>
      <Outlet />
      {!user ? (
        <CalendarLayout onDateClick={onDateClick}>
          <SwitchModal
            switchModal={switchModal}
            setSwitchModal={setSwitchModal}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
        </CalendarLayout>
      ) : (
        <>
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
          {showShareSheet && <ShareCalendarBottomSheet isOpen={showShareSheet} setIsOpen={setShowShareSheet} />}
        </>
      )}
    </>
  )
}
