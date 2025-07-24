import type { MyAppointmentsByStatusParams } from './appointment.types'

export const appointmentsQuery = {
  all: ['my-appointments'],
  myAppointmentsByStatus: ({ page, size, status }: MyAppointmentsByStatusParams) => [
    ...appointmentsQuery.all,
    'by-status',
    page,
    size,
    status,
  ],
}
