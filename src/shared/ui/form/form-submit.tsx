import { cn } from '../../utils'

import type { ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
}

export default function FormSubmit({ children, className }: Props) {
  // TODO: 임시 버튼 수정하기
  return (
    <button className={cn('', className)} type="submit">
      {children}
    </button>
  )
}
