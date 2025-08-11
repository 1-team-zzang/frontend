import { useUserStore } from '@/entities/user'
import {
  ScheduleEditHeader,
  ScheduleEditMessage,
  ScheduleEditRequesterStranger,
  ScheduleEditRequesterUser,
} from '@/features/schedule-edit/ui'

interface Props {
  handleStepBack?: () => void
  isFriendScenario?: string | undefined
  isShareScenario?: string | undefined
}

export default function AppointmentScheduleStep2({ handleStepBack, isFriendScenario }: Props) {
  const user = useUserStore((state) => state.user)

  // 시나리오에 따라 다른 컴포넌트 사용
  const RequesterComponent = isFriendScenario ? (
    <ScheduleEditRequesterUser name={user?.name || ''} className="" />
  ) : (
    <ScheduleEditRequesterStranger />
  )

  return (
    <>
      <ScheduleEditHeader title="약속 신청 (2/2)" button="보내기" onBack={handleStepBack} buttonType="submit" />
      <div className="px-4">
        {RequesterComponent}
        <ScheduleEditMessage />
      </div>
    </>
  )
}
