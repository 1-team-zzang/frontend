import { useMutation } from '@tanstack/react-query'

import { toast } from '@/shared/ui'

import { getAuthErrorMessage, type AuthErrorCode } from '../../model'
import { postSignup } from '../api'

import type { SignupInputData } from './signup.type'
import type { AxiosError } from 'axios'

function useSignupMutation() {
  return useMutation({
    mutationFn: (data: SignupInputData) => postSignup(data),
    onSuccess: () => {},
    onError: (error: AxiosError<{ errorCode?: string }>) => {
      toast.error(getAuthErrorMessage(error?.response?.data?.errorCode as AuthErrorCode))
    },
    throwOnError: false,
  })
}

export default useSignupMutation
