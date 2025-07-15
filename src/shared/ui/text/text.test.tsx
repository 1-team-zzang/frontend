import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'

import Text from './text'

describe('Text 컴포넌트 테스트', () => {
  afterEach(cleanup)

  it('title에 text-[2rem] 속성이 있는지 테스트', async () => {
    render(<Text typography="title-heading">title heading</Text>)

    const title = screen.getByText('title heading')

    expect(screen.queryByText('title heading')).toBeInTheDocument()
    expect(title).toHaveClass('text-[2rem]')
  })

  it('Heading에 font-bold 속성이 있는지 테스트', async () => {
    render(<Text typography="title-heading">title heading</Text>)

    const title = screen.getByText('title heading')

    expect(screen.queryByText('title heading')).toBeInTheDocument()
    expect(title).toHaveClass('font-bold')
  })

  it('as prop을 넘기지 않으면 p 태그인지 테스트', async () => {
    render(<Text typography="title-heading">title heading</Text>)

    const title = screen.getByText('title heading')

    expect(title.tagName).toBe('P')
  })

  it('as prop을 h2를 넘기면 h2 태그인지 테스트', async () => {
    render(
      <Text typography="title-heading" as="h2">
        title heading
      </Text>,
    )

    const title = screen.getByText('title heading')

    expect(title.tagName).toBe('H2') // tagName은 항상 대문자 반환
  })
})
