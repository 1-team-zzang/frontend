import { useState } from 'react'

import Button from '@/shared/ui/button/button.tsx'

import useFriendRequestList from '../model/use-friend-requst-list'

import FriendRequestListBottomSheet from './friend-request-list-bottom-sheet'

export default function FriendRequestListButton() {
  // eslint-disable-next-line unused-imports/no-unused-vars
  const [page, setPage] = useState<number>(1) // 나중에 무한스크롤이나 페이지네이션
  const [isShow, setIsShow] = useState<boolean>(false)

  const size = 10
  const { friendRequestList, friendRequestCount } = useFriendRequestList(page, size)

  return (
    <>
      <Button
        intent="outlined"
        className="w-full"
        disabled={friendRequestCount === 0}
        onClick={() => setIsShow((prev) => !prev)}
      >
        {friendRequestCount > 0 ? `대기 중 초대 ${friendRequestCount}` : '친구 요청 없음'}
      </Button>
      {isShow && (
        <FriendRequestListBottomSheet friendRequestList={friendRequestList} isOpen={isShow} setOpen={setIsShow} />
      )}
    </>
  )
}
