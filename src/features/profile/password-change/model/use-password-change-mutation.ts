import { useMutation } from '@tanstack/react-query'

import { toast } from '@/shared/ui/toast'

import { putUserPassword } from '../../api/profile.API'

import type { PasswordChangeRequestData } from '../../types/profile.types'

export default function usePasswordChangeMutation() {
  return useMutation({
    mutationFn: (data: PasswordChangeRequestData) => putUserPassword(data),
    onSuccess: () => {
      toast.success('비밀번호가 변경되었습니다')
    },
    onError: () => {
      toast.error('비밀번호 변경에 실패하였습니다. 다시 시도해주세요')
    },
  })
}
