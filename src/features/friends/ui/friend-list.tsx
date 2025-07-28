import { useState } from 'react'

import Text from '@/shared/ui/text/text'

import { useFriends } from '../model'

import FriendItem from './friend-item'

import type { Friend } from '@/entities/friends/models/friend.types'

export default function FriendList() {
  const [page, setPage] = useState<number>(1)
  const { friends, totalPages } = useFriends(page)

  return (
    <div>
      <div className="overflow-y-auto scrollbar-hide">
        {friends.map((friend: Friend) => {
          return <FriendItem friend={friend} key={friend.friendRequestId} />
        })}
      </div>
      <div className="flex justify-center">
        <div className="text-primary-80 flex gap-3 items-center justify-center mt-4 rounded border border-primary-80 w-fit py-2 px-4">
          <Text
            as="button"
            typography="label"
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            className="disabled:text-gray-60"
            disabled={page === 1}
          >
            이전
          </Text>

          <Text as="span" typography="label">
            <b>{page}</b> / <b>{totalPages}</b>
          </Text>

          <Text
            as="button"
            typography="label"
            onClick={() => setPage((prev) => Math.min(prev + 1, totalPages ?? prev))}
            className="disabled:text-gray-60"
            disabled={page === totalPages}
          >
            다음
          </Text>
        </div>
      </div>
    </div>
  )
}
