import { useMutation } from '@tanstack/react-query'

import { toast } from '@/shared/ui/toast'

import { getAuthErrorMessage } from '../../model/get-auth-error-message'
import { postSignup } from '../api/signup.API'

import type { SignupInputData } from './signup.type'
import type { AuthErrorCode } from '../../model/auth-error-messages'
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
