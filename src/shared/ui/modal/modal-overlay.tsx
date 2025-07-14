import { cn } from '@/shared/utils'

import { useModalContext } from './modal-context'

import type { HTMLAttributes } from 'react'

export default function ModalOverlay({ className, ...restProps }: HTMLAttributes<HTMLDivElement>) {
  const { isOpen, onOpenChange } = useModalContext()

  if (!isOpen) {
    return null
  }

  return (
    <div
      className={cn('fixed w-full h-full left-0 top-0 bg-black/40 z-50', className)}
      onClick={() => onOpenChange(false)}
      onKeyDown={() => onOpenChange(false)}
      role="button"
      aria-label="Overlay"
      tabIndex={0}
      {...restProps}
    />
  )
}
