import { zodResolver } from '@hookform/resolvers/zod'
import { cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { useForm } from 'react-hook-form'
import { describe, it, expect, afterEach, beforeEach, vi } from 'vitest'
import z from 'zod'

import { Form } from '../form'

import Input from './input'
import PasswordInput from './password-input'

function TestInput() {
  const TestSchema = z.object({
    email: z.string().email({ message: '이메일 형식으로 입력하세요' }),
    password: z.string(),
  })

  const handleSubmit = vi.fn()

  type TestType = z.infer<typeof TestSchema>

  const methods = useForm<TestType>({
    resolver: zodResolver(TestSchema),
    mode: 'onChange',
  })

  return (
    <Form methods={methods} onSubmit={handleSubmit}>
      <Input name="email" placeholder="이메일을 입력해주세요" />
      <PasswordInput name="password" />
    </Form>
  )
}

describe('Input 컴포넌트', () => {
  afterEach(() => {
    cleanup()
  })
  beforeEach(() => {})

  it('정상적으로 렌더링 되는지 테스트', async () => {
    render(<TestInput />)

    const input = screen.getByPlaceholderText(/이메일/)

    expect(input).toBeInTheDocument()
  })

  it('입력할 경우에 input에 해당 value를 가지고 있는지 테스트', async () => {
    const user = userEvent.setup()
    const data = 'test'

    render(<TestInput />)

    const input = screen.getByPlaceholderText(/이메일/)

    expect(input).not.toHaveValue(data)

    await user.type(input, data)

    expect(input).toHaveValue(data)
  })
})

describe('PasswordInput 컴포넌트', () => {
  afterEach(() => {
    cleanup()
  })
  beforeEach(() => {})

  it('처음에 렌더링 할 경우에 password 타입인지 테스트', async () => {
    render(<TestInput />)

    const input = screen.getByPlaceholderText(/비밀번호/)

    expect(input).toHaveProperty('type', 'password')
  })

  it('토글 버튼을 누를 경우 text 타입인지 테스트', async () => {
    const user = userEvent.setup()
    render(<TestInput />)

    const input = screen.getByPlaceholderText(/비밀번호/)

    const toggleButton = screen.getByRole('button', { name: /비밀번호/ })

    await user.click(toggleButton)

    expect(input).not.toHaveProperty('type', 'password')
    expect(input).toHaveProperty('type', 'text')
  })
})
