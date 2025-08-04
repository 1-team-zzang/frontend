import { cva } from 'class-variance-authority'

import { cn } from '@/shared/utils'

import Text from '../../text/text'
import { getDayInfo } from '../utils/get-day-info'

import { useCalendarContext } from './calendar-context'

import type { ReactNode } from 'react'

/**
 * 캘린더에서 하나의 날짜 셀을 렌더링하는 컴포넌트
 * 요일색상, 오늘 날짜, 일정뱃지 표시 담당
 */
interface CalendarDate {
  year: number
  month: number
  day: number
}

interface Props {
  date: CalendarDate
  showMonthLabel?: boolean //월 1일마다 표시하는 라벨
  isPast?: boolean //오늘 이전의 날짜인지
  children?: ReactNode
}

const contentVariants = cva('w-6 h-6 mt-1 rounded-full flex items-center justify-center', {
  variants: {
    isSunday: { true: 'text-calendar-red' },
    isSaturday: { true: 'text-calendar-blue' },
    isToday: { true: 'bg-primary-30' },
    isPast: { true: 'opacity-40' },
  },
})
export default function CalendarCell({ date, showMonthLabel, isPast, children }: Props) {
  const { onDateClick } = useCalendarContext()
  const { year, month, day } = date
  const { isSunday, isSaturday, isToday, isPast: isActualPast } = getDayInfo(year, month, day)
  const fullDate = new Date(year, month, day)
  const monthLabel = String(month + 1).padStart(2, '0')
  const isPastDate = isPast === true && isActualPast === true
  return (
    <button className="relative w-full flex flex-col items-center gap-1" onClick={() => onDateClick?.(fullDate)}>
      <Text
        as="span"
        typography="caption"
        className={cn(contentVariants({ isSunday, isSaturday, isToday: isToday, isPast: isPastDate }))}
      >
        {day}
      </Text>

      {showMonthLabel && (
        <Text as="span" typography="title-heading" className="absolute top-6 text-primary-1">
          {monthLabel}
        </Text>
      )}
      <div className="w-full px-1 flex flex-col gap-1">{children}</div>
    </button>
  )
}
