import { IconAppointmentArrowLeft } from '@/shared/assets/icons'
import { Text } from '@/shared/ui'

interface Props {
  title: string
  button?: string
  onBack?: () => void
  onNext?: () => void
  buttonType?: 'next' | 'submit'
}

export default function ScheduleEditHeader({ title, button = '저장', onBack, onNext, buttonType = 'submit' }: Props) {
  const handleButtonClick = () => {
    if (buttonType === 'next' && onNext) {
      onNext()
    }
  }

  return (
    <div className="flex justify-between items-center px-[1.25rem] py-[0.625rem]">
      <button aria-label="뒤로 가기" onClick={onBack} className="w-10 cursor-pointer">
        <IconAppointmentArrowLeft />
      </button>
      <Text typography={'h2-heading'}>{title}</Text>
      <Text
        as="button"
        type={buttonType === 'submit' ? 'submit' : 'button'}
        typography={'b2-normal'}
        className={'w-10 cursor-pointer'}
        onClick={buttonType === 'next' ? handleButtonClick : undefined}
      >
        {button}
      </Text>
    </div>
  )
}
