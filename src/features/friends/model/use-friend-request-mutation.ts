import { useMutation } from '@tanstack/react-query'

import { devLog } from '@/shared/utils/dev-log'

import { postFriendRequest } from '../api/friend.API'

import type { AxiosError } from 'axios'

function useFriendRequestMutation() {
  return useMutation({
    mutationFn: (friendId: number) => postFriendRequest(friendId),
    onSuccess: () => {},
    onError: (error: AxiosError<{ message: string; errorCode: string }>) => {
      const errorData = error.response?.data
      devLog('error', '친구 요청 실패', errorData)
    },
  })
}

export default useFriendRequestMutation
