import Text from '../../text/text'
import { useCalendarContext } from '../hooks/calendar-context'

/**
 *
 * 현재 캘린더 뷰에서 사용자가 보고 있는 월을 텍스트로 출력하는 컴포넌트입니다.
 *
 * - 연도는 `new Date().getFullYear()`로 현재 연도 기준
 * - 월은 `CalendarContext`의 `visibleMonth`를 통해 구함
 * - `visibleMonth`가 `null`일 경우(초기 상태) 빈 문자열 반환
 * - 예: "2025.8"
 */

export default function CalendarHeaderMonthLabel() {
  const { visibleMonth } = useCalendarContext()
  const currentYear = new Date().getFullYear()

  return (
    <Text as="span" typography="h2-heading">
      {visibleMonth !== null ? `${currentYear}.${(visibleMonth + 1).toString().padStart(2, '0')}` : ''}
    </Text>
  )
}
