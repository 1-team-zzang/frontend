import z from 'zod'

import type { SignupSchema } from './signup.schema'

export type SignupFormDataType = z.infer<typeof SignupSchema>
export type SignupInputData = Omit<SignupFormDataType, 'passwordConfirm'>

export interface SignupResponse {
  email: string
  name: string
}
