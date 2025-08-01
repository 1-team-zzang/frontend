import { zodResolver } from '@hookform/resolvers/zod'
import { addHours, setMilliseconds, setMinutes, setSeconds } from 'date-fns'
import { useForm } from 'react-hook-form'

import { Form } from '../form'

import { AppointmentScheduleSchema, type AppointmentScheduleFormType } from './schedule.schema'

import type { ReactNode } from 'react'

const today = new Date()
const start = setMilliseconds(setSeconds(setMinutes(addHours(today, 1), 0), 0), 0)
const end = addHours(start, 1)

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
      color: 'red',
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
