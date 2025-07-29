import { useMutation, useQueryClient } from '@tanstack/react-query'

import { useUserStore } from '@/entities/user/models/use-user-store'
import { friendQueryKeys } from '@/features/friends/model'
import { devLog } from '@/shared/utils/dev-log'

import { postSignin } from '../api/signin.API'

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
        devLog('error', '로그인 실패', '이메일 및 비밀번호를 확인하세요')
      } else {
        devLog('error', '로그인 실패', '알 수 없는 에러가 발생했습니다')
      }
    },
  })
}

export default useSigninMutation
