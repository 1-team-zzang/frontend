import axiosInstance from '@/shared/api/axios-instance'

export interface CreateScheduleRequest {
  title: string
  content: string
  startAt: string
  endAt: string
  isVisible: boolean
  isAllDay: boolean
  isRepeated: boolean
  repeatRule?: 'DAILY' | 'WEEKLY' | 'MONTHLY' | 'YEARLY' | ''
  interval?: number
  repeatType?: 'COUNT' | 'DATE'
  repeatCount?: number
  repeatEndAt?: string | null
  color: string
}

export interface CreateScheduleResponse {
  scheduleId: number
  title: string
  isRepeated: boolean
  repeatRule?: 'DAILY' | 'WEEKLY' | 'MONTHLY' | 'YEARLY' | ''
  repeatType?: 'COUNT' | 'DATE'
  repeatCount?: number
}

export async function createSchedule(data: CreateScheduleRequest): Promise<CreateScheduleResponse> {
  const res = await axiosInstance.post('/schedules', data)
  return res.data
}
