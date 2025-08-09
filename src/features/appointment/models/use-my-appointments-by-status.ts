import { useSuspenseInfiniteQuery } from '@tanstack/react-query'

import { useUserStore } from '@/entities/user/models/use-user-store'

import { fetchMyAppointmentsByStatus } from '../apis/fetch-appointments-by-status'

import { appointmentsQuery } from './appointments.query'

import type { MyAppointmentsByStatusParams } from './appointment.types'
import type { AppointmentRequest } from '@/entities/appointment/models'

export function useMyAppointmentsByStatus({ size, status }: MyAppointmentsByStatusParams) {
  const currentUser = useUserStore((state) => state.user)

  return useSuspenseInfiniteQuery({
    queryKey: appointmentsQuery.myAppointmentsByStatus({ size, status }),
    queryFn: ({ pageParam }) => fetchMyAppointmentsByStatus({ page: pageParam, size, status }),
    getNextPageParam: (lastPage) => {
      const currentPage = lastPage.data.page
      const totalPages = lastPage.data.totalPages
      return currentPage < totalPages ? currentPage + 1 : undefined
    },
    select: (data) => {
      let appointments = data.pages.flatMap((page) => page.data.appointmentRequests)

      // 클라이언트에서 추가 필터링 적용
      if (currentUser) {
        appointments = appointments.filter((appointment: AppointmentRequest) => {
          const isRequester = appointment.requesterName === currentUser.name
          const isReceiver = appointment.receiverName === currentUser.name

          switch (status) {
            case 'PENDING':
              // 대기중: 받은 약속 중 아직 응답하지 않은 것만 (REQUESTED 상태)
              return isReceiver && appointment.status === 'REQUESTED'
            case 'RESPONDED':
              // 응답한: 받은 약속 중 수락/거절한 것만 (ACCEPTED/REJECTED 상태)
              return isReceiver && (appointment.status === 'ACCEPTED' || appointment.status === 'REJECTED')
            case 'SENT':
              // 보낸: 내가 보낸 약속만
              return isRequester
            default:
              return true
          }
        })
      }

      return {
        appointments,
        page: data.pages[data.pages.length - 1]?.data.page,
        totalPages: data.pages[data.pages.length - 1]?.data.totalPages,
      }
    },
    initialPageParam: 1,
  })
}
