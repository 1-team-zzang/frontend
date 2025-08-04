import Button from '../../button/button.tsx'
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
        <ModalContent className=" flex flex-col items-center justify-center gap-4  overflow-hidden">
          <ModalTitle>비공개일정</ModalTitle>
          <ModalDescription className="text-center mb-10">
            이 일정은 비공개일정 입니다
            <br />
            비공개 일정의 세부내용은 확인 할 수 없습니다.
          </ModalDescription>

          <ModalCloseButton />
          <Button onClick={() => setIsOpen(false)} className="w-full absolute bottom-0 cursor-pointer">
            닫기
          </Button>
        </ModalContent>
      </ModalPortal>
    </Modal>
  )
}
