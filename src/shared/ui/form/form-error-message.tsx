import { cn } from '../../utils'

import type { HTMLAttributes } from 'react'

export default function FormErrorMessage({ children, className, ...restProps }: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={cn('', className)} {...restProps}>
      {children}
    </p>
  )
}
