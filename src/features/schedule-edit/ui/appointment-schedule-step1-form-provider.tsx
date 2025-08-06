import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import {
  AppointmentScheduleStep1Schema,
  type AppointmentScheduleStep1FormType,
} from '@/features/schedule-edit/model/schedule.schema'
import { Form } from '@/shared/ui'

import { formatToday } from '../model/format-today'

import type { ReactNode } from 'react'

const { start, end } = formatToday()

interface Props {
  children: ReactNode
  onSubmit: (data: AppointmentScheduleStep1FormType) => void
  defaultValues?: Partial<AppointmentScheduleStep1FormType>
}

export default function AppointmentScheduleStep1FormProvider({ children, onSubmit, defaultValues }: Props) {
  const methods = useForm<AppointmentScheduleStep1FormType>({
    resolver: zodResolver(AppointmentScheduleStep1Schema),
    mode: 'onChange',
    defaultValues: {
      title: '',
      color: 'RED',
      start: start,
      end: end,
      isAllDay: false,
      content: '',
      ...defaultValues,
    },
    shouldUnregister: false,
  })

  const handleFormSubmit = (data: AppointmentScheduleStep1FormType) => {
    onSubmit(data)
  }

  return (
    <Form methods={methods} onSubmit={handleFormSubmit}>
      {children}
    </Form>
  )
}
