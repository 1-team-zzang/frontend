import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useSearchParams } from 'react-router'

import { Form } from '@/shared/ui'

import { RegisterScheduleSchema, type RegisterScheduleFormType } from '../model/schedule.schema'

import type { ReactNode } from 'react'

interface Props {
  children: ReactNode
  onSubmit: (data: RegisterScheduleFormType) => void
  defaultValues?: Partial<RegisterScheduleFormType>
}

export default function RegisterDetailedScheduleFormProvider({ children, onSubmit, defaultValues }: Props) {
  const [searchParams] = useSearchParams()
  const selectedDate = searchParams.get('date')
  const baseDate = selectedDate ? new Date(selectedDate) : new Date()

  const start = new Date(baseDate)
  const end = new Date(baseDate)
  end.setHours(end.getHours() + 1)

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
    <Form methods={methods} onSubmit={onSubmit} className="m-0">
      {children}
    </Form>
  )
}
