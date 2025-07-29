import { type ReactNode } from 'react'

import FloatButton from '@/shared/ui/float-button/float-button'

interface Props {
  children: ReactNode
  onClick?: () => void
}

export default function AddScheduleButton({ children, onClick }: Props) {
  return (
    <FloatButton shape="circle" size="large" className="bg-primary-60" onClick={onClick}>
      {children}
    </FloatButton>
  )
}
