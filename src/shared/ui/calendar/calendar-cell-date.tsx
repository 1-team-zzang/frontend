import { cva, type VariantProps } from 'class-variance-authority'

import type { ReactNode } from 'react'
import Text from '../text/text'
import { cn } from '../../utils'

/**
 * @description 날짜 셀 컴포넌트에서 사용되는 버튼입니다.
 * - 기본 HTML button 속성과 CVA에서 사용하는 variant props를 함께 확장합니다.

 * @description 날짜 버튼의 상태별 클래스 변형을 정의합니다.
 * - isSelectedDate: 선택된 날짜인지 여부
 * - isSaturday: 토요일인지
 * - isSunday: 일요일인지 여부
 * - isTodayDate: 오늘인지
 * - isCurrentMonth: 이번 달에 해당하는 날짜인지 여부
 */

interface Props extends VariantProps<typeof contentVariants> {
  children: ReactNode
}

const contentVariants = cva('w-6 h-6 mt-1 rounded-full flex items-center justify-center', {
  variants: {
    isSelectedDate: { true: 'bg-gray-30' },
    isCurrentMonth: {
      true: 'text-gray-90',
      false: 'text-gray-50',
    },
    isSunday: { true: 'text-red' },
    isSaturday: { true: 'text-blue' },
    isTodayDate: { true: 'bg-primary-30' },
  },

  defaultVariants: {
    isTodayDate: false,
    isSunday: false,
    isSelectedDate: false,
    isCurrentMonth: true,
  },
})

export default function CalendarCellDate({
  isCurrentMonth,
  isSelectedDate,
  isSaturday,
  isSunday,
  isTodayDate,
  children,
}: Props) {
  return (
    <div className="flex flex-col">
      <Text
        as="span"
        typography="caption-10"
        className={cn(contentVariants({ isCurrentMonth, isSelectedDate, isTodayDate, isSaturday, isSunday }))}
      >
        {children}
      </Text>
    </div>
  )
}
