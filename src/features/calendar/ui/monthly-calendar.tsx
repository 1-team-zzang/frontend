/**
 * 2025년의 월에 해당하는 달력 셀을 월 단위로 렌더링하는 컴포넌트입니다.
 *
 * - 달의 시작 요일에 따라 앞쪽 공백 셀
 * - 날짜 수(`1~31`)만큼 `CalendarCell`을 렌더링합니다.
 * - `1일` 셀에는 월 라벨(`showMonthLabel`)을 표시하여 구분 가능하게 합니다.
 *
 * @param {number} year - 해당 달력 뷰의 연도 (ex. 2025)
 * @param {number} month - 해당 달력 뷰의 월 (0 기반: 0 = 1월)
 *
 *
 * @example
 * <MonthlyCalendar year={2025} month={0} /> // 2025년 1월 달력
 */

import { CalendarCell } from '@/entities/calendar/ui'

import { range, getMonthDates } from '../utils'

import type { Month } from '../type'
import type { ReactNode } from 'react'

interface Props extends Month {
  children?: (date: Date) => ReactNode
  isPast?: boolean
}

export default function MonthlyCalendar({ year, month, children, isPast }: Props) {
  const date = new Date(year, month, 1)
  const { firstDayOfMonth, LastDayOfMonth, remainingDaysInWeek } = getMonthDates(date)

  return (
    <div className="grid grid-cols-7 ">
      {range(firstDayOfMonth).map((day: number) => (
        <div className="h-20 border-t border-gray-10" key={`empty-${day}`} />
      ))}

      {range(LastDayOfMonth).map((day: number) => (
        <div key={`${year}-${month}-${day}`} className="h-20 border-t border-gray-10 ">
          <CalendarCell date={{ year, month, day }} showMonthLabel={day === 1} isPast={isPast}>
            {children?.(new Date(year, month, day))}
          </CalendarCell>
        </div>
      ))}
      {range(remainingDaysInWeek).map((day: number) => (
        <div className="h-20 border-t border-gray-10" key={`empty-${day}`} />
      ))}
    </div>
  )
}
