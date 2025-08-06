import type { RegisterScheduleFormType } from '@/features/schedule-edit/model/schedule.schema'

export interface EditScheduleParams {
  scheduleId: string
  formData: RegisterScheduleFormType
}

export interface EditScheduleRequest {
  scheduleId: string
  title: string
  content: string
  color: string
  startAt: string
  endAt: string
  isAllDay: boolean
  isVisible: boolean
  isRepeated: boolean
  repeatRule: '' | 'DAILY' | 'WEEKLY' | 'MONTHLY' | 'YEARLY'
  interval: number
  repeatType: 'COUNT' | 'DATE' | null
  repeatCount?: number
  repeatEndAt?: string | null
}
