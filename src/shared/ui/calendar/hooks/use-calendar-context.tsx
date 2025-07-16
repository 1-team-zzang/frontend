import { createContextScope } from '@/shared/utils'

/**
 * @description 캘린더에서 사용되는 전역 상태, 함수를 위한 Context입니다.
 * CalendarProvider를 통해 하위 컴포넌트에 전달됩니다.
 */

interface CalendarContextValue {
  currentMonth: Date //현재달의 기준
  setCurrentMonth: React.Dispatch<React.SetStateAction<Date>> //현재달 변경함수
  selectedDate: Date | null //현재 클릭된 날짜
  handleSelectedDate: (date: Date) => void //날짜 셀 클릭시 호출되는 함수
  allDatesByMonth: Date[][] // 1월~12월의 모든 날짜
  currentMonthAllDates: Date[] //이번 달의 모든 날짜
  monthRefs: React.RefObject<(HTMLDivElement | null)[]> //스크롤감지ref
  getDateVariantStates: (date: Date) => {
    isSelectedDate: boolean
    isThisMonthDate: boolean
    isSunday: boolean
    isSaturday: boolean
    isTodayDate: boolean
  }
}

const CalendarContext = createContextScope()
const [CalendarProvider, useCalendarContext] = CalendarContext<CalendarContextValue>()

export { CalendarProvider, useCalendarContext }
