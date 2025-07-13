import { cn, Slot } from '@/shared/utils'

import { useModalContext } from './modal-context'

import type { ButtonHTMLAttributes } from 'react'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
}

// Todo: button에 ui 컴포넌트로 대체해야함. (아직 버튼 UI가 없어서 작업 X)
export default function ModalTrigger({ children, className, asChild, ...restProps }: Props) {
  const { onOpenChange } = useModalContext()

  const Element = asChild ? Slot : 'button'

  return (
    <Element className={cn('', className)} onClick={() => onOpenChange(true)} {...restProps}>
      {children}
    </Element>
  )
}
