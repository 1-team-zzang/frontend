import { useState } from 'react'

import { IconUserDelete } from '@/shared/assets'
import {
  Modal,
  ModalContent,
  ModalDescription,
  ModalOverlay,
  ModalPortal,
  ModalTitle,
  ModalTrigger,
  Button,
} from '@/shared/ui'

import { useFriendDeleteMutation } from '../model'

interface Props {
  name: string
  friendRequestId: number
}

export default function DeleteFriendModal({ name, friendRequestId }: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const handleClose = () => {
    setIsOpen(false)
  }

  const friendDeleteMutation = useFriendDeleteMutation()

  const handleDelete = () => {
    friendDeleteMutation.mutate(friendRequestId, {
      onSuccess: () => setIsOpen(false),
    })
  }
  return (
    <Modal open={isOpen} onOpenChange={setIsOpen}>
      <ModalTrigger>
        <IconUserDelete />
      </ModalTrigger>
      <ModalPortal>
        <ModalOverlay />
        <ModalContent className="text-center">
          <ModalTitle>친구 삭제</ModalTitle>
          <ModalDescription className="mt-2 mb-4">
            <b>{name}</b> 친구를 삭제하시겠습니까? <br />
            삭제하시면 친구의 캘린더를 확인할 수 없습니다.
          </ModalDescription>
          <div className="w-full flex gap-2">
            <Button intent="outlined" className="flex-1" onClick={handleClose}>
              취소
            </Button>
            <Button intent="solid" className="flex-1" onClick={handleDelete}>
              삭제
            </Button>
          </div>
        </ModalContent>
      </ModalPortal>
    </Modal>
  )
}
