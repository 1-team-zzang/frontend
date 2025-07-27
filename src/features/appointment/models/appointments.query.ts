import type { MyAppointmentsByStatusParams } from './appointment.types'

export const appointmentsQuery = {
  all: ['appointments'],
  myAppointmentsByStatus: ({ size, status }: MyAppointmentsByStatusParams) => [
    ...appointmentsQuery.all,
    'by-status',
    size,
    status,
  ],
  detail: (id: string) => [...appointmentsQuery.all, 'detail', id],
  respondToMyAppointmentRequest: (id: string) => [...appointmentsQuery.all, 'respond', id],
}
