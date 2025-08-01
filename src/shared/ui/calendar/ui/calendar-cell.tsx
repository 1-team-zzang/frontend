import { cva } from 'class-variance-authority'

import { cn } from '@/shared/utils'

import Text from '../../text/text'
import { getDayInfo } from '../utils/get-day-info'

import { useCalendarContext } from './calendar-context'

/**
 * 캘린더에서 하나의 날짜 셀을 렌더링하는 컴포넌트
 * 요일색상, 오늘 날짜, 일정뱃지 표시 담당
 */

interface Props {
  year: number //셀에 해당하는 년도
  month: number //셀에 해당하는 월(0 = 1월)
  date: number // 셀에 해당하는 일
  showMonthLabel?: boolean //월 1일마다 표시하는 라벨
  isPast?: boolean //오늘 이전의 날짜인지
  isSelected?: boolean //선택된 날짜
}

const contentVariants = cva('w-6 h-6 mt-1 rounded-full flex items-center justify-center', {
  variants: {
    isSunday: { true: 'text-calendar-red' },
    isSaturday: { true: 'text-calendar-blue' },
    isTodayDate: { true: 'bg-primary-30' },
    isPast: { true: 'opacity-40' },
    isSelected: { true: 'rounded-lg bg-primary-70 p-2.5' },
  },
  defaultVariants: {
    isPast: false,
  },
})
export default function CalendarCell({ year, month, date, showMonthLabel }: Props) {
  const { onDateClick } = useCalendarContext()
  const { isSunday, isSaturday, isToday, isPast } = getDayInfo(year, month, date)

  const fullDate = new Date(year, month, date)
  const monthLabel = String(month + 1).padStart(2, '0')

  return (
    <button onClick={() => onDateClick?.(fullDate)}>
      <div className="relative flex justify-center mb-1">
        <Text
          as="span"
          typography="caption"
          className={cn(contentVariants({ isSunday, isSaturday, isTodayDate: isToday, isPast }))}
        >
          {date}
        </Text>
        {showMonthLabel && (
          <Text as="span" typography="title-heading" className="absolute top-6 text-primary-1 z-base">
            {monthLabel}
          </Text>
        )}
      </div>
    </button>
  )
}
