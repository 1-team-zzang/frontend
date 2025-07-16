import { cva } from 'class-variance-authority'

import { cn } from '@/shared/utils'

import { useSwitchContext } from './switch-context'

import type { InputHTMLAttributes } from 'react'

const triggerVariants = cva('w-5 h-5 rounded-full bg-gray-0 block transition-transform duration-200', {
  variants: {
    isChecked: {
      true: 'translate-x-full',
      false: 'translate-x-0',
    },
  },
  defaultVariants: {
    isChecked: false,
  },
})

interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, 'className'> {
  switchBallClassName?: string
  labelClassName?: string
}

export default function SwitchTrigger({ id, switchBallClassName, labelClassName, ...restProps }: Props) {
  const { isChecked, setIsChecked } = useSwitchContext()

  return (
    <label
      className={cn('rounded-full bg-gray-100 p-1 w-12 h-8 flex items-center cursor-pointer', labelClassName)}
      htmlFor={id}
    >
      <input
        type="checkbox"
        className="sr-only"
        id={id}
        role="switch"
        aria-checked={isChecked}
        aria-label="Switch"
        onChange={() => setIsChecked(!isChecked)}
        checked={isChecked}
        {...restProps}
      />
      <span className={cn(triggerVariants({ isChecked }), switchBallClassName)} />
    </label>
  )
}
