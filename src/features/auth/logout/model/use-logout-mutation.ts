import { useMutation } from '@tanstack/react-query'

import { useUserStore } from '@/entities/user'
import { toast } from '@/shared/ui'

import { postLogout } from '../api'

export default function useLogoutMutation() {
  const clearUser = useUserStore((state) => state.clearUser)
  const clearUserStorage = useUserStore.persist.clearStorage

  return useMutation({
    mutationFn: () => postLogout(),
    onSuccess: () => {
      clearUser()
      clearUserStorage()
    },
    onError: () => {
      toast.error('로그아웃에 실패했습니다. 다시 시도해주세요')
    },
    throwOnError: false,
  })
}
