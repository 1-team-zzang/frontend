import type { Schedule } from '@/entities/schedule'

export type AppointmentStatus = 'REQUESTED' | 'ACCEPTED' | 'REJECTED'

export interface Appointment extends Pick<Schedule, 'color'> {
  appointmentId: number
  title: string
  content: string
  startAt: string
  endAt: string
  requesterName: string
  requesterEmail: string
  appointmentStatus: AppointmentStatus
  createdAt: string
  modifiedAt: string
  isAllDay: boolean
  requesterId: number
  receiverId: number
}
