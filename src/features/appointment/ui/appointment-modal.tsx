import { InvitePopup } from '@/shared/assets/icons'
import { Modal, ModalContent, ModalOverlay, ModalPortal, Text } from '@/shared/ui'

interface AppointmentModalProps {
  isOpen: boolean
  onOpenChange: (open: boolean) => void
  isLoggedIn: boolean
  onContinue: () => void
  onLoginSignup: () => void
}

export default function AppointmentModal({
  isOpen,
  onOpenChange,
  isLoggedIn,
  onContinue,
  onLoginSignup,
}: AppointmentModalProps) {
  // 로그인한 사용자는 모달을 보지 않음
  if (isLoggedIn) {
    return null
  }

  return (
    <Modal open={isOpen} onOpenChange={onOpenChange}>
      <ModalPortal>
        <ModalOverlay />
        <ModalContent className="flex flex-col w-[19.375rem] sm:w-[19.375rem] rounded-xl p-0 overflow-hidden">
          <InvitePopup />
          <div className="flex">
            <button className="flex-1 py-3 bg-gray-80 text-white" onClick={onContinue}>
              <Text typography="b2-normal">계속 진행</Text>
            </button>
            <button className="flex-1 py-3 bg-primary-50 text-gray-95" onClick={onLoginSignup}>
              <Text typography="b2-normal">로그인/가입</Text>
            </button>
          </div>
        </ModalContent>
      </ModalPortal>
    </Modal>
  )
}
