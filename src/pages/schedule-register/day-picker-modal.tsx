import { type Dispatch, type SetStateAction } from 'react'

import { Modal, ModalPortal, ModalOverlay, ModalContent } from '@/shared/ui/modal'

interface Props {
  isDayOpen: boolean
  setIsDayOpen: Dispatch<SetStateAction<boolean>>
}

export default function DayPickerModal({ isDayOpen, setIsDayOpen }: Props) {
  return (
    <Modal open={isDayOpen} defaultOpen={false} onOpenChange={setIsDayOpen}>
      <ModalPortal>
        <ModalOverlay />
        <ModalContent>ss</ModalContent>
      </ModalPortal>
    </Modal>
  )
}
