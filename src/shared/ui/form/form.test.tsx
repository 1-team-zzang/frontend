import { zodResolver } from '@hookform/resolvers/zod'
import { cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, vi, expect, afterEach, beforeEach } from 'vitest'
import z from 'zod'

import Form from './form'
import FormField from './form-field'
import FormInput from './form-input'
import FormSubmit from './form-submit'

const TestSchema = z.object({
  email: z.string().email({ message: '이메일 형식으로 입력해주세요' }),
  password: z.string().min(8, { message: '비밀번호는 8자 이상 입력해주세요' }),
})

const handleSubmitMock = vi.fn()

function TestForm() {
  return (
    <Form resolver={zodResolver(TestSchema)} onSubmit={handleSubmitMock}>
      <FormField name="email" label="이메일">
        <FormInput name="email" />
      </FormField>
      <FormField name="password" label="패스워드">
        <FormInput name="password" />
      </FormField>
      <FormSubmit>제출</FormSubmit>
    </Form>
  )
}

describe('폼 컴포넌트', () => {
  afterEach(() => {
    cleanup()
  })
  beforeEach(() => {
    handleSubmitMock.mockClear()
  })

  // eslint-disable-next-line space-before-function-paren
  it('submit 이벤트로 올바른 값이 전달 되는지 테스트', async () => {
    const email = 'test@naver.com'
    const password = '12341234'

    render(<TestForm />)

    const emailInput = screen.getByLabelText(/이메일/)
    const pwdInput = screen.getByLabelText(/패스워드/)
    const submitBtn = screen.getByRole('button', { name: '제출' })

    await userEvent.type(emailInput, email)
    await userEvent.type(pwdInput, password)
    await userEvent.click(submitBtn)

    expect(handleSubmitMock).toHaveBeenCalled()
    expect(handleSubmitMock).toHaveBeenCalledWith(expect.objectContaining({ email, password }), expect.anything())
  })

  // eslint-disable-next-line space-before-function-paren
  it('input을 입력하지않았을때 올바르게 유효성 검사가 되는지 테스트', async () => {
    render(<TestForm />)

    const submitBtn = screen.getByRole('button', { name: '제출' })

    await userEvent.click(submitBtn)

    expect(await screen.findByText('이메일 형식으로 입력해주세요')).toBeInTheDocument()
    expect(await screen.findByText('비밀번호는 8자 이상 입력해주세요')).toBeInTheDocument()

    expect(handleSubmitMock).not.toHaveBeenCalled()
  })

  it('초기값이 폼 필드에 제대로 반영되는지 테스트', () => {
    const initialValues = {
      email: 'init@example.com',
      password: 'initpass123',
    }

    render(
      <Form resolver={zodResolver(TestSchema)} onSubmit={handleSubmitMock} defaultValues={initialValues}>
        <FormField name="email" label="이메일">
          <FormInput name="email" />
        </FormField>
        <FormField name="password" label="패스워드">
          <FormInput name="password" />
        </FormField>
        <FormSubmit>제출</FormSubmit>
      </Form>,
    )

    expect(screen.getByLabelText(/이메일/)).toHaveValue(initialValues.email)
    expect(screen.getByLabelText(/패스워드/)).toHaveValue(initialValues.password)
  })
})
