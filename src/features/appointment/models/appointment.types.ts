export interface RequestAppointmentPayload {
  title: string
  content: string
  startAt: string
  endAt: string
  requesterName: string
  requesterEmail: string
  isAllDay: boolean
  receiverId: number
}
