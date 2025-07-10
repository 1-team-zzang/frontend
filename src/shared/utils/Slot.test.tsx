import { render, screen, cleanup } from '@testing-library/react'
import { Link, MemoryRouter } from 'react-router'
import { describe, expect, it, afterEach, beforeEach } from 'vitest'

import { Slot } from './Slot'
import { Slottable } from './Slottable'

import type { ButtonHTMLAttributes } from 'react'

export default function Button({
  asChild,
  children,
  ...restProps
}: ButtonHTMLAttributes<HTMLButtonElement> & { asChild?: boolean }) {
  const Element = asChild ? Slot : 'button'

  return (
    <Element {...restProps}>
      <Slottable>{children}</Slottable>
    </Element>
  )
}

describe('Slot', () => {
  afterEach(cleanup)

  describe('Slot 컴포넌트는 Slottable을 통해 자식 태그를 그대로 렌더링 한다', () => {
    beforeEach(() => {
      render(
        <MemoryRouter>
          <Slot>
            <Slottable>
              <Link to="/test">Test Link</Link>
            </Slottable>
          </Slot>
        </MemoryRouter>,
      )
    })

    it('Slottable을 사용하여 Link를 렌더링', () => {
      const link = screen.getByRole('link', { name: 'Test Link' })
      expect(link).toBeInTheDocument()
      expect(link.tagName).toBe('A')
      expect(link).toHaveAttribute('href', '/test')
      expect(link).toHaveTextContent('Test Link')
    })
  })

  describe('asChild 옵션을 사용했을 때 Link 태그가 제대로 렌더링되는지 테스트', () => {
    beforeEach(() => {
      render(
        <MemoryRouter>
          <Button asChild>
            <Link to="/">Link</Link>
          </Button>
        </MemoryRouter>,
      )
    })

    it('Link 태그가 제대로 렌더링되는지 테스트', () => {
      const anchorElement = screen.getByRole('link')
      const buttonElement = screen.queryByRole('button')

      expect(buttonElement).not.toBeInTheDocument()
      expect(anchorElement).toBeInTheDocument()
      expect(anchorElement).toHaveAttribute('href', '/')
      expect(anchorElement).toHaveTextContent('Link')
    })
  })

  describe('Slottable을 사용하여 일부분 위임 테스트', () => {
    beforeEach(() => {
      render(
        <Slot>
          <div>왼쪽 컴포넌트</div>
          <Slottable>
            <button type="button">
              <span>Slottable</span>
            </button>
          </Slottable>
          <div>오른쪽 컴포넌트</div>
        </Slot>,
      )
    })

    it('Slottable을 사용하여 일부분 위임 테스트', () => {
      const slottable = screen.getByText('Slottable')
      const leftComponent = screen.getByText('왼쪽 컴포넌트')
      const rightComponent = screen.getByText('오른쪽 컴포넌트')
      const button = screen.getByRole('button')

      const slotChildren = Array.from(button?.childNodes || []).filter((node) => node.nodeType === 1)

      expect(slotChildren[0]).toBe(leftComponent)
      expect(slotChildren[1]).toBe(slottable)
      expect(slotChildren[2]).toBe(rightComponent)
    })
  })
})
