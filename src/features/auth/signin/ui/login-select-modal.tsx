import { ModalContent, ModalOverlay, ModalPortal, Modal, ModalTitle, Text } from '@/shared/ui'

import { PromptSwitch } from '../../ui'

import type { AuthModalType } from '../../types'

interface Props {
  isOpen: boolean
  setSwitchModal: (open: AuthModalType) => void
  setClose: (open: boolean) => void
}

export default function LoginSelectModal({ isOpen, setSwitchModal, setClose }: Props) {
  return (
    <Modal open={isOpen} onOpenChange={setClose}>
      <ModalPortal>
        <ModalOverlay />
        <ModalContent>
          <ModalTitle className="text-center">캘픽 로그인</ModalTitle>
          <div className="flex flex-col gap-3 mt-8 mb-6">
            {/* TODO 카카오 로그인 onClick 추가 */}
            {/* <Text
              as="button"
              typography="label"
              className="bg-[#FEE500] font-semibold flex gap-2 items-center justify-center w-full rounded-[0.25rem] py-2.5"
            >
              <IconKakaoLogo />
              카카오로그인
            </Text> */}
            <Text
              as="button"
              typography="label"
              onClick={() => setSwitchModal('EmailLogin')}
              className="bg-primary-5 font-semibold flex gap-2 items-center justify-center w-full rounded-[0.25rem] py-2.5"
            >
              이메일 로그인
            </Text>
          </div>
          <PromptSwitch type="signin" to="/auth/signup" className="mt-6" />
        </ModalContent>
      </ModalPortal>
    </Modal>
  )
}
