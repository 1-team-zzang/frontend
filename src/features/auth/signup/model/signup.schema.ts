import z from 'zod'

export const BaseSignupSchema = z.object({
  email: z.string().email({ message: '이메일 형식으로 입력해주세요' }),
  name: z.string().trim().min(1, { message: '이름을 입력해주세요' }),
  password: z.string().min(8, { message: '비밀번호를 8자 이상 입력해주세요' }),
  passwordConfirm: z.string(),
})

export const SignupSchema = BaseSignupSchema.superRefine(({ password, passwordConfirm }, ctx) => {
  if (password !== passwordConfirm) {
    ctx.addIssue({
      code: 'custom',
      message: '비밀번호가 일치하지 않습니다',
      path: ['passwordConfirm'],
    })
  }
})
