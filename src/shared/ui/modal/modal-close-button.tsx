import { cn } from '@/shared/utils'

import { useModalContext } from './modal-context'

import type { ButtonHTMLAttributes } from 'react'

export default function ModalCloseButton({
  className,
  ...restProps
}: Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'>) {
  const { onOpenChange } = useModalContext()

  return (
    <button className={cn('', className)} onClick={() => onOpenChange(false)} {...restProps}>
      Close
    </button>
  )
}
