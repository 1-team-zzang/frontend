import { cleanup, render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { afterEach, describe, it, expect, vi } from 'vitest'

import FloatButton from './float-button'

const mockFn = vi.fn()

describe('floating button', () => {
  afterEach(cleanup)

  it('prop을 넘기지 않았을 때 기본 속성(rounded-full, size-12)을 가지고 있는지 테스트', () => {
    render(<FloatButton>test</FloatButton>)

    const floatButton = screen.getByRole('button', { name: 'test' })

    expect(floatButton).toHaveClass('rounded-full')
    expect(floatButton).toHaveClass('size-12')
  })

  it('shape prop에 square 값을 넣었을때 rounded-lg 속성을 가지고 있는지 테스트', () => {
    render(<FloatButton shape="square">test</FloatButton>)

    const floatButton = screen.getByRole('button', { name: 'test' })

    expect(floatButton).toHaveClass('rounded-lg')
  })

  it('size prop에 large 값을 넣었을때 size-16 속성을 가지고 있는지 테스트', () => {
    render(<FloatButton size="large">test</FloatButton>)

    const floatButton = screen.getByRole('button', { name: 'test' })

    expect(floatButton).toHaveClass('size-16')
  })

  it('플로팅 버튼을 클릭했을때 클릭 이벤트가 발생하는지 테스트', async () => {
    const user = userEvent.setup()

    render(<FloatButton onClick={mockFn}>test</FloatButton>)

    const floatButton = screen.getByRole('button', { name: 'test' })

    await user.click(floatButton)

    expect(mockFn).toHaveBeenCalled()
  })
})
