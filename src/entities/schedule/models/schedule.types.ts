export type RepeatRule = 'DAILY' | 'WEEKLY' | 'MONTHLY' | 'YEARLY'
export type RepeatType = 'COUNT' | 'UNTIL'
export type ColorType = 'red' | 'yellow' | 'green' | 'blue' | 'purple'

export interface Schedule {
  scheduleId: number
  title: string
  content: string
  startAt: string // ISO 날짜 문자열
  endAt: string
  isRepeated: boolean
  repeatRule: RepeatRule | null
  isVisible: boolean
  createdAt: string
  modifiedAt: string
  repeatType: RepeatType | null
  repeatCount: number | null
  repeatEndAt: string | null
  color: ColorType
  userId: number
  appointmentId: number | null
  isAllDay: boolean
}

export interface ScheduleListResponse {
  owner: boolean
  scheduleResponseList: Schedule[]
}
