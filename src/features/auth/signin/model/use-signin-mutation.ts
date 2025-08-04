import { useMutation, useQueryClient } from '@tanstack/react-query'

import { useUserStore } from '@/entities/user'
import { friendQueryKeys } from '@/features/friends/model'
import { toast } from '@/shared/ui'

import { postSignin } from '../api'

import type { SigninFormDataType } from './signin.type'
import type { AxiosError } from 'axios'

function useSigninMutation() {
  const setUser = useUserStore((state) => state.setUser)
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (data: SigninFormDataType) => postSignin(data),
    onSuccess: (res) => {
      setUser(res)
      queryClient.invalidateQueries({ queryKey: friendQueryKeys.all })
    },
    onError: (error: AxiosError) => {
      if (error?.status === 401) {
        toast.error('이메일 및 비밀번호를 확인해주세요')
      } else {
        toast.error('알 수 없는 에러가 발생했습니다')
      }
    },
    throwOnError: false,
  })
}

export default useSigninMutation
