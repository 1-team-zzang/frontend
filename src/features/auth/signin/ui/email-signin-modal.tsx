import { ModalContent, ModalOverlay, ModalPortal, Modal, ModalTitle } from '@/shared/ui'

import { PromptSwitch } from '../../ui'

import SigninForm from './signin-form'

import type { AuthModalType } from '../../types'

interface Props {
  isOpen: boolean
  setSwitchModal: (open: AuthModalType) => void
  setClose: (open: boolean) => void
}

export default function EmailSigninModal({ isOpen, setSwitchModal, setClose }: Props) {
  return (
    <Modal open={isOpen} onOpenChange={setClose}>
      <ModalPortal>
        <ModalOverlay />
        <ModalContent>
          <ModalTitle className="text-center">로그인</ModalTitle>
          <SigninForm onSigninSuccess={() => setSwitchModal(null)} />
          <PromptSwitch type="signin" to="/auth/signup" className="mt-6" />
        </ModalContent>
      </ModalPortal>
    </Modal>
  )
}
