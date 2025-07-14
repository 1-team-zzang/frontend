import createScopedContext from '../../utils/create-context-scope'

/**
 * @description 캘린더에서 사용되는 전역 상태, 함수를 위한 Context입니다.
 * CalendarProvider를 통해 하위 컴포넌트에 전달됩니다.
 */

interface CalendarContextValue {
  currentMonth: Date //현재 달의 기준(오늘 날짜)
  onNextMonth: () => void //다음 달로 이동 하는 함수
  onPrevMonth: () => void //이전 달로 이동 하는 함수
  onNextYear: () => void //내년으로 이동하는 함수
  onPrevYear: () => void //작년으로 이동하는 함수
  selectedDate: Date // 현재 선택된 날짜
  handleSelectedDate: (date: Date) => void //날짜 셀 클릭시 호출되는 함수
  currentMonthAllDates: Date[] //이번 달의 모든 날짜 배열
}

const CalendarContext = createScopedContext()
const [CalendarProvider, useCalendarContext] = CalendarContext<CalendarContextValue>()

export { CalendarProvider, useCalendarContext }
