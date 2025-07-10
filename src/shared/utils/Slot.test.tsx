import { render, screen } from '@testing-library/react'
import { Link, MemoryRouter } from 'react-router'
import { beforeEach, describe, expect, it } from 'vitest'

import { Slot } from './Slot'
import { Slottable } from './Slottable'

import type { ButtonHTMLAttributes } from 'react'

export default function Button({
  asChild,
  children,
  ...restProps
}: ButtonHTMLAttributes<HTMLButtonElement> & { asChild?: boolean }) {
  const Component = asChild ? Slot : 'button'

  return (
    <Component {...restProps}>
      <Link to="/">{children}</Link>
    </Component>
  )
}

describe('Slot', () => {
  it('Slot 컴포넌트는 자식 태그를 그대로 렌더링 한다', () => {
    beforeEach(() => {
      render(
        <MemoryRouter>
          <Slot>
            <Link to="/test">Test Link</Link>
          </Slot>
        </MemoryRouter>,
      )

      const link = screen.getByRole('link')
      expect(link).toBeInTheDocument()
      expect(link.tagName).toBe('A')
      expect(link).toHaveAttribute('href', '/test')
    })
  })

  it('asChild 옵션을 사용했을 때 Link 태그가 제대로 렌더링되는지 테스트', () => {
    beforeEach(() => {
      render(
        <MemoryRouter>
          <Button asChild>
            <Link to="/">Link</Link>
          </Button>
        </MemoryRouter>,
      )

      const anchorElement = screen.getByRole('link')
      const buttonElement = screen.queryByRole('button')

      expect(buttonElement).not.toBeInTheDocument()
      expect(anchorElement).toBeInTheDocument()
      expect(anchorElement).toHaveAttribute('href', '/')
      expect(anchorElement).toHaveTextContent('Link')
    })
  })

  it('Slottable을 이용한 일부분 위임 테스트', () => {
    beforeEach(() => {
      render(
        <Slot>
          <div>오른쪽 컴포넌트</div>
          <Slottable>
            <span>Slottable</span>
          </Slottable>
          <div>왼쪽 컴포넌트</div>
        </Slot>,
      )

      const slottable = screen.getByText('Slottable')
      const leftComponent = screen.getByText('왼쪽 컴포넌트')
      const rightComponent = screen.getByText('오른쪽 컴포넌트')

      expect(slottable).toBeInTheDocument()
      expect(leftComponent).toBeInTheDocument()
      expect(rightComponent).toBeInTheDocument()

      expect(slottable.tagName).toBe('SPAN')

      const parent = slottable.parentElement!
      const children = Array.from(parent.childNodes).filter((node) => node.nodeType === 1)

      expect(children[0]).toBe(rightComponent)
      expect(children[1]).toBe(slottable)
      expect(children[2]).toBe(leftComponent)
    })
  })
})
