import axiosInstance from '@/shared/api/axios-instance'

export interface AppointmentScheduleRequest {
  title: string
  content: string
  message: string
  startAt: string
  endAt: string
  requesterName: string
  requesterEmail: string
  isAllDay: boolean
  receiverId: number
  color: string
}

export async function appointmentSchedule(data: AppointmentScheduleRequest) {
  const res = await axiosInstance.post('/appointments/requests', data)
  return res.data
}
