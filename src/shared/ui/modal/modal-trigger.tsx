import { cn } from '@/shared/utils'

import { useModalContext } from './modal-context'

import type { ButtonHTMLAttributes } from 'react'

// Todo: button에 ui 컴포넌트로 대체해야함. (아직 버튼 UI가 없어서 작업 X)
export default function ModalTrigger({ children, className, ...restProps }: ButtonHTMLAttributes<HTMLButtonElement>) {
  const { onOpenChange } = useModalContext()
  return (
    <button className={cn('', className)} onClick={() => onOpenChange(true)} {...restProps}>
      {children}
    </button>
  )
}
