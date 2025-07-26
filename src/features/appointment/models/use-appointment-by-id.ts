import { useSuspenseQuery } from '@tanstack/react-query'

import fetchAppointmentById from '../apis/fetch-appointment-by-id'

import { appointmentsQuery } from './appointments.query'

export default function useAppointmentById(id: string) {
  return useSuspenseQuery({
    queryKey: appointmentsQuery.detail(id),
    queryFn: () => fetchAppointmentById(id),
    select: (data) => data.data,
  })
}
