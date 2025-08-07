import { useMutation, useQueryClient } from '@tanstack/react-query'

import { scheduleQueryKeys } from '@/entities/schedule/models'
import { useUserStore } from '@/entities/user/models/use-user-store'
import { toast } from '@/shared/ui/toast'

import { deleteSchedule } from '../api'

export default function useDeleteSchedule() {
  const userId = useUserStore((state) => state.user?.userId)
  const queryClient = useQueryClient()

  const { mutate: deleteScheduleMutate } = useMutation({
    mutationFn: (scheduleId: number) => deleteSchedule(scheduleId!),
    onSuccess: () => {
      if (userId) {
        queryClient.invalidateQueries({
          queryKey: scheduleQueryKeys.userSchedules(userId),
        })
      }
      toast.success('일정이 삭제되었습니다')
    },
    onError: (error) => {
      toast.error('일정 삭제가 실패했습니다')
      throw error
    },
  })

  return { deleteScheduleMutate }
}
