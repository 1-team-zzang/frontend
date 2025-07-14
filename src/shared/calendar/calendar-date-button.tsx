import { cva, type VariantProps } from 'class-variance-authority'

import type { ButtonHTMLAttributes, ReactNode } from 'react'

/**
 * @description 날짜 셀 컴포넌트에서 사용되는 버튼입니다.
 * - 기본 HTML button 속성과 CVA에서 사용하는 variant props를 함께 확장합니다.

 * @description 날짜 버튼의 상태별 클래스 변형을 정의합니다.
 * - isSelectedDate: 선택된 날짜인지 여부
 * - isSunday: 일요일인지 여부
 * - isCurrentMonth: 이번 달에 해당하는 날짜인지 여부
 */

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  children: ReactNode
}

const buttonVariants = cva('rounded-full hover:bg-primary-40', {
  variants: {
    isSelectedDate: { true: 'bg-primary-40' },
    isCurrentMonth: {
      true: 'text-gray-90',
      false: 'text-gray-50',
    },
    isSunday: { true: 'text-primary-99' },
    isToday: { true: 'border border-primary-50' },
  },

  defaultVariants: {
    isToday: false,
    isSunday: false,
    isSelectedDate: false,
    isCurrentMonth: true,
  },
})

export default function DateButton({
  isCurrentMonth,
  isSelectedDate,
  isToday,
  isSunday,
  children,
  ...restProps
}: Props) {
  return (
    <button className={buttonVariants({ isCurrentMonth, isSelectedDate, isToday, isSunday })} {...restProps}>
      {children}
    </button>
  )
}
