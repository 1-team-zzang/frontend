import { cva, type VariantProps } from 'class-variance-authority'

import type { ButtonHTMLAttributes } from 'react'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof ButtonVariants> {
  children: React.ReactNode
}

const ButtonVariants = cva('', {
  variants: {
    isSelectedDate: { true: 'bg-primary-01' },
    isSunday: { true: 'text-primary-99' },
  },
  defaultVariants: {
    isSelectedDate: false,
    isSunday: false,
  },
})

/** 개별 날짜 UI */

export default function Button({ isSelectedDate, isSunday, children, ...props }: Props) {
  return (
    <button className={ButtonVariants({ isSelectedDate, isSunday })} {...props}>
      {children}
    </button>
  )
}
