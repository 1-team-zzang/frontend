import { useNavigate } from 'react-router'

import { IconAppointmentArrowLeft } from '@/shared/assets'
import Text from '@/shared/ui/text/text'

import type { ReactNode } from 'react'

export default function AppointmentHeader({ children }: { children: ReactNode }) {
  const navigate = useNavigate()
  const handleBackClick = () => {
    navigate(-1)
  }

  return (
    <div className="relative border-b border-gray-10 py-2.5 flex justify-center items-center">
      <button
        type="button"
        aria-label="뒤로 가기"
        onClick={handleBackClick}
        className="absolute left-[1.25rem] w-10 cursor-pointer"
      >
        <IconAppointmentArrowLeft />
      </button>
      <Text typography="h2-heading">{children}</Text>
    </div>
  )
}
