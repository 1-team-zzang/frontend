import { useMutation } from '@tanstack/react-query'

import { devLog } from '@/shared/utils/dev-log'

import { deleteFriend } from '../api/friend.API'

function useFriendDeleteMutation() {
  return useMutation({
    mutationFn: (friendRequestId: number) => deleteFriend(friendRequestId),
    onSuccess: () => {
      devLog('log', '성공적으로 친구 삭제')
    },
    onError: (error) => {
      devLog('error', '친구 삭제 실패', error.message)
    },
  })
}

export default useFriendDeleteMutation
