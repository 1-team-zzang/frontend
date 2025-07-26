import type {
  AppointmentDetail,
  AppointmentRequest,
  AppointmentStatus,
} from '@/entities/appointment/models/appointment.types'

export interface MyAppointmentsByStatusParams {
  size: number
  status: AppointmentStatus
}

export interface MyAppointmentsResponse {
  appointments: AppointmentRequest[]
  page: number
  totalPages: number
}

export interface AppointmentDetailResponse {
  code: number
  message: string
  data: AppointmentDetail
}
