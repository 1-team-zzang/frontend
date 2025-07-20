import { cn } from '@/shared/utils'

import type { HTMLAttributes } from 'react'

export default function FormFieldWrapper({ children, className }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('flex flex-col gap-4 mb-6', className)}>{children}</div>
}
