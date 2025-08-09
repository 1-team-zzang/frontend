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
  const { formState, watch, getValues, trigger } = useFormContext<AppointmentScheduleStep1FormType>()

  const handleNextClick = () => {
    devLog('log', '다음 버튼 클릭됨')
    devLog('log', '현재 폼 데이터', watch())
    devLog('log', '폼 상태', formState)

    // 폼 검증을 수행하고 유효한 경우에만 진행
    trigger().then((isValid) => {
      devLog('log', '폼 검증 결과', isValid)
      if (isValid) {
        const data = getValues()
        devLog('log', '검증된 폼 데이터', data)

        // 폼을 직접 제출하기 위해 form 요소를 찾아서 submit 이벤트를 발생시킴
        const formElement = document.querySelector('form')
        if (formElement) {
          devLog('log', '폼 요소를 찾았습니다. submit 이벤트를 발생시킵니다.')
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
    <>
      <ScheduleEditHeader title="약속 신청 (1/2)" button="다음" buttonType="next" onNext={handleNextClick} />
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
