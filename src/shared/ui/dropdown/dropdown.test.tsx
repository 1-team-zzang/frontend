import { cleanup, render, screen } from '@testing-library/react'
import { describe, it, expect, afterEach } from 'vitest'
import userEvent from '@testing-library/user-event'
import Dropdown from './dropdown-provider'

describe('드롭다운', () => {
  afterEach(cleanup)
  it('트리거 버튼 렌더링 확인', () => {
    render(
      <Dropdown>
        <Dropdown.Trigger>열기</Dropdown.Trigger>
        <Dropdown.Menu>
          <Dropdown.Item>목록1</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>,
    )
    expect(screen.getByRole('button')).toBeInTheDocument()
  })
  it('트리거 버튼 클릭시 메뉴가 나타난다', async () => {
    const user = userEvent.setup()
    render(
      <Dropdown>
        <Dropdown.Trigger>열기</Dropdown.Trigger>
        <Dropdown.Menu>
          <Dropdown.Item>목록1</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>,
    )
    await user.click(screen.getByRole('button'))
    expect(screen.getByText('목록1')).toBeInTheDocument()
  })
  it('목록 클릭시 메뉴가 닫힌다', async () => {
    const user = userEvent.setup()
    render(
      <Dropdown>
        <Dropdown.Trigger>열기</Dropdown.Trigger>
        <Dropdown.Menu>
          <Dropdown.Item>목록1</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>,
    )
    await user.click(screen.getByRole('button'))
    expect(screen.getByText('목록1')).toBeInTheDocument()
    await user.click(screen.getByText('목록1'))
    expect(screen.queryByText('목록1')).not.toBeInTheDocument()
  })
})
