import axiosInstance from '@/shared/api/axios-instance'

export interface CreateScheduleRequest {
  title: string
  start: string
  end: string
  isRepeated: boolean
  repeatRule?: 'DAILY' | 'WEEKLY' | 'MONTHLY' | 'YEARLY'
  interval?: number
  repeatType?: 'COUNT' | 'UNTIL_DATE'
  repeatCount?: number
  repeatEndAt?: string | null
}

export interface CreateScheduleResponse {
  scheduleId: number
  title: string
  isRepeated: boolean
  repeatRule?: 'DAILY' | 'WEEKLY' | 'YEARLY'
  repeatType?: 'COUNT' | 'UNTIL_DATE'
  repeatCount?: number
}

export async function createSchedule(data: CreateScheduleRequest): Promise<CreateScheduleResponse> {
  const res = await axiosInstance.post('/schedules', data)
  return res.data
}
