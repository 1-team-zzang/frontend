import { format } from 'date-fns'
import { useState } from 'react'
import { useNavigate } from 'react-router'

import { IconCalendarAdd } from '@/shared/assets'
import {
  HeaderTodayButton,
  RenderScheduleBadges,
  AddScheduleButton,
  Calendar,
  HeaderButton,
  HeaderContainer,
  HeaderMonthLabel,
  InfiniteCalendar,
} from '@/shared/ui'
import { devLog } from '@/shared/utils'

import { useDateSchedules } from '../hooks/use-date-schedules'

import ShareCalendarBottomSheet from './share-calendar-bottom-sheet'

export default function MyCalendar() {
  const navigate = useNavigate()
  const { scheduleMap } = useDateSchedules()
  devLog('log', 'scheduleMap', scheduleMap)

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
        <InfiniteCalendar>
          {(date) => <RenderScheduleBadges isMyCalendar date={date} scheduleMap={scheduleMap} />}
        </InfiniteCalendar>
        <AddScheduleButton onClick={goToCreateSchedule}>
          <IconCalendarAdd />
        </AddScheduleButton>
      </Calendar>
      {showModal && <ShareCalendarBottomSheet isOpen={showModal} setIsOpen={setShowModal} />}
    </>
  )
}
