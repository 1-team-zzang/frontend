// SigninForm.test.tsx
import { render, screen, waitFor, cleanup, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { vi, describe, it, afterEach, expect, beforeEach } from 'vitest'

import SigninForm from './signin-form'

// 목함수로 교체
vi.mock('../model', async (original) => {
  const actual = await original<typeof import('../model')>()
  return {
    ...actual,
    useSigninMutation: () => ({
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      mutate: (_data: any, { onSuccess }: { onSuccess?: () => void }) => {
        if (onSuccess) {
          onSuccess()
        }
        return Promise.resolve()
      },
    }),
  }
})

describe('SigninForm', () => {
  afterEach(() => {
    cleanup()
  })
  beforeEach(() => {
    cleanup()
  })

  it('모든 입력 필드와 버튼이 렌더링되어야 함', () => {
    render(<SigninForm />)

    expect(screen.getByLabelText('이메일')).toBeInTheDocument()
    expect(screen.getByLabelText('비밀번호')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('이메일을 입력하세요')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('비밀번호를 입력해주세요')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: '로그인' })).toBeDisabled()
  })

  it('값을 입력하지 않으면 버튼 비활성화', () => {
    render(<SigninForm />)

    const loginButton = screen.getByRole('button', { name: '로그인' })

    expect(loginButton).toBeDisabled()
  })

  it('유효한 값 입력 시 로그인 버튼 활성화 및 submit', async () => {
    const onSigninSuccess = vi.fn()
    render(<SigninForm onSigninSuccess={onSigninSuccess} />)

    const emailInput = screen.getByPlaceholderText('이메일을 입력하세요')
    const passwordInput = screen.getByPlaceholderText('비밀번호를 입력해주세요')
    const button = screen.getByRole('button', { name: '로그인' })

    fireEvent.change(emailInput, { target: { value: 'test1234@naver.com' } })
    fireEvent.change(passwordInput, { target: { value: 'password123!' } })

    await waitFor(() => {
      expect(button).toBeEnabled()
    })

    await userEvent.click(button)

    expect(onSigninSuccess).toHaveBeenCalled()
  })

  it('이메일을 잘못 입력하면 "이메일 형식으로 입력해주세요" 라는 에러 메시지 확인', async () => {
    render(<SigninForm />)

    const emailInput = screen.getByPlaceholderText('이메일을 입력하세요')
    const passwordInput = screen.getByPlaceholderText('비밀번호를 입력해주세요')

    fireEvent.change(emailInput, { target: { value: 'test' } })
    fireEvent.change(passwordInput, { target: { value: 'password123!' } })

    const errorMessage = await screen.findByText('이메일 형식으로 입력해주세요')

    expect(errorMessage).toBeInTheDocument()
  })

  it('이메일을 잘못 입력하면 "이메일 형식으로 입력해주세요" 라는 에러 메시지 확인', async () => {
    render(<SigninForm />)

    const emailInput = screen.getByPlaceholderText('이메일을 입력하세요')
    const passwordInput = screen.getByPlaceholderText('비밀번호를 입력해주세요')

    fireEvent.change(emailInput, { target: { value: 'test' } })
    fireEvent.change(passwordInput, { target: { value: 'password123!' } })

    const errorMessage = await screen.findByText('이메일 형식으로 입력해주세요')

    expect(errorMessage).toBeInTheDocument()
  })
})
