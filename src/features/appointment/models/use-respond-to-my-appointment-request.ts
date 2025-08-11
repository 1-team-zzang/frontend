import { useMutation, useQueryClient } from '@tanstack/react-query'

import { scheduleQueryKeys } from '@/entities/schedule/models'

import { respondToMyAppointmentRequest } from '../apis/respond-to-my-appointment-request'

import { appointmentsQuery } from './appointments.query'

export function useRespondToMyAppointmentRequest() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: respondToMyAppointmentRequest,
    onSuccess: () => {
      // 약속 관련 쿼리 무효화
      queryClient.invalidateQueries({ queryKey: appointmentsQuery.all })
      // 일정 관련 쿼리도 무효화 (약속 수락 시 일정이 생성되므로)
      queryClient.invalidateQueries({ queryKey: scheduleQueryKeys.all })
    },
  })
}
