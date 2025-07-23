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

export default function CalendarHeaderContent() {
  const { containerRef, monthRefs } = useCalendarContext()

  return (
    <CalendarHeader>
      <CalendarHeaderButton onClick={() => scrollToCurrentMonth(containerRef, monthRefs)}>오늘</CalendarHeaderButton>
      <CalendarHeaderMonthLabel />
      <CalendarHeaderButton onClick={() => alert('공유하기')}>공유</CalendarHeaderButton>
    </CalendarHeader>
  )
}
