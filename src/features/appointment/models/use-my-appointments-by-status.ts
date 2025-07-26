import { useSuspenseInfiniteQuery } from '@tanstack/react-query'

import { fetchMyAppointmentsByStatus } from '../apis/fetch-appointments-by-status'

import { appointmentsQuery } from './appointments.query'

import type { MyAppointmentsByStatusParams } from './appointment.types'

export function useMyAppointmentsByStatus({ size, status }: MyAppointmentsByStatusParams) {
  return useSuspenseInfiniteQuery({
    queryKey: appointmentsQuery.myAppointmentsByStatus({ size, status }),
    queryFn: ({ pageParam }) => fetchMyAppointmentsByStatus({ page: pageParam, size, status }),
    getNextPageParam: (lastPage) => {
      const currentPage = lastPage.data.data.page
      const totalPages = lastPage.data.data.totalPages
      return currentPage < totalPages ? currentPage + 1 : undefined
    },
    select: (data) => {
      const appointments = data.pages.flatMap((page) => page.data.data.appointmentRequests)
      return {
        appointments,
        page: data.pages[data.pages.length - 1]?.data.data.page,
        totalPages: data.pages[data.pages.length - 1]?.data.data.totalPages,
      }
    },
    initialPageParam: 1,
  })
}
