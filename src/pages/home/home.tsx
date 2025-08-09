import { format } from 'date-fns'
import { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router'

import { useMySchedulesByMonth } from '@/entities/schedule/hooks'
import { useMonthsStore } from '@/entities/schedule/models/use-month-store'
import { useUserStore } from '@/entities/user'
import { EmailSigninModal, LoginSelectModal } from '@/features/auth/signin/ui'
import { HeaderButton, HeaderTodayButton, RenderScheduleBadges } from '@/features/calendar/ui'
import { getInitialMonth } from '@/features/calendar/utils'
import { ShareCalendarBottomSheet } from '@/features/my-calendar/ui'
import { IconCalendarAdd } from '@/shared/assets'
import { useIntroGuide } from '@/shared/hooks'
import { devLog } from '@/shared/utils'
import { CalendarLayout } from '@/widgets/calendar'

import type { AuthModalType } from '@/features/auth/types'

export default function Home() {
  const user = useUserStore((state) => state.user)
  const navigate = useNavigate()

  const [isOpen, setIsOpen] = useState(!user)
  const [switchModal, setSwitchModal] = useState<AuthModalType>('LoginSelect')

  const onDateClick = (date: Date) => {
    if (!user) {
      setSwitchModal('EmailLogin')
      setIsOpen(true)
      return
    }
    const dateStr = format(date, 'yyyy-MM-dd')
    navigate(`/my/detailed-schedule/date/${dateStr}`)
  }

  const goToCreateSchedule = () => {
    navigate('/my/schedule/create')
  }

  const { months, setMonths } = useMonthsStore()
  devLog('log', 'months', months)
  useEffect(() => {
    if (!months.length) {
      setMonths(getInitialMonth(false))
    }
  }, [months.length, setMonths])

  const { scheduleMap } = useMySchedulesByMonth(months)

  const [showModal, setShowModal] = useState(false)
  const onShareClick = () => setShowModal(true)

  useIntroGuide()

  return (
    <>
      <Outlet />
      {!user ? (
        <CalendarLayout onDateClick={onDateClick}>
          {switchModal === 'LoginSelect' && (
            <LoginSelectModal
              isOpen={isOpen}
              setClose={setIsOpen}
              setSwitchModal={(mode) => {
                setSwitchModal(mode)
              }}
            />
          )}
          {switchModal === 'EmailLogin' && (
            <EmailSigninModal
              isOpen={isOpen}
              setClose={setIsOpen}
              setSwitchModal={(mode) => {
                setSwitchModal(mode)
              }}
            />
          )}
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
          {showModal && <ShareCalendarBottomSheet isOpen={showModal} setIsOpen={setShowModal} />}
        </>
      )}
    </>
  )
}
