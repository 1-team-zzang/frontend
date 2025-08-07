import { useNavigate } from 'react-router'

import { IconAppointmentArrowLeft } from '@/shared/assets'

export default function PageBackButton() {
  const navigate = useNavigate()
  return (
    <button onClick={() => navigate(-1)}>
      <IconAppointmentArrowLeft />
    </button>
  )
}
