import { cn } from '../../utils/cn.ts'

import { buttonVariants, type ButtonVariantProps } from './button.ts'

import type { ButtonHTMLAttributes } from 'react'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>, ButtonVariantProps {
  disabled?: boolean
}

export default function Button({ intent, disabled = false, children, className, ...restProps
}: Props) {
  return (
    <button className={cn(buttonVariants({ intent, disabled }), className,
    )} disabled={disabled} {...restProps}>{children}</button>
  )
}
