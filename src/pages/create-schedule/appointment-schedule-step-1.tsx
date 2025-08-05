import {
  ScheduleEditAllDay,
  ScheduleEditColor,
  ScheduleEditContent,
  ScheduleEditDate,
  ScheduleEditHeader,
  ScheduleEditTitle,
} from '@/features/schedule-edit/ui'

interface Props {
  handleStepBack?: () => void
}

export default function AppointmentScheduleStep1({ handleStepBack }: Props) {
  return (
    <>
      <ScheduleEditHeader title="약속 신청 (1/2)" button="다음" onBack={handleStepBack} buttonType="next" />
      <div className="flex flex-col px-4">
        <ScheduleEditTitle />
        <ScheduleEditColor />
        <ScheduleEditDate />
        <ScheduleEditAllDay />
        <ScheduleEditContent />
      </div>
    </>
  )
}
