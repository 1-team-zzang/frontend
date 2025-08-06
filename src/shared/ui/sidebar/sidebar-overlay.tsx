import { cn } from '@/shared/utils'

import { useGNBContext } from '../gnb/gnb-conext'

import type { HTMLAttributes } from 'react'

export default function SidebarOverlay({ className, ...restProps }: HTMLAttributes<HTMLDivElement>) {
  const { isOpen, handleCloseSidebar } = useGNBContext()

  if (!isOpen) {
    return null
  }

  return (
    <div
      className={cn(
        'fixed w-full h-full left-0 top-0 bg-black/40 z-overlay sm:w-[40rem] sm:left-1/2 sm:-translate-x-1/2',
        className,
      )}
      onClick={handleCloseSidebar}
      onKeyDown={handleCloseSidebar}
      role="button"
      aria-label="Overlay"
      tabIndex={0}
      {...restProps}
    />
  )
}
