/* eslint-disable indent */
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router'

import { scheduleQueryKeys } from '@/entities/schedule/models'
import { useUserStore } from '@/entities/user'
import {
  appointmentSchedule,
  type AppointmentScheduleRequest,
} from '@/features/schedule-edit/api/appointment-schedule.API'
import { formatDateToString } from '@/features/schedule-edit/model/format-date-to-string'
import { AppointmentScheduleFormProvider } from '@/features/schedule-edit/ui'
import AppointmentScheduleStep1FormProvider from '@/features/schedule-edit/ui/appointment-schedule-step1-form-provider'
import { toast } from '@/shared/ui'
import { devLog } from '@/shared/utils'

import AppointmentScheduleStep1 from './appointment-schedule-step-1'
import AppointmentScheduleStep2 from './appointment-schedule-step-2'

import type {
  AppointmentScheduleFormType,
  AppointmentScheduleStep1FormType,
} from '@/features/schedule-edit/model/schedule.schema'

export default function AppointmentSchedulePage() {
  const [step1Data, setStep1Data] = useState<Partial<AppointmentScheduleFormType>>({})
  const [currentStep, setCurrentStep] = useState(1)
  const params = useParams()

  const navigate = useNavigate()
  const queryClient = useQueryClient()
  const { user } = useUserStore()

  // URL 파라미터 확인
  devLog('log', 'URL 파라미터', params)

  // 시나리오 구분
  const isFriendScenario = params.friendId // /friends/:friendId/calendar/appointment
  const isShareScenario = params.userId // /share/:userId/appointment

  const receiverId = isFriendScenario ? parseInt(params.friendId!) : isShareScenario ? parseInt(params.userId!) : 0

  devLog('log', '시나리오 구분', {
    isFriendScenario,
    isShareScenario,
    receiverId,
  })

  const appointmentScheduleMutate = useMutation({
    mutationFn: appointmentSchedule,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: scheduleQueryKeys.all })
    },
  })

  const handleStepNext = (data: AppointmentScheduleStep1FormType) => {
    devLog('log', 'handleStepNext 호출됨', data)
    setStep1Data(data)
    setCurrentStep(2)
    devLog('log', 'currentStep을 2로 설정함')
  }

  const handleStepBack = () => {
    setCurrentStep(1)
  }

  // step1Data 변경을 추적하는 useEffect
  useEffect(() => {
    if (Object.keys(step1Data).length > 0) {
      devLog('log', 'Step 1 데이터가 업데이트됨', step1Data)
    }
  }, [step1Data])

  const onSubmit = async (data: AppointmentScheduleFormType) => {
    const totalData = { ...step1Data, ...data }
    const payload: AppointmentScheduleRequest = {
      title: totalData.title,
      content: totalData.content,
      startAt: formatDateToString(totalData.start),
      endAt: formatDateToString(totalData.end),
      isAllDay: totalData.isAllDay,
      requesterName: totalData.requesterName,
      requesterEmail: totalData.requesterEmail,
      receiverId: receiverId, // URL에서 가져온 receiverId 사용
      message: totalData.message,
      color: totalData.color,
    }

    try {
      const result = await appointmentScheduleMutate.mutateAsync(payload)
      devLog('log', 'result', result)
      navigate('/')
    } catch (error) {
      devLog('error', 'error', error)
      toast.error('약속 신청 중 오류가 발생했습니다.')
    }
  }

  if (currentStep === 1) {
    return (
      <AppointmentScheduleStep1FormProvider onSubmit={handleStepNext}>
        <AppointmentScheduleStep1 />
      </AppointmentScheduleStep1FormProvider>
    )
  } else if (currentStep === 2) {
    // 시나리오에 따라 기본값 설정
    const defaultStep2Values = {
      ...step1Data,
      receiverId: receiverId, // URL에서 가져온 receiverId 추가
      // 친구 시나리오에서는 현재 사용자 정보를 기본값으로 설정
      ...(isFriendScenario &&
        user && {
          requesterName: user.name,
          requesterEmail: user.email,
        }),
    }

    return (
      <AppointmentScheduleFormProvider
        key={user?.userId ?? 'nouser'} // 사용자 변경 시 폼 리마운트
        onSubmit={onSubmit}
        defaultValues={defaultStep2Values}
      >
        <AppointmentScheduleStep2
          handleStepBack={handleStepBack}
          isFriendScenario={isFriendScenario}
          isShareScenario={isShareScenario}
        />
      </AppointmentScheduleFormProvider>
    )
  }
}
