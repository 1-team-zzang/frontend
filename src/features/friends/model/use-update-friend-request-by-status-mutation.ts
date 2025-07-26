import { useMutation, useQueryClient } from '@tanstack/react-query'

import { devLog } from '@/shared/utils/dev-log'

import { putFriendRequest } from '../api/friend.API'

import { friendQueryKeys } from './index'

function useUpdateFriendRequestByStatusMutation(friendRequestId: number) {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (status: 'ACCEPT' | 'REJECT') => putFriendRequest(status, friendRequestId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: friendQueryKeys.all })
    },
    onError: (error) => {
      devLog('error', '친구 수락/거절 실패', error)
    },
  })
}

export default useUpdateFriendRequestByStatusMutation
