import z from 'zod'

import { SigninSchema } from './signin.schema'

export type SigninFormDataType = z.infer<typeof SigninSchema>
