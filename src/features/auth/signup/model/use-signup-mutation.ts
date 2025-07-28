import { useMutation } from '@tanstack/react-query'

import { devLog } from '@/shared/utils/dev-log'

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
      devLog('log', 'error', getAuthErrorMessage(error?.response?.data?.errorCode as AuthErrorCode))
    },
  })
}

export default useSignupMutation
