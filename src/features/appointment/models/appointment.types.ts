import type { Appointment } from '@/entities/appointment'

export type RequestAppointmentPayload = Omit<
  Appointment,
  'appointmentId' | 'createdAt' | 'modifiedAt' | 'requesterId' | 'receiverId' | 'appointmentStatus'
>
