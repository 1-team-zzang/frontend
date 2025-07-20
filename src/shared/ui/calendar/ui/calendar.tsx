import { useRef, useState, type ReactNode } from 'react'

import { useControllableState } from '@/shared/hooks'

import { CalendarProvider } from '../hooks/use-calendar-provider'
import getAllMonthDates from '../lib/get-all-month-dates'
import getCurrentMonthDates from '../lib/get-current-month-dates'
import getDateVariantStates from '../lib/get-date-variant-states'

/**
 * @description
 * 캘린더의 핵심 로직과 상태를 관리하는 컴포넌트입니다.
 * 외부에서 선택된 날짜를 제어하거나, 날짜 선택 이벤트를 외부에 알릴 수 있습니다.
 *
 * @param children 캘린더 내부에 렌더링될 자식 요소
 * @param selectedDate 외부에서 주입될 선택된 날짜 , 기본값 null
 * @param onSelectDate 날짜 선택 시 외부에서 호출될 콜백 함수
 */

interface CalendarProps {
  children: ReactNode
  selectedDate?: Date | null
  onSelectDate?: (value: Date | null) => void
}

export default function Calendar({ children, selectedDate: propSelectedDate, onSelectDate }: CalendarProps) {
  const monthRefs = useRef<(HTMLDivElement | null)[]>([])
  const [currentMonth, setCurrentMonth] = useState(new Date()) //현재보여줄 월(기본값 오늘기준)

  const currentYear = currentMonth.getFullYear() //현재월의 연도

  const currentMonthAllDates = getCurrentMonthDates(currentMonth) //해당월의 모든 날짜 배열(스와이프 라이브러리 사용시 필요할수도 있을것같습니다)

  /**
   * @description
   * `useControllableState` 훅은 컴포넌트의 상태를 외부(prop)에서 제어할지,
   * 아니면 컴포넌트 내부에서 자체적으로 관리할지 결정할 수 있게 해줍니다.
   *
   * - `prop`: 외부에서 주입되는 상태 값입니다. 이 값이 `undefined`가 아니면 컴포넌트는 '제어되는' 상태가 됩니다.
   * 즉, 부모 컴포넌트가 `selectedDate` prop을 넘겨주면, 캘린더의 선택된 날짜는 부모에 의해 결정됩니다.
   * - `defaultProp`: `prop`이 `undefined`일 때 (컴포넌트가 '제어되지 않는' 상태일 때) 사용될 초기값입니다.
   * 부모가 `selectedDate` prop을 넘겨주지 않으면, 캘린더는 내부적으로 `null`을 초기 선택 날짜로 가집니다.
   * - `onChange`: 상태 값이 변경될 때 호출되는 콜백 함수입니다. '제어되는' 상태일 때,
   * 내부에서 상태가 변경되면 이 `onChange` 함수를 통해 변경된 값을 부모에게 알립니다.
   * 부모는 이 값을 받아 자신의 상태를 업데이트함으로써 캘린더를 제어할 수 있습니다.
   */
  const [selectedDate, setSelectedDate] = useControllableState<Date | null>({
    prop: propSelectedDate,
    defaultProp: null,
    onChange: onSelectDate, //날짜가 바뀌면 실행되는 함수
  })

  const allDatesByMonth = getAllMonthDates(currentYear) // 1월부터 12월까지 모든 날짜

  const providerValue = {
    currentMonth,
    setCurrentMonth,
    currentMonthAllDates,
    selectedDate,
    setSelectedDate,
    allDatesByMonth,
    monthRefs,
    //날짜 셀의 조건부 스타일(ex, 일요일인가? 오늘인가?)
    getDateVariantStates: (date: Date) => getDateVariantStates({ date, month: currentMonth }),
  }

  return (
    <CalendarProvider value={providerValue}>
      <div className="flex flex-col w-96">{children}</div>
    </CalendarProvider>
  )
}
