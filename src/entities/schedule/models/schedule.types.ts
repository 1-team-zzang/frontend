export type RepeatRule = 'DAILY' | 'WEEKLY' | 'MONTHLY' | 'YEARLY'
export type RepeatType = 'COUNT' | 'UNTIL'

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
  color: string
  userId: number
  appointmentId: number | null
}
