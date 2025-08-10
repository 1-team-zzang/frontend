import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useNavigate } from 'react-router'

import { monthToRange, scheduleQueryKeys, useMyMonthsStore } from '@/entities/schedule/models'
import { useUserStore } from '@/entities/user'
import { toast } from '@/shared/ui/toast'

import { editSchedule } from '../api/edit-schedule-API'

import type { EditScheduleRequest } from './edit-schedule.types'
import type { AxiosResponse } from 'axios'

export function useEditScheduleMutation() {
  const queryClient = useQueryClient()
  const navigate = useNavigate()
  const userId = useUserStore((s) => s.user?.userId)!
  const months = useMyMonthsStore((s) => s.months)

  return useMutation<AxiosResponse, Error, EditScheduleRequest>({
    mutationFn: editSchedule,
    onSuccess: async () => {
      toast.success('일정이 수정되었습니다.')

      for (const { year, month } of months) {
        const { start, end } = monthToRange(year, month)

        await queryClient.invalidateQueries({
          queryKey: scheduleQueryKeys.userSchedules(userId, start, end),
          exact: true,
        })
      }

      navigate(-1)
    },
    onError: () => {
      toast.error('일정 수정에 실패했습니다. 다시 시도해주세요.')
    },
  })
}
