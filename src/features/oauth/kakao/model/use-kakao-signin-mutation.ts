import { useMutation } from '@tanstack/react-query'

import { useUserStore } from '@/entities/user'
import { toast } from '@/shared/ui'
import { devLog } from '@/shared/utils'

import { postKakaoLogin } from '../api'

function useKakaoSigninMutation() {
  return useMutation({
    mutationFn: (code: string) => postKakaoLogin(code),
    onSuccess: (data) => {
      useUserStore.setState({ user: data })
    },
    onError: (error) => {
      devLog('error', '카카오 로그인 에러', error)
      toast.error('카카오 로그인에 문제가 발생했습니다')
    },
  })
}

export default useKakaoSigninMutation
