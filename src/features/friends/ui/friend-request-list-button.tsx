import { useState } from 'react'

import { Button } from '@/shared/ui'

import { useFriendRequestList } from '../model'

import FriendRequestListBottomSheet from './friend-request-list-bottom-sheet'

export default function FriendRequestListButton() {
  const page = 1
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const size = 10
  const { friendRequestList, friendRequestCount } = useFriendRequestList(page, size)

  return (
    <>
      <Button
        intent="outlined"
        className="w-full"
        disabled={friendRequestCount === 0}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {friendRequestCount > 0 ? `대기 중 초대 ${friendRequestCount}` : '친구 요청 없음'}
      </Button>
      {isOpen && (
        <FriendRequestListBottomSheet friendRequestList={friendRequestList} isOpen={isOpen} setOpen={setIsOpen} />
      )}
    </>
  )
}
