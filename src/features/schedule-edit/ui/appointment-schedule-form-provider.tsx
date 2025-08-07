import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useSearchParams } from 'react-router'

import {
  AppointmentScheduleSchema,
  type AppointmentScheduleFormType,
} from '@/features/schedule-edit/model/schedule.schema'
import { Form } from '@/shared/ui'

import { formatToday } from '../model/format-today'

import type { ReactNode } from 'react'

interface Props {
  children: ReactNode
  onSubmit: (data: AppointmentScheduleFormType) => void
  defaultValues?: Partial<AppointmentScheduleFormType>
}

export default function AppointmentScheduleFormProvider({ children, onSubmit, defaultValues }: Props) {
  const [searchParams] = useSearchParams()
  const selectedDate = searchParams.get('date')

  // 선택된 날짜가 있으면 해당 날짜를 기준으로, 없으면 오늘 날짜를 기준으로 설정
  const { start, end } = formatToday()

  // 선택된 날짜가 있으면 해당 날짜의 시간을 사용
  const startDate = selectedDate ? new Date(selectedDate) : start
  const endDate = selectedDate ? new Date(selectedDate) : end

  if (selectedDate) {
    // 선택된 날짜의 시간을 현재 시간으로 설정
    const now = new Date()
    startDate.setHours(now.getHours() + 1, 0, 0, 0)
    endDate.setHours(now.getHours() + 2, 0, 0, 0)
  }

  const methods = useForm<AppointmentScheduleFormType>({
    resolver: zodResolver(AppointmentScheduleSchema),
    mode: 'onChange',
    defaultValues: {
      title: '',
      color: 'RED',
      start: startDate,
      end: endDate,
      isAllDay: false,
      content: '',
      requesterName: '',
      requesterEmail: '',
      receiverId: 0,
      ...defaultValues,
    },
    shouldUnregister: false,
  })

  const handleFormSubmit = (data: AppointmentScheduleFormType) => {
    onSubmit(data)
  }

  return (
    <Form methods={methods} onSubmit={handleFormSubmit}>
      {children}
    </Form>
  )
}
