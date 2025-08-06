import { format } from 'date-fns'
import { useState } from 'react'
import { useNavigate } from 'react-router'

import { IconCalendarAdd } from '@/shared/assets'
import {
  HeaderTodayButton,
  RenderScheduleBadges,
  Calendar,
  HeaderButton,
  HeaderContainer,
  HeaderMonthLabel,
  InfiniteCalendar,
  FloatButton,
  getInitialMonth,
} from '@/shared/ui'

import { useMonthSchedules } from '../hooks'

import ShareCalendarBottomSheet from './share-calendar-bottom-sheet'

import type { Month } from '@/shared/ui/calendar/type/calendar.types'

export default function MyCalendar() {
  const navigate = useNavigate()
  const [months, setMonths] = useState<Month[]>(getInitialMonth(false))
  const { scheduleMap } = useMonthSchedules(months)
  const [showModal, setShowModal] = useState(false)
  const onShareClick = () => setShowModal(true)

  const goToCreateSchedule = () => {
    navigate('/my/schedule/create')
  }
  const onDateClick = (date: Date) => {
    const dateStr = format(date, 'yyyy-MM-dd')
    navigate(`/my/detailed-schedule/date/${dateStr}`)
  }

  return (
    <>
      <Calendar onDateClick={onDateClick}>
        <HeaderContainer>
          <HeaderTodayButton>오늘</HeaderTodayButton>
          <HeaderMonthLabel />
          <HeaderButton id="share-button" onClick={onShareClick}>
            공유
          </HeaderButton>
        </HeaderContainer>
        <InfiniteCalendar months={months} setMonths={setMonths}>
          {(date) => <RenderScheduleBadges isMyCalendar date={date} scheduleMap={scheduleMap} />}
        </InfiniteCalendar>
        <FloatButton className="bg-primary-60" size="large" onClick={goToCreateSchedule}>
          <IconCalendarAdd className="size-8" />
        </FloatButton>
      </Calendar>
      {showModal && <ShareCalendarBottomSheet isOpen={showModal} setIsOpen={setShowModal} />}
    </>
  )
}
