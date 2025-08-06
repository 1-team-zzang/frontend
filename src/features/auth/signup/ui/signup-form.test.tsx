import { render, screen, fireEvent, waitFor, cleanup } from '@testing-library/react'
import { vi, expect, describe, it, afterEach } from 'vitest'

import SignupForm from './signup-form'

// 🔧 실제 mutation을 mock
vi.mock('../model', async (original) => {
  const actual = await original<typeof import('../model')>()
  return {
    ...actual,
    useSignupMutation: () => ({
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      mutateAsync: (_data: any, { onSuccess }: { onSuccess?: () => void }) => {
        if (onSuccess) {
          onSuccess()
        }
        return Promise.resolve()
      },

      mutate: vi.fn().mockResolvedValue(undefined),
    }),
  }
})

describe('SignupForm', () => {
  afterEach(() => {
    cleanup()
  })
  it('모든 입력 필드와 버튼이 렌더링되어야 함', () => {
    render(<SignupForm />)

    expect(screen.getByPlaceholderText('이메일을 입력해주세요')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('이름을 입력해주세요')).toBeInTheDocument()
    expect(screen.getAllByLabelText('비밀번호').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('회원가입')).toBeDisabled()
  })

  it('유효한 값 입력 시 버튼이 활성화되고, 제출 시 onSignupSuccess 호출', async () => {
    const onSignupSuccess = vi.fn()

    render(<SignupForm onSignupSuccess={onSignupSuccess} />)

    const emailInput = screen.getByPlaceholderText('이메일을 입력해주세요')
    const nameInput = screen.getByPlaceholderText('이름을 입력해주세요')
    const passwordInput = screen.getByTestId('password-input')
    const confirmInput = screen.getByTestId('password-confirm-input')
    const submitButton = screen.getByRole('button', { name: '회원가입' })

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } })
    fireEvent.change(nameInput, { target: { value: '테스트' } })
    fireEvent.change(passwordInput, { target: { value: 'password123!' } })
    fireEvent.change(confirmInput, { target: { value: 'password123!' } })

    await waitFor(() => {
      expect(submitButton).not.toBeDisabled()
    })

    fireEvent.click(submitButton)

    await waitFor(() => {
      expect(onSignupSuccess).toHaveBeenCalled()
    })
  })

  it('값을 입력하지 않으면 버튼 비활성화', async () => {
    render(<SignupForm />)

    const submitButton = screen.getByRole('button', { name: '회원가입' })

    expect(submitButton).toBeDisabled()
  })
  it('이메일을 잘못 입력하면 "이메일 형식으로 입력해주세요" 라는 에러 메시지 확인', async () => {
    render(<SignupForm />)

    const emailInput = screen.getByPlaceholderText('이메일을 입력해주세요')
    const nameInput = screen.getByPlaceholderText('이름을 입력해주세요')
    const passwordInput = screen.getByTestId('password-input')
    const confirmInput = screen.getByTestId('password-confirm-input')

    fireEvent.change(emailInput, { target: { value: 'test' } })
    fireEvent.change(nameInput, { target: { value: '테스트' } })
    fireEvent.change(passwordInput, { target: { value: 'password123!' } })
    fireEvent.change(confirmInput, { target: { value: 'password123!' } })

    const errorMessage = await screen.findByText('이메일 형식으로 입력해주세요')

    expect(errorMessage).toBeInTheDocument()
  })
  it('이름을 입력하지 않으면 "이름을 입력해주세요" 에러 메시지 확인', async () => {
    render(<SignupForm />)

    const emailInput = screen.getByPlaceholderText('이메일을 입력해주세요')
    const nameInput = screen.getByPlaceholderText('이름을 입력해주세요')
    const passwordInput = screen.getByTestId('password-input')
    const confirmInput = screen.getByTestId('password-confirm-input')

    fireEvent.change(emailInput, { target: { value: 'test' } })
    fireEvent.change(nameInput, { target: { value: ' ' } })
    fireEvent.change(passwordInput, { target: { value: 'password123!' } })
    fireEvent.change(confirmInput, { target: { value: 'password123!' } })

    const errorMessage = await screen.findByText('이름을 입력해주세요')

    expect(errorMessage).toBeInTheDocument()
  })
  it('비밀번호를 8자 이상 입력하지 않으면 "비밀번호를 8자 이상 입력해주세요" 에러 메시지 확인', async () => {
    render(<SignupForm />)

    const emailInput = screen.getByPlaceholderText('이메일을 입력해주세요')
    const nameInput = screen.getByPlaceholderText('이름을 입력해주세요')
    const passwordInput = screen.getByTestId('password-input')
    const confirmInput = screen.getByTestId('password-confirm-input')

    fireEvent.change(emailInput, { target: { value: 'test' } })
    fireEvent.change(nameInput, { target: { value: '테스트이름' } })
    fireEvent.change(passwordInput, { target: { value: 'pass' } })
    fireEvent.change(confirmInput, { target: { value: 'pass' } })

    const errorMessage = await screen.findByText('비밀번호를 8자 이상 입력해주세요')

    expect(errorMessage).toBeInTheDocument()
  })
  it('비밀번호 확인이 비밀번호와 일치하지 않으면 "비밀번호가 일치하지 않습니다" 에러 메시지 확인', async () => {
    render(<SignupForm />)

    const emailInput = screen.getByPlaceholderText('이메일을 입력해주세요')
    const nameInput = screen.getByPlaceholderText('이름을 입력해주세요')
    const passwordInput = screen.getByTestId('password-input')
    const confirmInput = screen.getByTestId('password-confirm-input')

    fireEvent.change(emailInput, { target: { value: 'test' } })
    fireEvent.change(nameInput, { target: { value: '테스트이름' } })
    fireEvent.change(passwordInput, { target: { value: 'password1234' } })
    fireEvent.change(confirmInput, { target: { value: 'password123' } })

    const errorMessage = await screen.findByText('비밀번호가 일치하지 않습니다')

    expect(errorMessage).toBeInTheDocument()
  })
})
