import { clsx } from 'clsx'

import type { ButtonHTMLAttributes } from 'react'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary'
}

export default function Button({ children, variant = 'primary', className, ...props
}: Props) {
  const baseStyle = 'w-24 h-10'
  const variantStyle = {
    primary: 'bg-blue-500 text-white'
  }

  return (
    <button className={
      clsx(
        baseStyle, variantStyle[variant], className)}{...props}>{children}</button>
  )
}
