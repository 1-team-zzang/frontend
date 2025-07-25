import { useMutation, useQueryClient } from '@tanstack/react-query'

import { devLog } from '@/shared/utils/dev-log'

import { deleteFriend } from '../api/friend.API'

import { friendQueryKeys } from './query-key'

function useFriendDeleteMutation() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (friendRequestId: number) => deleteFriend(friendRequestId),
    onSuccess: () => {
      devLog('log', '성공적으로 친구 삭제')
      queryClient.invalidateQueries({ queryKey: friendQueryKeys.all })
    },
    onError: (error) => {
      devLog('error', '친구 삭제 실패', error.message)
    },
  })
}

export default useFriendDeleteMutation
