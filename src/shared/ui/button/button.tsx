import { clsx } from 'clsx'

import type { ButtonHTMLAttributes } from 'react'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary'
}

export default function Button({ children, variant = 'primary', className, ...props
}: Props) {
  const baseStyle = ''
  const variantStyle = {
    primary: ''
  }

  return (
    <button className={
      clsx(
        baseStyle, variantStyle[variant], className)}{...props}>{children}</button>
  )
}
