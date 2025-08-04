import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import z from 'zod'

import { Button, Form, FormField, FormLabel, PasswordInput } from '@/shared/ui'

import { usePasswordChangeMutation } from '../model'

const BasePasswordChangeSchema = z.object({
  currentPassword: z.string().min(8, '현재 비밀번호를 8자 이상 입력해주세요'),
  newPassword: z.string().min(8, '새 비밀번호를 8자 이상 입력해주세요'),
  newPasswordConfirm: z.string(),
})

const PasswordChangeSchema = BasePasswordChangeSchema.superRefine(({ newPassword, newPasswordConfirm }, ctx) => {
  if (newPassword !== newPasswordConfirm) {
    ctx.addIssue({
      code: 'custom',
      message: '새 비밀번호가 일치하지 않습니다.',
      path: ['newPasswordConfirm'],
    })
  }
})

type PasswordChangeFormType = z.infer<typeof PasswordChangeSchema>

export default function PasswordChangeForm() {
  const methods = useForm<PasswordChangeFormType>({
    mode: 'onTouched',
    resolver: zodResolver(PasswordChangeSchema),
  })

  const passwordChangeMutation = usePasswordChangeMutation()

  const handleSubmit = (data: PasswordChangeFormType) => {
    const { currentPassword, newPassword } = data
    passwordChangeMutation.mutateAsync({ currentPassword, newPassword })
  }

  return (
    <Form methods={methods} onSubmit={handleSubmit}>
      <FormField name="currentPassword">
        <FormLabel>현재 비밀번호 입력</FormLabel>
        <PasswordInput mode="password" />
      </FormField>
      <FormField name="newPassword">
        <FormLabel>새 비밀번호 입력</FormLabel>
        <PasswordInput mode="password" />
      </FormField>
      <FormField name="newPasswordConfirm">
        <FormLabel>새 비밀번호 확인</FormLabel>
        <PasswordInput mode="confirm" />
      </FormField>
      <Button type="submit" className="w-full mt-4">
        변경
      </Button>
    </Form>
  )
}
