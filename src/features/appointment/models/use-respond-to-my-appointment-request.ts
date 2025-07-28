import { useMutation, useQueryClient } from '@tanstack/react-query'

import { respondToMyAppointmentRequest } from '../apis/respond-to-my-appointment-request'

import { appointmentsQuery } from './appointments.query'

export function useRespondToMyAppointmentRequest() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: respondToMyAppointmentRequest,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: appointmentsQuery.all })
    },
  })
}
