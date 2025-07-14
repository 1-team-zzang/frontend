import { useState, type HTMLAttributes } from 'react'

import { cn } from '@/shared/utils'

import { TooltipProvider } from './tooltip-context'

export default function Tooltip({ children, className }: HTMLAttributes<HTMLDivElement>) {
  const [isShow, setIsShow] = useState<boolean>(false)

  return (
    <TooltipProvider value={{ isShow, setIsShow }}>
      <div className={cn('relative w-fit', className)}>{children}</div>
    </TooltipProvider>
  )
}
