import { useFormContext } from 'react-hook-form'

import {
  ScheduleEditAllDay,
  ScheduleEditColor,
  ScheduleEditContent,
  ScheduleEditDate,
  ScheduleEditHeader,
  ScheduleEditTitle,
} from '@/features/schedule-edit/ui'
import { devLog } from '@/shared/utils'

import type { AppointmentScheduleStep1FormType } from '@/features/schedule-edit/model/schedule.schema'

export default function AppointmentScheduleStep1() {
  const { trigger } = useFormContext<AppointmentScheduleStep1FormType>()

  const handleNextClick = () => {
    // 폼 검증을 수행하고 유효한 경우에만 진행
    trigger().then((isValid) => {
      if (isValid) {
        // 폼을 직접 제출하기 위해 form 요소를 찾아서 submit 이벤트를 발생시킴
        const formElement = document.querySelector('form')
        if (formElement) {
          formElement.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }))
        } else {
          devLog('error', '폼 요소를 찾을 수 없습니다.')
        }
      } else {
        devLog('error', '폼 검증 실패')
      }
    })
  }

  return (
    <main>
      <ScheduleEditHeader title="약속 신청 (1/2)" button="다음" buttonType="next" onNext={handleNextClick} />
      <div className="flex flex-col px-4">
        <ScheduleEditTitle />
        <ScheduleEditColor />
        <ScheduleEditDate />
        <ScheduleEditAllDay />
        <ScheduleEditContent />
      </div>
    </main>
  )
}
