import { useState } from 'react'

import { IconUserAdd } from '@/shared/assets'
import { Tooltip, TooltipMessage, TooltipTrigger } from '@/shared/ui'

import AddFriendBottomSheet from './add-friend-bottom-sheet'

export default function AddFriendButton() {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const handleClick = () => {
    setIsOpen((prev) => !prev)
  }
  return (
    <>
      <Tooltip>
        <TooltipTrigger onClick={handleClick}>
          <IconUserAdd />
        </TooltipTrigger>
        <TooltipMessage>친구 추가하기</TooltipMessage>
      </Tooltip>
      <AddFriendBottomSheet isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  )
}
