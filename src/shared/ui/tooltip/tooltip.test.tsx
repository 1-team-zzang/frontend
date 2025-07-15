import { cleanup, render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { afterEach, describe, it, expect } from 'vitest'

import Tooltip from './tooltip'
import TooltipMessage from './tooltip-message'
import TooltipTrigger from './tooltip-trigger'

function TestTooltip() {
  return (
    <Tooltip>
      <TooltipTrigger>?</TooltipTrigger>
      <TooltipMessage>툴팁 테스트 메시지</TooltipMessage>
    </Tooltip>
  )
}

describe('틀팁 메시지', () => {
  afterEach(cleanup)

  it('trigger에 이벤트가 없을때 메시지 미출력 테스트', async () => {
    render(<TestTooltip />)

    expect(screen.queryByText('툴팁 테스트 메시지')).not.toBeInTheDocument()
  })

  it('trigger에 Hover시 메시지 출력 테스트', async () => {
    const user = userEvent.setup()

    render(<TestTooltip />)

    const trigger = screen.getByRole('button', { name: '?' })
    await user.hover(trigger)

    expect(screen.getByText('툴팁 테스트 메시지')).toBeInTheDocument()
  })
})
