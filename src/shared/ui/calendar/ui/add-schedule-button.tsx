import { type ReactNode } from 'react'
import { useNavigate } from 'react-router'

import FloatButton from '@/shared/ui/float-button/float-button'

export default function AddScheduleButton({ children }: { children: ReactNode }) {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/my/schedule/create')
  }
  return (
    <FloatButton shape="circle" size="large" className="bg-primary-60" onClick={handleClick}>
      {children}
    </FloatButton>
  )
}
