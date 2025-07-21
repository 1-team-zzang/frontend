import { useState, type Dispatch, type ReactNode, type SetStateAction } from 'react'

import { ModalContent, ModalOverlay, ModalPortal, Modal, ModalTitle, ModalTrigger } from '@/shared/ui/modal'
import Text from '@/shared/ui/text/text'

import SignupForm from './signup-form'

interface Props {
  isSignupOpen: boolean
  setIsSignupOpen: Dispatch<SetStateAction<boolean>>
  trigger: ReactNode
}

export default function SignupModal({ isSignupOpen, setIsSignupOpen, trigger }: Props) {
  // eslint-disable-next-line unused-imports/no-unused-vars
  const [isSigninOpen, setIsSigninOpen] = useState<boolean>(false)

  return (
    <Modal open={isSignupOpen} onOpenChange={setIsSignupOpen}>
      <ModalTrigger>{trigger}</ModalTrigger>
      <ModalPortal>
        <ModalOverlay />
        <ModalContent>
          <ModalTitle className="text-center">회원가입</ModalTitle>
          <SignupForm />
        </ModalContent>
        <Text typography="b2-normal" className="text-gray-80 flex gap-1 items-center justify-center mt-6">
          <span>이미 회원이신가요?</span>

          {/* TODO 컴포넌트화
          NOTE 모달 어떻게 열지 */}
          <Text
            typography="b2-heading"
            className="text-primary-80 underline decoration-solid decoration-2 decoration-skip-ink underline-offset-4"
          >
            로그인
          </Text>
        </Text>
      </ModalPortal>
    </Modal>
  )
}
