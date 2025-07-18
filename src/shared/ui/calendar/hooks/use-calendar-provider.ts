import { createContextScope } from '@/shared/utils'

import type { Dispatch, RefObject, SetStateAction } from 'react'

/**
 * @description 캘린더에서 사용되는 전역 상태, 함수를 위한 Context입니다.
 * CalendarProvider를 통해 하위 컴포넌트에 전달됩니다.
 */

interface CalendarContextValue {
  currentMonth: Date //현재달의 기준
  setCurrentMonth: Dispatch<SetStateAction<Date>> //현재달 변경함수
  selectedDate: Date | null //외부에서 클릭된 날짜
  setSelectedDate: Dispatch<SetStateAction<Date | null>>
  allDatesByMonth: Date[][] // 1월~12월의 모든 날짜
  currentMonthAllDates: Date[] //이번 달의 모든 날짜
  monthRefs: RefObject<(HTMLDivElement | null)[]> //스크롤감지ref
  getDateVariantStates: (date: Date) => {
    //날짜 상태 variants
    isThisMonthDate: boolean
    isSunday: boolean
    isSaturday: boolean
    isTodayDate: boolean
  }
}

const CalendarContext = createContextScope()
const [CalendarProvider, useCalendarContext] = CalendarContext<CalendarContextValue>()

export { CalendarProvider, useCalendarContext }
