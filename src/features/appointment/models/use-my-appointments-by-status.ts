import { useSuspenseQuery } from '@tanstack/react-query'

import { fetchMyAppointmentsByStatus } from '../apis/fetch-appointments-by-status'

import { appointmentsQuery } from './appointments.query'

import type { MyAppointmentsByStatusParams } from './appointment.types'

export function useMyAppointmentsByStatus({ page, size, status }: MyAppointmentsByStatusParams) {
  return useSuspenseQuery({
    queryKey: appointmentsQuery.myAppointmentsByStatus({ page, size, status }),
    queryFn: () => fetchMyAppointmentsByStatus({ page, size, status }),
  })
}
