import { useUserStore } from '@/entities/user/models'
import { useIntersect } from '@/shared/hooks'
import { Profile, ProfileImage, ProfileName, Text } from '@/shared/ui'

import { useFriendsUsers, type FriendSearchType } from '../model'

import FriendRequestButton from './friend-request-button'

interface Props {
  searchQuery: string
  searchType: FriendSearchType
}

export default function UserList({ searchQuery, searchType }: Props) {
  const size = 10
  const { data, hasNextPage, fetchNextPage } = useFriendsUsers(searchType, searchQuery, size)
  const { user: loginUser } = useUserStore()

  const ref = useIntersect<HTMLDivElement>({
    onIntersect: (entry, _observer) => {
      if (entry.isIntersecting) {
        if (hasNextPage) {
          fetchNextPage()
        }
      }
    },
  })

  const friendsUsers = data?.friendsUsers ?? []

  return (
    <div className="p-2 overflow-y-auto h-64 mt-2 flex flex-col gap-3 scrollbar-hide">
      {friendsUsers
        .filter((user) => {
          const isNotLoginUser = loginUser?.userId !== user.id
          const isNotFriend = !user.isFriend
          return isNotLoginUser && isNotFriend
        })
        .map((user) => {
          return (
            <div key={user.id} className="flex justify-between items-center p-2">
              <div className="flex gap-3 items-center">
                <Profile name={user.name} src={user.profileUrl}>
                  <ProfileImage />
                  <div className="flex flex-col">
                    <ProfileName />
                    <Text as="span" typography="label">
                      {user.email}
                    </Text>
                  </div>
                </Profile>
              </div>
              {user.isFriend ? (
                <Text as="span" typography="label">
                  친구
                </Text>
              ) : (
                <FriendRequestButton friendId={user.id} disabled={user.isRequested} />
              )}
            </div>
          )
        })}
      <div ref={ref} className="h-[1px]" />
    </div>
  )
}
