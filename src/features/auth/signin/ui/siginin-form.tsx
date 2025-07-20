import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { useCustomMutation } from '@/shared/hooks/use-custom-mutation'
import Button from '@/shared/ui/button/button.tsx'
import { Form, FormField, FormFieldWrapper, FormLabel } from '@/shared/ui/form'
import { Input, PasswordInput } from '@/shared/ui/input'
import Text from '@/shared/ui/text/text'
import { cn } from '@/shared/utils'

import { postSignin } from '../api/signin.API'
import { SigninSchema } from '../model/signin.schema'

import type { SigninFormDataType } from '../model/signin.type'

export default function SigninForm() {
  const methods = useForm<SigninFormDataType>({
    resolver: zodResolver(SigninSchema),
    mode: 'onChange', // NOTE: 'onChange' 과 'onSubmit'중에 어떤게 나을지
  })

  const {
    formState: { isValid, isSubmitting },
  } = methods

  const signinMutation = useCustomMutation((data: SigninFormDataType) => postSignin(data))

  const handleSubmit = (data: SigninFormDataType) => {
    signinMutation.mutate(data)
  }

  return (
    <Form methods={methods} onSubmit={handleSubmit}>
      <FormFieldWrapper>
        <FormField name="email">
          <FormLabel>이메일</FormLabel>
          <Input placeholder="이메일을 입력하세요" />
        </FormField>
        <FormField name="password">
          <FormLabel>비밀번호</FormLabel>
          <PasswordInput mode="password" />
        </FormField>
      </FormFieldWrapper>
      <Button type="submit" intent="solid" className="w-full" disabled={!isValid || isSubmitting}>
        로그인
      </Button>

      {/* TODO 컴포넌트화
      NOTE 모달 어떻게 열지 */}
      <Text typography="b2-normal" className={cn('text-gray-80 flex gap-1 items-center justify-center mt-6')}>
        <span>캘픽이 처음이신가요?</span>
        <Text
          typography="b2-heading"
          className={cn(
            'text-primary-80 underline decoration-solid decoration-2 decoration-skip-ink underline-offset-4',
          )}
        >
          회원가입
        </Text>
      </Text>
    </Form>
  )
}
