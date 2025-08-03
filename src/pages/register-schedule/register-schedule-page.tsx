import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useNavigate } from 'react-router'

import { scheduleQueryKeys } from '@/entities/schedule/models/schedule.query'
import {
  ScheduleEditAllDay,
  ScheduleEditContent,
  ScheduleEditDate,
  RegisterScheduleFormProvider,
  ScheduleEditHeader,
  ScheduleEditRepeat,
  ScheduleEditColor,
  ScheduleEditTitle,
  ScheduleEditVisible,
} from '@/shared/ui/schedule-edit'
import { toast } from '@/shared/ui/toast'
import { devLog } from '@/shared/utils/dev-log'
import { formatDateToString } from '@/shared/utils/format-date-to-string'

import { createSchedule, type CreateScheduleRequest } from '../../features/schedule-register/api/schedule-register.API'

import type { RegisterScheduleFormType } from '../../shared/ui/schedule-edit/schedule.schema'

export default function RegisterSchedulePage() {
  const navigate = useNavigate()
  const queryClient = useQueryClient()

  const scheduleRegisterMutate = useMutation({
    mutationFn: createSchedule,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: scheduleQueryKeys.all })
    },
  })

  const onSubmit = async (data: RegisterScheduleFormType) => {
    const payload: CreateScheduleRequest = {
      title: data.title,
      content: data.content,
      startAt: formatDateToString(data.start),
      endAt: formatDateToString(data.end),
      isVisible: data.visible === 'visible',
      isAllDay: data.isAllDay,
      isRepeated: data.repeatRule !== '',
      repeatRule: data.repeatRule,
      interval: data.interval,
      repeatType: data.repeatType === 'COUNT' ? 'COUNT' : 'DATE',
      repeatCount: data.repeatType === 'COUNT' ? data.repeatCount : undefined,
      repeatEndAt: data.repeatType === 'DATE' && data.repeatEndAt ? data.repeatEndAt : undefined,
      color: data.color,
    }

    try {
      const result = await scheduleRegisterMutate.mutateAsync(payload)
      devLog('log', 'result', result)
      navigate('/')
    } catch (error) {
      devLog('error', 'error', error)
      toast.error('일정 등록 중 오류가 발생했습니다.')
    }
  }

  return (
    <RegisterScheduleFormProvider onSubmit={onSubmit}>
      <ScheduleEditHeader>일정 등록</ScheduleEditHeader>
      <div className="flex flex-col px-4">
        <ScheduleEditTitle />
        <ScheduleEditColor />
        <ScheduleEditDate />
        <ScheduleEditAllDay />
        <ScheduleEditRepeat />
        <ScheduleEditVisible />
        <ScheduleEditContent />
      </div>
    </RegisterScheduleFormProvider>
  )
}
