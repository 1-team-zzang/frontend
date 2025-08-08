import { cn } from '@/shared/utils'

import type { HTMLAttributes } from 'react'

interface Props extends HTMLAttributes<HTMLDivElement> {
  isPage?: boolean
}

export default function FormFieldWrapper({ children, isPage, className }: Props) {
  return <div className={cn('flex flex-col', isPage ? 'gap-10 mb-12' : 'gap-4 mb-6', className)}>{children}</div>
}
