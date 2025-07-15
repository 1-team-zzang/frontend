import { cva, type VariantProps } from 'class-variance-authority'

import type { ReactNode } from 'react'

/**
 * @description 날짜 셀 컴포넌트에서 사용되는 버튼입니다.
 * - 기본 HTML button 속성과 CVA에서 사용하는 variant props를 함께 확장합니다.

 * @description 날짜 버튼의 상태별 클래스 변형을 정의합니다.
 * - isSelectedDate: 선택된 날짜인지 여부
 * - isSaturday: 토요일인디
 * - isSunday: 일요일인지 여부
 * - isTodayDate: 오늘인지
 * - isCurrentMonth: 이번 달에 해당하는 날짜인지 여부
 */

interface Props extends VariantProps<typeof contentVariants> {
  children: ReactNode
}

const contentVariants = cva('w-6 h-6 mt-1 rounded-full ', {
  variants: {
    isSelectedDate: { true: 'bg-primary-40' },
    isCurrentMonth: {
      true: 'text-gray-90',
      false: 'text-gray-50',
    },
    isSunday: { true: 'text-primary-99' },
    isSaturday: { true: 'text-blue' },
    isTodayDate: { true: 'bg-primary-50' },
  },

  defaultVariants: {
    isTodayDate: false,
    isSunday: false,
    isSelectedDate: false,
    isCurrentMonth: true,
  },
})

export default function CalendarCellContent({
  isCurrentMonth,
  isSelectedDate,
  isSaturday,
  isSunday,
  isTodayDate,
  children,
}: Props) {
  return (
    <span className={contentVariants({ isCurrentMonth, isSelectedDate, isTodayDate, isSaturday, isSunday })}>
      {children}
    </span>
  )
}
