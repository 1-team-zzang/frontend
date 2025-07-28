import { useState, type FormEventHandler } from 'react'

import Button from '@/shared/ui/button/button.tsx'
import { Modal, ModalCloseButton, ModalContent, ModalOverlay, ModalPortal, ModalTrigger } from '@/shared/ui/modal'
import Text from '@/shared/ui/text/text'

interface Props {
  onAccept: () => void
}

export default function AppointmentDetailAcceptButton({ onAccept }: Props) {
  const [isOpen, setIsOpen] = useState(false)

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault()
    onAccept()
    setIsOpen(false)
  }

  return (
    <Modal open={isOpen} onOpenChange={setIsOpen}>
      <ModalTrigger asChild>
        <button className="flex-1 py-3 bg-primary-50">
          <Text typography="b2-normal">수락</Text>
        </button>
      </ModalTrigger>
      <ModalPortal>
        <ModalOverlay />
        <ModalContent className="overflow-hidden text-center px-6 pb-12 w-[calc(100%-66px)]">
          <ModalCloseButton />
          <form onSubmit={handleSubmit}>
            <Text typography="h2-normal" className="pb-4">
              이 약속을 수락하고
              <br />내 캘린더에 추가할까요?
            </Text>

            <Button intent="solid" className="w-full absolute left-0 bottom-0 rounded-t-none" type="submit">
              확인
            </Button>
          </form>
        </ModalContent>
      </ModalPortal>
    </Modal>
  )
}
