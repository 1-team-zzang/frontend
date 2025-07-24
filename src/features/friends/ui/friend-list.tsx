import useFriends from '../model/use-friends'

import FriendItem from './friend-item'

import type { Friend } from '@/entities/friends/models/friend.types'

export default function FriendList() {
  const { friends } = useFriends()

  return (
    <div>
      {friends.map((friend: Friend) => {
        return <FriendItem friend={friend} key={friend.friendRequestId} />
      })}
    </div>
  )
}
