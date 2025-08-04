import { useMutation } from '@tanstack/react-query'

import { useUserStore } from '@/entities/user'
import { toast } from '@/shared/ui'

import { deleteWithdraw } from '../api'

export default function useWithdrawMutation() {
  const { clearUser } = useUserStore()
  return useMutation({
    mutationFn: () => deleteWithdraw(),
    onSuccess: () => {
      clearUser()
      localStorage.removeItem('token')
      toast.success('정상적으로 탈퇴되었습니다')
    },
    onError: () => {
      toast.error('회원 탈퇴에 실패했습니다. 다시 시도해주세요')
    },
  })
}
