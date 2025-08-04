import { Button, Modal, ModalContent, ModalDescription, ModalOverlay, ModalPortal, ModalTitle } from '@/shared/ui'

import { useWithdrawMutation } from '../model'

interface Props {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
}

export default function WithdrawModal({ isOpen, setIsOpen }: Props) {
  const withdrawMutation = useWithdrawMutation()
  const handleCancel = () => {
    setIsOpen(false)
  }

  const handleWithdraw = () => {
    withdrawMutation.mutateAsync()
  }
  return (
    <Modal open={isOpen} onOpenChange={setIsOpen}>
      <ModalPortal>
        <ModalOverlay />
        <ModalContent className="text-center">
          <ModalTitle>회원 탈퇴</ModalTitle>
          <ModalDescription className="mt-2 mb-4">
            탈퇴를 진행하시겠습니까?
            <br />
            탈퇴 시 일정과 약속 모두 삭제됩니다
          </ModalDescription>
          <div className="w-full flex gap-2">
            <Button intent="outlined" className="flex-1" onClick={handleCancel}>
              취소
            </Button>
            <Button intent="solid" className="flex-1" onClick={handleWithdraw}>
              탈퇴
            </Button>
          </div>
        </ModalContent>
      </ModalPortal>
    </Modal>
  )
}
