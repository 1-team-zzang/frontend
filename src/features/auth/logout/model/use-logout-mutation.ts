import { useMutation } from '@tanstack/react-query'

import { useUserStore } from '@/entities/user/models/use-user-store'
import { devLog } from '@/shared/utils/dev-log'

import { postLogout } from '../api/logout.API'

export default function useLogoutMutation() {
  const clearUser = useUserStore((state) => state.clearUser)
  const clearUserStorage = useUserStore.persist.clearStorage

  return useMutation({
    mutationFn: () => postLogout(),
    onSuccess: () => {
      clearUser()
      clearUserStorage()
    },
    onError: (error) => {
      devLog('error', '로그아웃 에러', error.message)
    },
  })
}
