import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { useCustomMutation } from '@/shared/hooks/use-custom-mutation'
import Button from '@/shared/ui/button/button.tsx'
import { Form, FormField, FormLabel } from '@/shared/ui/form'
import FormFieldWrapper from '@/shared/ui/form/form-field-wrapper'
import { Input, PasswordInput } from '@/shared/ui/input'
import Text from '@/shared/ui/text/text'

import { postSignup } from '../api/signup.API'
import { SignupSchema } from '../model/signup.schema'

import type { SignupFormDataType, SignupInputData } from '../model/signup.type'

export default function SignupForm() {
  const signupMutation = useCustomMutation((data: SignupInputData) => postSignup(data))

  const methods = useForm<SignupFormDataType>({
    resolver: zodResolver(SignupSchema),
    mode: 'onChange', // NOTE onChange로 할지 onSubmit으로 할지
  })

  const handleSubmit = (data: SignupFormDataType) => {
    const { email, name, password } = data // 회원가입 API 요청 데이터에는 비밀번호 확인 없음
    signupMutation.mutateAsync({ email, name, password })
  }

  return (
    <Form methods={methods} onSubmit={handleSubmit}>
      <FormFieldWrapper>
        <FormField name="email">
          <FormLabel>이메일</FormLabel>
          <Input placeholder="이메일을 입력해주세요" />
        </FormField>
        <FormField name="name">
          <FormLabel>닉네임</FormLabel>
          <Input placeholder="이름을 입력해주세요" />
        </FormField>
        <FormField name="password">
          <FormLabel>비밀번호</FormLabel>
          <PasswordInput mode="password" />
        </FormField>
        <FormField name="passwordConfirm">
          <FormLabel>비밀번호 확인</FormLabel>
          <PasswordInput mode="confirm" />
        </FormField>
      </FormFieldWrapper>
      <Button type="submit" intent="solid" disabled={!methods.formState.isValid} className="w-full">
        회원가입
      </Button>
      <Text typography="b2-normal" className="text-gray-80 flex gap-1 items-center justify-center mt-6">
        <span>이미 회원이신가요?</span>

        {/* TODO 컴포넌트화
          NOTE 모달 어떻게 열지 */}
        <Text
          typography="b2-heading"
          className="text-primary-80 underline decoration-solid decoration-2 decoration-skip-ink underline-offset-4"
        >
          로그인
        </Text>
      </Text>
    </Form>
  )
}
