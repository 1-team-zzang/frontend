import { ModalContent, ModalOverlay, ModalPortal, ModalRoot, ModalTitle, ModalTrigger } from '@/shared/ui/modal'

import SigninForm from './signin-form'

import type { Dispatch, ReactNode, SetStateAction } from 'react'

interface Props {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
  trigger: ReactNode
}

export default function EmailSigninModal({ isOpen, setIsOpen, trigger }: Props) {
  return (
    <ModalRoot defaultOpen={isOpen} onOpenChange={setIsOpen}>
      <ModalTrigger>{trigger}</ModalTrigger>
      <ModalPortal>
        <ModalOverlay />
        <ModalContent>
          <ModalTitle className="text-center">로그인</ModalTitle>
          <SigninForm />
        </ModalContent>
      </ModalPortal>
    </ModalRoot>
  )
}
