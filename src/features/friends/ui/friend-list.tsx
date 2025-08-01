import { useIntersect } from '@/shared/hooks'

import { useFriends } from '../model'

import FriendItem from './friend-item'

import type { Friend } from '@/entities/friends/models/friend.types'

export default function FriendList() {
  const size = 10
  const { data, hasNextPage, fetchNextPage } = useFriends({ size })

  const ref = useIntersect<HTMLDivElement>({
    onIntersect: (entry, _observer) => {
      if (entry.isIntersecting) {
        if (hasNextPage) {
          fetchNextPage()
        }
      }
    },
  })

  const friends: Friend[] = data.friends ?? []

  return (
    <div className="p-3 overflow-y-auto scrollbar-hide h-[calc(100vh-200px)]">
      {friends.map((friend: Friend) => {
        return <FriendItem friend={friend} key={friend.friendRequestId} />
      })}
      <div className="h-[1px]" ref={ref} />
    </div>
  )
}
