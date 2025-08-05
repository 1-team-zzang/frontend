import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'
import { useNavigate } from 'react-router'

import { scheduleQueryKeys } from '@/entities/schedule'
import {
  appointmentSchedule,
  type AppointmentScheduleRequest,
} from '@/features/schedule-edit/api/appointment-schedule.API'
import { formatDateToString } from '@/features/schedule-edit/model/format-date-to-string'
import { AppointmentScheduleFormProvider } from '@/features/schedule-edit/ui'
import { toast } from '@/shared/ui'
import { devLog } from '@/shared/utils'

import AppointmentScheduleStep1 from './appointment-schedule-step-1'
import AppointmentScheduleStep2 from './appointment-schedule-step-2'

import type { AppointmentScheduleFormType } from '@/features/schedule-edit/model/schedule.schema'

export default function AppointmentSchedulePage() {
  const [step1Data, setStep1Data] = useState<Partial<AppointmentScheduleFormType>>({})
  const [currentStep, setCurrentStep] = useState(1)

  const navigate = useNavigate()
  const queryClient = useQueryClient()

  const appointmentScheduleMutate = useMutation({
    mutationFn: appointmentSchedule,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: scheduleQueryKeys.all })
    },
  })

  const handleStepNext = (data: Partial<AppointmentScheduleFormType>) => {
    setStep1Data(data)
    setCurrentStep(2)
  }

  const handleStepBack = () => {
    setCurrentStep(1)
  }

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
      receiverId: totalData.receiverId,
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
      <AppointmentScheduleFormProvider onSubmit={handleStepNext}>
        <AppointmentScheduleStep1 handleStepBack={handleStepBack} />
      </AppointmentScheduleFormProvider>
    )
  } else if (currentStep === 2) {
    return (
      <AppointmentScheduleFormProvider onSubmit={onSubmit}>
        <AppointmentScheduleStep2 handleStepBack={handleStepBack} />
      </AppointmentScheduleFormProvider>
    )
  }
}
