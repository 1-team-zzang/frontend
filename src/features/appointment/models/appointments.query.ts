import type { MyAppointmentsByStatusParams } from './appointment.types'

export const appointmentsQuery = {
  all: ['my-appointments'],
  myAppointmentsByStatus: ({ size, status }: MyAppointmentsByStatusParams) => [
    ...appointmentsQuery.all,
    'by-status',
    size,
    status,
  ],
  detail: (id: string) => [...appointmentsQuery.all, 'detail', id],
}
