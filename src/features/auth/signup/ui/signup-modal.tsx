import { ModalContent, ModalOverlay, ModalPortal, Modal, ModalTitle } from '@/shared/ui'

import { PromptSwitch } from '../../ui'

import SignupForm from './signup-form'

import type { AuthModalType } from '../../types'

interface Props {
  isSignupOpen: boolean
  setSwitchModal: (open: AuthModalType) => void
  setClose: (open: boolean) => void
}

export default function SignupModal({ isSignupOpen, setSwitchModal, setClose }: Props) {
  return (
    <Modal open={isSignupOpen} onOpenChange={setClose}>
      <ModalPortal>
        <ModalOverlay />
        <ModalContent>
          <ModalTitle className="text-center">회원가입</ModalTitle>
          <SignupForm onSignupSuccess={() => setSwitchModal('EmailLogin')} />

          <PromptSwitch type="signup" to="/auth/signin" className="mt-6" />
        </ModalContent>
      </ModalPortal>
    </Modal>
  )
}
