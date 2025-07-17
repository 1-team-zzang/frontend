import { cn } from '@/shared/utils/cn'

import { buttonVariants, type ButtonVariantProps } from './button.ts'

import type { ButtonHTMLAttributes } from 'react'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>, Omit<ButtonVariantProps, 'disabled'> {}

export default function Button({ intent, disabled, children, className, ...restProps
}: Props) {
  return (
    <button className={cn(buttonVariants({ intent, disabled }), className,
    )} disabled={disabled} {...restProps}>{children}</button>
  )
}
