import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useNavigate } from 'react-router'

import { scheduleQueryKeys } from '@/entities/schedule/models/schedule.query'
import { toast } from '@/shared/ui/toast'

import { editSchedule } from '../api/edit-schedule-API'

import type { EditScheduleRequest } from './edit-schedule.types'
import type { AxiosResponse } from 'axios'

export function useEditScheduleMutation() {
  const queryClient = useQueryClient()
  const navigator = useNavigate()

  return useMutation<AxiosResponse, Error, EditScheduleRequest>({
    mutationFn: editSchedule,
    onSuccess: () => {
      toast.success('일정이 수정되었습니다.')
      queryClient.invalidateQueries({ queryKey: scheduleQueryKeys.all })
      navigator(-1)
    },
    onError: () => {
      toast.error('일정 수정에 실패했습니다. 다시 시도해주세요.')
    },
  })
}
