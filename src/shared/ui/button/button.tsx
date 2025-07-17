import { cn } from '../../utils'

import { buttonVariants } from './button'

import type { ButtonHTMLAttributes, ReactNode } from 'react'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  intent?: 'solid' | 'outlined'
  active?: boolean
  disabled?: boolean
  children: ReactNode
}

export default function Button({ intent, active, disabled, children, className, ...restProps
}: Props) {
  return (
    <button className={cn(buttonVariants({ intent, active, disabled }), className,
    )} disabled={disabled === true} {...restProps}>{children}</button>
  )
}
