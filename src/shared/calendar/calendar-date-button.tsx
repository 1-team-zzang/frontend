import { cva, type VariantProps } from 'class-variance-authority'

import type { ButtonHTMLAttributes } from 'react'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof ButtonVariants> {
  children: React.ReactNode
}

const ButtonVariants = cva('rounded-full hover:bg-primary-40', {
  variants: {
    isSelectedDate: { true: 'bg-primary-40' },
    isSunday: { true: 'text-primary-99' },
    isCurrentMonth: {
      true: 'text-gray-90',
      false: 'text-gray-50',
    },
  },
  compoundVariants: [
    {
      isSunday: true,
      isCurrentMonth: false,
      className: 'text-gray-50', // 이번 달이 아니면 일요일이라도 무조건 회색
    },
  ],
  defaultVariants: {
    isSunday: false,
    isSelectedDate: false,
    isCurrentMonth: true,
  },
})

/** 개별 날짜 UI */

export default function Button({ isCurrentMonth, isSelectedDate, isSunday, children, ...props }: Props) {
  return (
    <button className={ButtonVariants({ isCurrentMonth, isSelectedDate, isSunday })} {...props}>
      {children}
    </button>
  )
}
