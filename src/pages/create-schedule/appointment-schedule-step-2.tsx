import { useFormContext } from 'react-hook-form'

import { useUserStore } from '@/entities/user'
import {
  ScheduleEditHeader,
  ScheduleEditMessage,
  ScheduleEditRequesterStranger,
  ScheduleEditRequesterUser,
} from '@/features/schedule-edit/ui'
import { devLog } from '@/shared/utils'

import type { AppointmentScheduleFormType } from '@/features/schedule-edit/model/schedule.schema'

interface Props {
  handleStepBack?: () => void
  isFriendScenario?: string | undefined
  isShareScenario?: string | undefined
}

export default function AppointmentScheduleStep2({ handleStepBack, isFriendScenario }: Props) {
  const { formState, watch, getValues } = useFormContext<AppointmentScheduleFormType>()
  const user = useUserStore((state) => state.user)

  // 폼 상태를 로그로 확인
  devLog('log', 'Step 2 폼 상태', formState)
  devLog('log', 'Step 2 현재 데이터', watch())
  devLog('log', 'Step 2 전체 데이터', getValues())

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
