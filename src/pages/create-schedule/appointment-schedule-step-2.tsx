import { ScheduleEditHeader, ScheduleEditMessage } from '@/features/schedule-edit/ui'

interface Props {
  handleStepBack?: () => void
}

export default function AppointmentScheduleStep2({ handleStepBack }: Props) {
  return (
    <>
      <ScheduleEditHeader title="약속 신청 (2/2)" button="보내기" onBack={handleStepBack} buttonType="submit" />
      <div className="px-4">
        <ScheduleEditMessage />
      </div>
    </>
  )
}
