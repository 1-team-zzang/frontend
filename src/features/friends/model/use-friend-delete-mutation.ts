import { useMutation, useQueryClient } from '@tanstack/react-query'

import { toast } from '@/shared/ui/toast'

import { deleteFriend } from '../api/friend.API'

import { friendQueryKeys } from './index'

function useFriendDeleteMutation() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (friendRequestId: number) => deleteFriend(friendRequestId),
    onSuccess: () => {
      toast.success('친구가 삭제되었습니다')
      queryClient.invalidateQueries({ queryKey: friendQueryKeys.all })
    },
    onError: () => {
      toast.error('친구가 삭제되지 않았습니다. 다시 시도해주세요')
    },
  })
}

export default useFriendDeleteMutation
