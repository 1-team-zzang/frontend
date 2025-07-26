import { type ReactNode } from 'react'

import FloatButton from '@/shared/ui/float-button/float-button'

export default function AddScheduleButton({ children }: { children: ReactNode }) {
  return (
    <FloatButton shape="circle" size="large" className="bg-primary-60">
      {children}
    </FloatButton>
  )
}
