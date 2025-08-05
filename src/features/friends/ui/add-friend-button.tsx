import { useState } from 'react'

import { Text } from '@/shared/ui'

import AddFriendBottomSheet from './add-friend-bottom-sheet'

export default function AddFriendButton() {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const handleClick = () => {
    setIsOpen((prev) => !prev)
  }
  return (
    <>
      <Text as="button" typography="b2-normal" className="text-gray-95" onClick={handleClick}>
        추가
      </Text>
      <AddFriendBottomSheet isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  )
}
