import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'

import Button from './button.tsx'

describe('Button 컴포넌트', () => {
  it('children 확인', () => {
    render(<Button>children</Button>)
    expect(screen.getByText('children')).toBeInTheDocument()
  })

  it('onClick 테스트', async () => {
    const user = userEvent.setup()
    const handleClick = vi.fn()

    render(<Button onClick={handleClick}>click</Button>)
    await user.click(screen.getByText('click'))

    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('className 테스트', () => {
    const { container } = render(<Button className="w-full">버튼</Button>)
    expect(container.firstChild).toHaveClass('w-full')
  })

  it('variant 스타일 확인', () => {
    const { container } = render(
      <Button intent="solid" disabled={true}>
        버튼
      </Button>,
    )
    const button = container.firstChild

    expect(button).toHaveClass('text-base')
    expect(button).toHaveClass('bg-gray-20')
  })
})
