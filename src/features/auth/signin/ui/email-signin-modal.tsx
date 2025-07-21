import { ModalContent, ModalOverlay, ModalPortal, Modal, ModalTitle, ModalTrigger } from '@/shared/ui/modal'
import Text from '@/shared/ui/text/text'

import SigninForm from './signin-form'

import type { Dispatch, ReactNode, SetStateAction } from 'react'

interface Props {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
  trigger: ReactNode
}

export default function EmailSigninModal({ isOpen, setIsOpen, trigger }: Props) {
  return (
    <Modal open={isOpen} onOpenChange={setIsOpen}>
      <ModalTrigger>{trigger}</ModalTrigger>
      <ModalPortal>
        <ModalOverlay />
        <ModalContent>
          <ModalTitle className="text-center">로그인</ModalTitle>
          <SigninForm />
          {/* TODO 컴포넌트화
            NOTE 모달 어떻게 열지 */}
          <Text typography="b2-normal" className="text-gray-80 flex gap-1 items-center justify-center mt-6">
            <span>캘픽이 처음이신가요?</span>
            <Text
              typography="b2-heading"
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
