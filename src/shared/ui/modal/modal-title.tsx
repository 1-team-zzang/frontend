import { cn } from '@/shared/utils'

import type { HTMLAttributes } from 'react'

export default function ModalTitle({ children, className, ...restProps }: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3 className={cn('', className)} {...restProps}>
      {children}
    </h3>
  )
}
