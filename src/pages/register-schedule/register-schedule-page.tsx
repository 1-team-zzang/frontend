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
import { devLog } from '@/shared/utils/dev-log'

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

  function dateToString(date: Date) {
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')
    const hour = String(date.getHours()).padStart(2, '0')
    const minute = String(date.getMinutes()).padStart(2, '0')

    return `${year}-${month}-${day} ${hour}:${minute}`
  }

  const onSubmit = async (data: RegisterScheduleFormType) => {
    const payload: CreateScheduleRequest = {
      title: data.title,
      content: data.content,
      startAt: dateToString(data.start),
      endAt: dateToString(data.end),
      isVisible: data.visible === 'visible',
      isAllDay: data.isAllDay,
      isRepeated: data.repeatUnit !== 'none',
      repeatRule:
        data.repeatUnit === 'day'
          ? 'DAILY'
          : data.repeatUnit === 'week'
            ? 'WEEKLY'
            : data.repeatUnit === 'month'
              ? 'MONTHLY'
              : data.repeatUnit === 'year'
                ? 'YEARLY'
                : undefined,
      interval: data.interval,
      repeatType: data.repeatMode === 'count' ? 'COUNT' : 'DATE',
      repeatCount: data.repeatMode === 'count' ? data.repeatCount : undefined,
      repeatEndAt: data.repeatMode === 'date' && data.repeatEndAt ? data.repeatEndAt : undefined,
      color: data.color.toUpperCase(),
    }

    try {
      const result = await scheduleRegisterMutate.mutateAsync(payload)
      devLog('log', 'result', result)
      navigate('/')
    } catch (error) {
      devLog('error', 'error', error)
      alert('일정 등록 중 오류가 발생했습니다.')
    }
  }

  return (
    <RegisterScheduleFormProvider onSubmit={onSubmit}>
      <ScheduleEditHeader />
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
