import { useMutation, useQueryClient } from '@tanstack/react-query'

import { notificationQueryKeys } from '@/features/notification/model'
import { devLog } from '@/shared/utils'

import { putFriendRequest } from '../api'

import { friendQueryKeys } from './friend.query'

function useUpdateFriendRequestByStatusMutation(friendRequestId: number) {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (status: 'ACCEPT' | 'REJECT') => putFriendRequest(status, friendRequestId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: friendQueryKeys.all })
      queryClient.invalidateQueries({ queryKey: notificationQueryKeys.all })
    },
    onError: (error) => {
      devLog('error', '친구 수락/거절 실패', error)
    },
  })
}

export default useUpdateFriendRequestByStatusMutation
