import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router'

import { toast } from '@/shared/ui'

import { getAuthErrorMessage, type AuthErrorCode } from '../../model'
import { postSignup } from '../api'

import type { SignupInputData } from './signup.type'
import type { AxiosError } from 'axios'

function useSignupMutation() {
  const navigate = useNavigate()

  return useMutation({
    mutationFn: (data: SignupInputData) => postSignup(data),
    onSuccess: () => {
      toast.success('회원가입이 완료되었습니다')
      navigate('/auth/signin')
    },
    onError: (error: AxiosError<{ errorCode?: string }>) => {
      toast.error(getAuthErrorMessage(error?.response?.data?.errorCode as AuthErrorCode))
    },
    throwOnError: false,
  })
}

export default useSignupMutation
