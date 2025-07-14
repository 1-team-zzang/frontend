import { cn } from '../../utils'

import type { HTMLAttributes } from 'react'

export default function FormTitle({ children, className }: HTMLAttributes<HTMLHeadingElement>) {
  return <h2 className={cn('text-gray-80 text-xl font-semibold text-center', className)}>{children}</h2>
}
