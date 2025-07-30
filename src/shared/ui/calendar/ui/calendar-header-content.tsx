import { useState } from 'react'
import { useNavigate } from 'react-router'

import { IconAppointmentArrowLeft } from '@/shared/assets/icons'

import ShareCalendarBottomSheet from '../../../../features/my-schedule/my-calendar/share-calendar-bottom-sheet'
import { useCalendarContext } from '../hooks/calendar-context'
import { scrollToCurrentMonth } from '../util/scroll-current-month'

import CalendarHeaderButton from './calendar-header-button'
import CalendarHeader from './calendar-header-container'
import CalendarHeaderMonthLabel from './calendar-header-month-label'

/**
 *
 * 캘린더 상단 헤더의 UI
 * - 좌우에 버튼(`오늘`, `공유`)을 배치하고,
 * - 중앙에는 현재 보이는 달(`CalendarHeaderMonthLabel`)을 표시합니다.
 * - 공유하기 함수는 추후 수정
 *
 * 내부적으로 `CalendarContext`에서 `containerRef`와 `monthRefs`를 받아와,
 * 버튼 클릭 시 현재 달로 스크롤하는 동작을 수행합니다.]
 */
interface Props {
  showShareButton?: boolean
  isFriendCalendar?: boolean
}
export default function CalendarHeaderContent({ showShareButton = false, isFriendCalendar = false }: Props) {
  const { containerRef, monthRefs } = useCalendarContext()
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()
  return (
    <div>
      {!isFriendCalendar ? (
        <>
          <CalendarHeader>
            <CalendarHeaderButton onClick={() => scrollToCurrentMonth(containerRef, monthRefs)}>
              오늘
            </CalendarHeaderButton>
            <CalendarHeaderMonthLabel />
            {showShareButton ? (
              <CalendarHeaderButton onClick={() => setIsOpen(true)}>공유</CalendarHeaderButton>
            ) : (
              <div className="w-[1.625rem]" />
            )}
          </CalendarHeader>
          {isOpen && <ShareCalendarBottomSheet isOpen={isOpen} setIsOpen={setIsOpen} />}
        </>
      ) : (
        <CalendarHeader>
          <IconAppointmentArrowLeft className="size-4 cursor-pointer" onClick={() => navigate(-1)} />
          <CalendarHeaderMonthLabel />
          <CalendarHeaderButton onClick={() => scrollToCurrentMonth(containerRef, monthRefs)}>
            오늘
          </CalendarHeaderButton>
        </CalendarHeader>
      )}
    </div>
  )
}
