import { ModalContent, ModalOverlay, ModalPortal, Modal, ModalTitle, Text } from '@/shared/ui'

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

          <Text typography="b2-normal" className="text-gray-80 flex gap-1 items-center justify-center mt-6">
            <span>이미 회원이신가요?</span>

            <PromptSwitch type="signup" to="/auth/signin" className="mt-6" />
          </Text>
        </ModalContent>
      </ModalPortal>
    </Modal>
  )
}
