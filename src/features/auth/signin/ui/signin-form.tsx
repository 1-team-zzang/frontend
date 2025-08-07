import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { Form, FormField, FormFieldWrapper, FormLabel, Button, Input, PasswordInput } from '@/shared/ui'

import { SigninSchema, useSigninMutation, type SigninFormDataType } from '../model'

export default function SigninForm({ onSigninSuccess, isPage }: { onSigninSuccess?: () => void; isPage?: boolean }) {
  const methods = useForm<SigninFormDataType>({
    resolver: zodResolver(SigninSchema),
    mode: 'onChange',
  })

  const {
    formState: { isValid, isSubmitting },
  } = methods

  const signinMutation = useSigninMutation()

  const handleSubmit = (data: SigninFormDataType) => {
    signinMutation.mutate(data, {
      onSuccess: () => {
        if (onSigninSuccess) {
          onSigninSuccess()
        }
      },
    })
  }

  return (
    <Form methods={methods} onSubmit={handleSubmit}>
      <FormFieldWrapper isPage={isPage}>
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
    </Form>
  )
}
