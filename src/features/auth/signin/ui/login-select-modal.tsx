import { ModalContent, ModalOverlay, ModalPortal, Modal, ModalTitle, Text } from '@/shared/ui'

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
