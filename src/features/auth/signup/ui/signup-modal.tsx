import { ModalContent, ModalOverlay, ModalPortal, Modal, ModalTitle } from '@/shared/ui/modal'
import Text from '@/shared/ui/text/text'

import SignupForm from './signup-form'

import type { AuthModalType } from '../../signin/model/auth-modal.type'

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

            {/* TODO 컴포넌트화
          NOTE 모달 어떻게 열지 */}
            <Text
              as="button"
              typography="b2-heading"
              onClick={() => setSwitchModal('EmailLogin')}
              className="text-primary-80 underline decoration-solid decoration-2 decoration-skip-ink underline-offset-4"
            >
              로그인
            </Text>
          </Text>
        </ModalContent>
      </ModalPortal>
    </Modal>
  )
}
