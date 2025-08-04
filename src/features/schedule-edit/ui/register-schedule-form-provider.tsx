import { zodResolver } from '@hookform/resolvers/zod'
import { addHours, setMilliseconds, setMinutes, setSeconds } from 'date-fns'
import { useForm } from 'react-hook-form'

import { Form } from '../../../shared/ui/form'
import { RegisterScheduleSchema, type RegisterScheduleFormType } from '../model/schedule.schema'

import type { ReactNode } from 'react'

//기본 날짜 설정
const today = new Date()
const start = setMilliseconds(setSeconds(setMinutes(addHours(today, 1), 0), 0), 0)
const end = addHours(start, 1)

interface Props {
  children: ReactNode
  onSubmit: (data: RegisterScheduleFormType) => void
  defaultValues?: Partial<RegisterScheduleFormType>
}

export default function RegisterScheduleFormProvider({ children, onSubmit, defaultValues }: Props) {
  const methods = useForm<RegisterScheduleFormType>({
    resolver: zodResolver(RegisterScheduleSchema),
    mode: 'onChange',
    defaultValues: {
      title: '',
      color: 'RED',
      start: start,
      end: end,
      isAllDay: false,
      repeatRule: '',
      interval: 1,
      repeatType: 'COUNT',
      repeatCount: 1,
      repeatEndAt: null,
      visible: 'visible',
      content: '',
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
