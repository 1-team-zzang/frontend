import { useNavigate } from 'react-router'

import { IconAppointmentArrowLeft } from '@/shared/assets/icons'

import Text from '../text/text'

export default function ScheduleEditHeader({ children }: { children: string }) {
  const navigate = useNavigate()
  return (
    <div className="flex justify-between items-center px-[1.25rem] py-[0.625rem]">
      <button
        onClick={() => {
          navigate(-1)
        }}
        className="cursor-pointer"
      >
        <IconAppointmentArrowLeft />
      </button>
      <Text typography={'h2-heading'}>{children}</Text>
      <Text as="button" type="submit" typography={'b2-normal'}>
        저장
      </Text>
    </div>
  )
}
