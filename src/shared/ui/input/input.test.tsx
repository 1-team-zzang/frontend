import Input from './input'
import { describe, it, expect, afterEach } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { useForm } from 'react-hook-form'

function InputTest() {
  const { register, watch } = useForm()
  const emailValue = watch('email')
  return (
    <>
      <Input name="email" register={register} placeholder="이메일을 입력하세요" className="bg-blue-500" />
      <p>{emailValue}</p>
    </>
  )
}

describe('input 컴포넌트', () => {
  afterEach(cleanup)
  it('렌더링 확인', () => {
    render(<InputTest />)
    const input = screen.getByPlaceholderText('이메일을 입력하세요')
    expect(input).toBeInTheDocument()
  })
  it('input 입력값 확인', async () => {
    render(<InputTest />)
    const input = screen.getByPlaceholderText('이메일을 입력하세요')
    await userEvent.type(input, 'test@test.com')
    expect(input).toHaveValue('test@test.com')
  })
  it('class 적용 확인', () => {
    render(<InputTest />)
    const input = screen.getByPlaceholderText('이메일을 입력하세요')
    expect(input).toHaveClass('bg-blue-500')
  })
})
