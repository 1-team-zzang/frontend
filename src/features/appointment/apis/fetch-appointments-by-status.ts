import axiosInstance from '@/shared/api/axios-instance'

import type { MyAppointmentsByStatusParams } from '../models/appointment.types'
import type { AppointmentResponse } from '@/entities/appointment/models'

export function fetchMyAppointmentsByStatus({ page, size, status }: MyAppointmentsByStatusParams & { page: number }) {
  return axiosInstance.get<AppointmentResponse>(`/appointments/requests?page=${page}&size=${size}&status=${status}`)
}
