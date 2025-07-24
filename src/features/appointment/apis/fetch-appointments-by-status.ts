import axiosInstance from '@/shared/api/axios-instance'

import type { MyAppointmentsByStatusParams } from '../models/appointment.types'

export function fetchMyAppointmentsByStatus({ page, size, status }: MyAppointmentsByStatusParams) {
  return axiosInstance.get(`/appointments/requests?page=${page}&size=${size}&status=${status}`)
}
