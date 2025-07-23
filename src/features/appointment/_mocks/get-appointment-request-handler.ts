import { http, HttpResponse } from 'msw'

import { appointmentsMock } from '@/entities/appointment/mocks/appointment.mocks'

import type { Appointment } from '@/entities/appointment'

interface AppointmentRequestQueryParams {
  page: number
  size: number
  status: 'REQUESTED' | 'NOTREQUESTED'
}

export const getAppointmentRequestsHandler = http.get('/api/appointments/requests', ({ request }) => {
  const { page, size, status } = parseQueryParams(request)

  if (status !== 'REQUESTED') {
    return HttpResponse.json({
      code: 400,
      message: 'Invalid status',
    })
  }

  const filteredAppointments = filterAppointmentsByStatus(appointmentsMock, status)
  const totalPages = Math.ceil(filteredAppointments.length / size)
  const paginatedAppointments = paginateAppointments(filteredAppointments, page, size)

  return HttpResponse.json({
    code: 200,
    message: 'success',
    data: {
      page,
      totalPages,
      appointments: paginatedAppointments,
    },
  })
})

const DEFAULT_PAGE = 1
const DEFAULT_SIZE = 10
const MAX_SIZE = 100

function parseQueryParams(request: Request): AppointmentRequestQueryParams {
  const url = new URL(request.url)
  const page = Math.max(1, Number(url.searchParams.get('page')) || DEFAULT_PAGE)
  const size = Math.min(MAX_SIZE, Math.max(1, Number(url.searchParams.get('size')) || DEFAULT_SIZE))
  const status = (url.searchParams.get('status') ?? 'REQUESTED') as AppointmentRequestQueryParams['status']

  return { page, size, status }
}

function paginateAppointments(appointments: Appointment[], page: number, size: number) {
  const start = (page - 1) * size
  const end = start + size
  return appointments.slice(start, end)
}

function filterAppointmentsByStatus(
  appointments: Appointment[],
  status: AppointmentRequestQueryParams['status'] | null,
) {
  return appointments.filter((appointment) => appointment.appointmentStatus === status)
}
