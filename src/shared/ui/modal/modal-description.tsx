import { cn } from '@/shared/utils'

import type { HTMLAttributes } from 'react'

export default function ModalDescription({ children, className, ...restProps }: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={cn('', className)} {...restProps}>
      {children}
    </p>
  )
}
