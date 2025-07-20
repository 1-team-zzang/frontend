import z from 'zod'

export const SigninSchema = z.object({
  email: z.string().email({ message: '이메일 형식으로 입력해주세요' }),
  password: z.string().min(8, { message: '비밀번호를 입력해주세요' }),
})

// export const SigninSchema = BaseSignupSchema.pick({ email: true, password: true })

// NOTE 위에 방식처럼 각자 선언할지
// 아래 주석처럼 기존에 선언한 스키마를 토대로 pick해서 사용할지
