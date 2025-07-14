import { cn } from '@/shared/utils'

import type { HTMLAttributes } from 'react'

export default function ModalContent({ children, className, ...restProps }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl w-[calc(100%-32px)] py-8 px-4 z-50',
        className,
      )}
      {...restProps}
    >
      {children}
    </div>
  )
}
