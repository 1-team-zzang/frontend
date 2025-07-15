import { cn } from '@/shared/utils/cn'

import { useTooltipContext } from './tooltip-context'

import type { HTMLAttributes } from 'react'

export default function TooltipMessage({ children, className }: HTMLAttributes<HTMLDivElement>) {
  const { isShow } = useTooltipContext()

  if (!isShow) {
    return null
  }

  return (
    <div className="absolute -right-5 top-10">
      <div
        className={cn(
          'relative bg-gray-95 rounded-lg p-2.5 w-fit tooltip whitespace-nowrap',
          'after:block after:absolute  after:w-0 after:z-10  after:border-solid after:top-[-13px] after:right-[15px]',
          className,
        )}
      >
        <span className="text-gray-5 font-normal text-sm">{children}</span>
      </div>
    </div>
  )
}
