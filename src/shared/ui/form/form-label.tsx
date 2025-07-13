import { cn } from '../../utils'

import type { LabelHTMLAttributes } from 'react'

interface Props extends LabelHTMLAttributes<HTMLLabelElement> {
  name: string
}
export default function FormLabel({ name, children, className, ...rest }: Props) {
  return (
    <label htmlFor={name} className={cn('text-gray-90 text-sm font-semibold', className)} {...rest}>
      {children}
    </label>
  )
}
