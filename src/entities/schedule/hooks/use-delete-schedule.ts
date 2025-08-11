import { useMutation, useQueryClient } from '@tanstack/react-query'

import { monthToRange, scheduleQueryKeys, useMyMonthsStore } from '@/entities/schedule/lib'
import { useUserStore } from '@/entities/user/models/use-user-store'
import { toast } from '@/shared/ui/toast'

import { deleteSchedule } from '../api'

export default function useDeleteSchedule() {
  const userId = useUserStore((state) => state.user?.userId)
  const months = useMyMonthsStore((s) => s.months)
  const queryClient = useQueryClient()

  const { mutate: deleteScheduleMutate } = useMutation({
    mutationFn: (scheduleId: number) => deleteSchedule(scheduleId!),
    onSuccess: async () => {
      toast.success('일정이 삭제되었습니다.')

      for (const { year, month } of months) {
        const { start, end } = monthToRange(year, month)

        await queryClient.invalidateQueries({
          queryKey: scheduleQueryKeys.userSchedules(userId!, start, end),
          exact: true,
        })
      }
    },
    onError: (error) => {
      toast.error('일정 삭제가 실패했습니다')
      throw error
    },
  })

  return { deleteScheduleMutate }
}
