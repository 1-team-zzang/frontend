import { useState, type Dispatch, type ReactNode, type SetStateAction } from 'react'

import { IconKakaoLogo } from '@/shared/assets/icons'
import { ModalContent, ModalOverlay, ModalPortal, ModalRoot, ModalTitle, ModalTrigger } from '@/shared/ui/modal'
import Text from '@/shared/ui/text/text'

import EmailSigninModal from './email-signin-modal'

interface Props {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
  trigger: ReactNode
}

export default function LoginSelectModal({ isOpen, setIsOpen, trigger }: Props) {
  const [isEmailModalOpen, setIsEmailModalOpen] = useState<boolean>(false)
  // NOTE 임시 상태이긴한데 현재 이 모달을 닫고 email 모달을 열려면 이렇게 상태관리를 하는게 맞을까요 ??

  return (
    <ModalRoot defaultOpen={isOpen} onOpenChange={setIsOpen}>
      <ModalTrigger>{trigger}</ModalTrigger>
      <ModalPortal>
        <ModalOverlay />
        <ModalContent>
          <ModalTitle className="text-center">캘픽 로그인</ModalTitle>
          <div className="flex flex-col gap-3 mt-8 mb-6">
            {/* TODO 카카오 로그인 onClick 추가 */}
            <Text
              as="button"
              typography="label"
              className="bg-[#FEE500] font-semibold flex gap-2 items-center justify-center w-full rounded-[0.25rem] py-2.5"
            >
              <IconKakaoLogo />
              카카오로그인
            </Text>
            <EmailSigninModal
              isOpen={isEmailModalOpen}
              setIsOpen={setIsEmailModalOpen}
              trigger={
                <Text
                  as="button"
                  typography="label"
                  className="bg-primary-5 font-semibold flex gap-2 items-center justify-center w-full rounded-[0.25rem] py-2.5"
                >
                  이메일 로그인
                </Text>
              }
            />
          </div>
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
    </ModalRoot>
  )
}
