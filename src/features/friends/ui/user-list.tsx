import { useUserStore } from '@/entities/user/models/use-user-store'
import { useIntersect } from '@/shared/hooks'
import { Profile, ProfileImage, ProfileName } from '@/shared/ui/profile'
import Text from '@/shared/ui/text/text'

import { useFriendsUsers } from '../model'

import { FriendRequestButton } from './index'

interface Props {
  searchQuery: string
}

export default function UserList({ searchQuery }: Props) {
  // TODO 이메일 검색, 이름 검색이 가능하다면 선택할 수 있는 버튼이 있어야할 것 같다 ~~
  const { data, hasNextPage, fetchNextPage } = useFriendsUsers('EMAIL', searchQuery, 1, 10)
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
    <div className="p-2 overflow-y-auto h-64 mt-2 flex flex-col gap-3">
      {friendsUsers
        .filter((user) => loginUser?.userId !== user.id || !user.isFriend)
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
