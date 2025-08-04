import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import {
  AppointmentScheduleSchema,
  type AppointmentScheduleFormType,
} from '@/features/schedule-edit/model/schedule.schema'

import { Form } from '../../../shared/ui/form'
import { formatToday } from '../model/format-today'

import type { ReactNode } from 'react'

const { start, end } = formatToday()

interface Props {
  children: ReactNode
  onSubmit: (data: AppointmentScheduleFormType) => void
  defaultValues?: Partial<AppointmentScheduleFormType>
}

export default function AppointmentScheduleFormProvider({ children, onSubmit, defaultValues }: Props) {
  const methods = useForm<AppointmentScheduleFormType>({
    resolver: zodResolver(AppointmentScheduleSchema),
    mode: 'onChange',
    defaultValues: {
      title: '',
      color: 'RED',
      start: start,
      end: end,
      isAllDay: false,
      content: '',
      requesterName: '',
      requesterEmail: '',
      receiverId: 0,
      ...defaultValues,
    },
    shouldUnregister: false,
  })

  return (
    <Form methods={methods} onSubmit={onSubmit}>
      {children}
    </Form>
  )
}
