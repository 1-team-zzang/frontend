import { cn } from '@/shared/utils'

import type { HTMLAttributes } from 'react'

export default function ModalContent({ children, className, ...restProps }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('', className)} {...restProps}>
      {children}
    </div>
  )
}
