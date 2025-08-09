import { format } from 'date-fns'
import { useState } from 'react'
import { useNavigate } from 'react-router'

import { useMySchedulesByMonth } from '@/entities/schedule/hooks'
import {
  Calendar,
  HeaderButton,
  HeaderLayout,
  HeaderTodayButton,
  InfiniteCalendar,
  RenderScheduleBadges,
} from '@/features/calendar/ui'
import { getInitialMonth } from '@/features/calendar/utils'
import { IconCalendarAdd } from '@/shared/assets'
import { FloatButton } from '@/shared/ui'

import ShareCalendarBottomSheet from './share-calendar-bottom-sheet'

import type { Month } from '@/features/calendar/type'

export default function MyCalendar() {
  const navigate = useNavigate()
  const [months, setMonths] = useState<Month[]>(getInitialMonth(false))
  const { scheduleMap } = useMySchedulesByMonth(months)
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
        <HeaderLayout
          left={<HeaderTodayButton>오늘</HeaderTodayButton>}
          right={
            <HeaderButton id="share-button" onClick={onShareClick}>
              공유
            </HeaderButton>
          }
        />

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
