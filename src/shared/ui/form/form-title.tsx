import { cn } from '../../utils'

import type { ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
}

export default function FormTitle({ children, className }: Props) {
  return <h2 className={cn('text-gray-80 text-xl font-semibold text-center', className)}>{children}</h2>
}
