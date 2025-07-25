import { cn } from '@/shared/utils/cn'

import type { HTMLAttributes } from 'react'

export default function AppointmentCard({ children, className }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('w-full rounded-[0.625rem] border border-gray-20 overflow-hidden p-6 relative', className)}>
      {children}
    </div>
  )
}
