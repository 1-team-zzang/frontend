import { useState } from 'react'

import useFriends from '../model/use-friends'

import FriendItem from './friend-item'

import type { Friend } from '@/entities/friends/models/friend.types'

export default function FriendList() {
  const [page, setPage] = useState<number>(1)
  const { friends, totalPages } = useFriends(page)

  return (
    <div>
      {friends.map((friend: Friend) => {
        return <FriendItem friend={friend} key={friend.friendRequestId} />
      })}
      <div className="flex gap-3 justify-center mt-4">
        <button onClick={() => setPage((prev) => Math.max(prev - 1, 1))} disabled={page === 1}>
          이전
        </button>
        <span>
          {page} / {totalPages}
        </span>
        <button
          onClick={() => setPage((prev) => Math.min(prev + 1, totalPages ?? prev))}
          disabled={page === totalPages}
        >
          다음
        </button>
      </div>
    </div>
  )
}
