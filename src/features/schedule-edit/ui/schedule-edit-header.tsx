import { useNavigate } from 'react-router'

import { IconAppointmentArrowLeft } from '@/shared/assets/icons'
import { Text } from '@/shared/ui'

interface Props {
  title: string
  button?: string
  isPage?: boolean
}

export default function ScheduleEditHeader({ title, button = '저장', isPage }: Props) {
  const navigate = useNavigate()
  return (
    <div className="flex justify-between items-center px-[1.25rem] py-[0.625rem]">
      <button
        aria-label="뒤로 가기"
        type="button"
        onClick={() => {
          navigate(-1)
        }}
        className="w-10 cursor-pointer"
      >
        <IconAppointmentArrowLeft />
      </button>
      <Text typography={'h2-heading'}>{title}</Text>
      <Text as="button" type={isPage ? 'button' : 'submit'} typography={'b2-normal'} className="w-10">
        {button}
      </Text>
    </div>
  )
}
