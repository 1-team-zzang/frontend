import { cn } from '@/shared/utils'

import { useModalContext } from './modal-context'

import type { HTMLAttributes, KeyboardEventHandler } from 'react'

export default function ModalOverlay({ className, ...restProps }: HTMLAttributes<HTMLDivElement>) {
  const { isOpen, onOpenChange } = useModalContext()

  if (!isOpen) {
    return null
  }

  const handleKeyDown: KeyboardEventHandler<HTMLDivElement> = (event) => {
    if (event.key === 'Escape') {
      onOpenChange(false)
    }
  }

  return (
    <div
      className={cn('', className)}
      onClick={() => onOpenChange(false)}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      {...restProps}
    />
  )
}
