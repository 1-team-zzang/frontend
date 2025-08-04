import { useMutation } from '@tanstack/react-query'

import { useUserStore } from '@/entities/user'
import { toast } from '@/shared/ui'

import { putUserProfile } from '../../api'

import type { UserProfileRequestData } from '../../types'

export default function useUploadProfileImageMutation() {
  return useMutation({
    mutationFn: (data: UserProfileRequestData) => putUserProfile(data),
    onSuccess: (updatedUser) => {
      toast.success('프로필이 변경되었습니다')
      useUserStore.setState({ user: updatedUser })
    },
    onError: () => {
      toast.error('프로필 변경에 실패했습니다. 다시 시도해주세요')
    },
  })
}
