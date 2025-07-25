export type AppointmentStatus = 'PENDING' | 'RESPONDED' | 'SENT'

export interface Appointment {
  id: number
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
  inviteAt: string
}

export interface AppointmentRequest {
  id: number
  title: string
  requesterName: string
  startAt: string
  endAt: string
  invitedAt?: string
}

export interface AppointmentResponse {
  code: number
  message: string
  data: {
    page: number
    totalPages: number
    appointmentRequests: AppointmentRequest[]
  }
}

export interface AppointmentDetail {
  id: number
  title: string
  requesterName: string
  content: string
  startAt: string
  endAt: string
  inviteAt: string
}
