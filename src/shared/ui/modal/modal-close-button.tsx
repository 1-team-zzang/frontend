import { IconClose } from '@/shared/assets/icons'
import { cn } from '@/shared/utils'

import { useModalContext } from './modal-context'

import type { ButtonHTMLAttributes } from 'react'

export default function ModalCloseButton({
  className,
  ...restProps
}: Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick' | 'children'>) {
  const { onOpenChange } = useModalContext()

  return (
    <button
      type="button"
      aria-label="Close modal"
      className={cn('absolute top-4 right-4', className)}
      onClick={() => onOpenChange(false)}
      {...restProps}
    >
      <IconClose className="w-8 h-8" />
    </button>
  )
}
