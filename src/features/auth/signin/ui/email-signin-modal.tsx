import { ModalContent, ModalOverlay, ModalPortal, Modal, ModalTitle, Text } from '@/shared/ui'

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

          {/* TODO 컴포넌트화
            NOTE 모달 어떻게 열지 */}
          <Text typography="b2-normal" className="text-gray-80 flex gap-1 items-center justify-center mt-6">
            <span>캘픽이 처음이신가요?</span>
            <Text
              as="button"
              typography="b2-heading"
              onClick={() => setSwitchModal('Signup')}
              className="text-primary-80 underline decoration-solid decoration-2 decoration-skip-ink underline-offset-4"
            >
              회원가입
            </Text>
          </Text>
        </ModalContent>
      </ModalPortal>
    </Modal>
  )
}
