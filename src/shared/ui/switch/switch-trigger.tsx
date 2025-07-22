import { cva } from 'class-variance-authority'

import { cn } from '@/shared/utils'

import { useSwitchContext } from './switch-context'

import type { InputHTMLAttributes } from 'react'

const triggerVariants = cva('w-7 h-7 rounded-full bg-gray-0 block transition-transform duration-200', {
  variants: {
    isChecked: {
      true: 'translate-x-8',
      false: 'translate-x-0',
    },
  },
  defaultVariants: {
    isChecked: false,
  },
})

const labelVariants = cva('rounded-full p-0.5 w-16 h-8 flex items-center cursor-pointer', {
  variants: {
    isChecked: {
      true: 'bg-primary-50',
      false: 'bg-gray-10',
    },
  },
})

interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, 'className'> {
  switchBallClassName?: string
  labelClassName?: string
}

export default function SwitchTrigger({ id, switchBallClassName, labelClassName, ...restProps }: Props) {
  const { isChecked, setIsChecked } = useSwitchContext()

  return (
    <label className={cn(labelVariants({ isChecked }), labelClassName)} htmlFor={id}>
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
