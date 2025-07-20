import Text from '@/shared/ui/text/text'
import { cn } from '@/shared/utils'

import type { HTMLAttributes } from 'react'

export default function FormErrorMessage({ children, className, ...restProps }: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <Text typography="label" className={cn('font-semibold text-system-warning mt-2', className)} {...restProps}>
      {children}
    </Text>
  )
}
