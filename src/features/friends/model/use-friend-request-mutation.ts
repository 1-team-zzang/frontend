import { useMutation, useQueryClient } from '@tanstack/react-query'

import { devLog } from '@/shared/utils'

import { postFriendRequest } from '../api'

import { friendQueryKeys } from './friend.query'

import type { AxiosError } from 'axios'

function useFriendRequestMutation() {
  const QueryClient = useQueryClient()

  return useMutation({
    mutationFn: (friendId: number) => postFriendRequest(friendId),
    onSuccess: () => {
      QueryClient.invalidateQueries({ queryKey: friendQueryKeys.all })
    },
    onError: (error: AxiosError<{ message: string; errorCode: string }>) => {
      const errorData = error.response?.data
      devLog('error', '친구 요청 실패', errorData)
    },
  })
}

export default useFriendRequestMutation
