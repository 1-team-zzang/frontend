import { ModalContent, ModalOverlay, ModalPortal, ModalRoot, ModalTitle, ModalTrigger } from '@/shared/ui/modal'

import SignupForm from './signup-form'

import type { Dispatch, ReactNode, SetStateAction } from 'react'

interface Props {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
  trigger: ReactNode
}

export default function SignupModal({ isOpen, setIsOpen, trigger }: Props) {
  return (
    <ModalRoot defaultOpen={isOpen} onOpenChange={setIsOpen}>
      <ModalTrigger>{trigger}</ModalTrigger>
      <ModalPortal>
        <ModalOverlay />
        <ModalContent>
          <ModalTitle className="text-center">회원가입</ModalTitle>
          <SignupForm />
        </ModalContent>
      </ModalPortal>
    </ModalRoot>
  )
}
