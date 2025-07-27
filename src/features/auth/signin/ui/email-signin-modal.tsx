import { ErrorBoundary } from 'react-error-boundary'

import { ModalContent, ModalOverlay, ModalPortal, Modal, ModalTitle } from '@/shared/ui/modal'
import Text from '@/shared/ui/text/text'
import { devLog } from '@/shared/utils/dev-log'

import { getAuthErrorMessage } from '../../model/get-auth-error-message'

import SigninForm from './signin-form'

import type { AuthModalType } from '../model/auth-modal.type'

interface Props {
  isOpen: boolean
  setSwitchModal: (open: AuthModalType) => void
  setClose: (open: boolean) => void
}

export default function EmailSigninModal({ isOpen, setSwitchModal, setClose }: Props) {
  return (
    <ErrorBoundary
      fallbackRender={({ error }) => {
        // TODO 에러 문구를 토스트로
        // NOTE 근데 비밀번호 틀리면 401 권한없음 에러가 온다 이게맞나?
        devLog('log', 'error', getAuthErrorMessage(error.response.data.errorCode))

        return null
      }}
    >
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
    </ErrorBoundary>
  )
}
