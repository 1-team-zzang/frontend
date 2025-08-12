import { IconNonSchedule } from '@/shared/assets'
import { useIntersect } from '@/shared/hooks'
import { Text } from '@/shared/ui'

import { useFriends } from '../model'

import FriendItem from './friend-item'

import type { Friend } from '@/entities/friends'

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

  if (friends.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-[calc(100vh-200px)] gap-4">
        <IconNonSchedule />
        <Text as="span" typography="b2-normal" className="text-center">
          등록된 캘메이트가
          <br />
          아직 없어요
        </Text>
      </div>
    )
  }

  return (
    <div className="p-3 overflow-y-auto scrollbar-hide h-[calc(100vh-200px)]">
      {friends.map((friend: Friend) => {
        return <FriendItem friend={friend} key={friend.friendRequestId} />
      })}
      <div className="h-[1px]" ref={ref} />
    </div>
  )
}
