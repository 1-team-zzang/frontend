import axiosInstance from '@/shared/api/axios-instance'

import type { AppointmentDetailResponse } from '@/features/appointment/models/appointment.types'

export default async function fetchAppointmentById(id: string) {
  return (await axiosInstance.get<AppointmentDetailResponse>(`/appointments/requests/${id}`)).data
}
