import { Modal, ModalContent, ModalOverlay, ModalPortal, Text } from '@/shared/ui'

import useDeleteSchedule from '../hooks/use-delete-schedule'

interface Props {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
  scheduleId: number | null
}

export default function DeleteConfirmModal({ isOpen, setIsOpen, scheduleId }: Props) {
  const { deleteScheduleMutate } = useDeleteSchedule()
  const onDeleteClick = () => {
    if (scheduleId) {
      deleteScheduleMutate(scheduleId)
      setIsOpen(false)
    }
    return
  }
  return (
    <Modal open={isOpen} defaultOpen={false} onOpenChange={setIsOpen}>
      <ModalPortal>
        <ModalOverlay />
        <ModalContent className="flex flex-col items-center justify-between px-4 pt-6 pb-4 overflow-hidden">
          <div className="pb-16 text-center space-y-4">
            <Text typography="h2-heading">일정을 삭제할까요?</Text>
            <Text typography="b1-normal">확인을 누르면 일정이 삭제됩니다</Text>
          </div>

          <div className="w-full h-[3.125em] flex absolute bottom-0 ">
            <button
              onClick={() => setIsOpen(false)}
              className="w-full bg-gray-80 text-white cursor-pointer hover:bg-gray-90"
            >
              취소
            </button>
            <button onClick={onDeleteClick} className="w-full bg-primary-50 cursor-pointer hover:bg-primary-60">
              확인
            </button>
          </div>
        </ModalContent>
      </ModalPortal>
    </Modal>
  )
}
