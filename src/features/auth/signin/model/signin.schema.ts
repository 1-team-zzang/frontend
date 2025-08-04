import z from 'zod'

export const SigninSchema = z.object({
  email: z.string().email({ message: '이메일 형식으로 입력해주세요' }),
  password: z.string().min(8, { message: '비밀번호를 8자 이상 입력해주세요' }),
})
