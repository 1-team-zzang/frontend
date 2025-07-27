import {
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalDescription,
  ModalOverlay,
  ModalPortal,
  ModalTitle,
} from '../../modal'

interface Props {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

export default function PrivateScheduleModal({ isOpen, setIsOpen }: Props) {
  return (
    <Modal open={isOpen} defaultOpen={false} onOpenChange={setIsOpen}>
      <ModalPortal>
        <ModalOverlay />
        <ModalContent className="flex flex-col items-center justify-center gap-4">
          <ModalTitle>비공개일정</ModalTitle>
          <ModalDescription>이 일정은 비공개 입니다</ModalDescription>
          <ModalCloseButton />
        </ModalContent>
      </ModalPortal>
    </Modal>
  )
}
