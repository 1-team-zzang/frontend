import { cleanup, render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { useState, type ComponentType } from 'react'
import { afterEach, describe, expect, it } from 'vitest'

import {
  ModalRoot,
  ModalTrigger,
  ModalPortal,
  ModalOverlay,
  ModalContent,
  ModalTitle,
  ModalDescription,
  ModalCloseButton,
} from './index'

function Modal(isOpen?: boolean, onOpenChange?: (open: boolean) => void) {
  return (
    <ModalRoot defaultOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalTrigger>Open Modal</ModalTrigger>
      <ModalPortal>
        <ModalOverlay />
        <ModalContent>
          <ModalTitle>Title</ModalTitle>
          <ModalDescription>Description</ModalDescription>
          <ModalCloseButton />
        </ModalContent>
      </ModalPortal>
    </ModalRoot>
  )
}

async function testModalOpenAndClose(ModalComponent: ComponentType) {
  const event = userEvent.setup()

  render(<ModalComponent />)

  const triggerButton = screen.getByText('Open Modal')
  await event.click(triggerButton)

  expect(screen.getByText('Title')).toBeInTheDocument()
  expect(screen.getByText('Description')).toBeInTheDocument()

  const modal = screen.getByText('Description')
  expect(modal).toBeInTheDocument()

  const closeButton = screen.getByRole('button', { name: 'Close modal' })
  await event.click(closeButton)

  expect(screen.queryByText('Title')).not.toBeInTheDocument()
  expect(screen.queryByText('Description')).not.toBeInTheDocument()
}

function DefaultModal({ isOpen, onOpenChange }: { isOpen?: boolean; onOpenChange?: (open: boolean) => void }) {
  return Modal(isOpen, onOpenChange)
}

function ExternalStateModal() {
  const [isOpen, setIsOpen] = useState(false)
  return Modal(isOpen, setIsOpen)
}

describe('ModalRoot', () => {
  afterEach(cleanup)

  it('트러거 버튼과 닫기 버튼을 클릭하여 모달을 열고 닫는 테스트', async () => {
    await testModalOpenAndClose(DefaultModal)
  })

  it('모달 외부 상태 주입 시 동작 테스트', async () => {
    await testModalOpenAndClose(ExternalStateModal)
  })

  it('오버레이 클릭 시 모달 닫힘 테스트', async () => {
    const event = userEvent.setup()

    render(<DefaultModal />)

    const triggerButton = screen.getByText('Open Modal')
    await event.click(triggerButton)

    const overlay = screen.getByLabelText('Overlay')
    await event.click(overlay)

    expect(screen.queryByText('Title')).not.toBeInTheDocument()
  })

  it('오버레이 키보드 동작으로 모달 닫힘 테스트', async () => {
    const event = userEvent.setup()

    render(<DefaultModal />)

    const triggerButton = screen.getByText('Open Modal')
    await event.click(triggerButton)

    await event.keyboard('{Escape}')

    expect(screen.queryByText('Title')).not.toBeInTheDocument()
  })
})
