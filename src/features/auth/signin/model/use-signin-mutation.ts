import { useMutation } from '@tanstack/react-query'

import { useUserStore } from '@/entities/user/models/use-user-store'
import { devLog } from '@/shared/utils/dev-log'

import { postSignin } from '../api/signin.API'

import type { SigninFormDataType } from './signin.type'

function useSigninMutation() {
  const setUser = useUserStore((state) => state.setUser)

  return useMutation({
    mutationFn: (data: SigninFormDataType) => postSignin(data),
    onSuccess: (res) => {
      setUser(res)
    },
    onError: (error) => {
      devLog('error', '로그인 에러', error.message)
    },
  })
}

export default useSigninMutation
