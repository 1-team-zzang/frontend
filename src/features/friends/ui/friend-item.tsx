import { Link } from 'react-router'

import { Profile, ProfileImage, ProfileName } from '@/shared/ui/profile'
import Text from '@/shared/ui/text/text'

import useFriendDeleteMutation from '../model/use-friend-delete-mutation'

import type { Friend } from '@/entities/friends/models/friend.types'

export default function FriendItem({ friend }: { friend: Friend }) {
  const { profileUrl, name, friendRequestId } = friend

  const friendDeleteMutation = useFriendDeleteMutation()
  const handleDeleteClick = () => {
    friendDeleteMutation.mutate(friendRequestId)
  }
  return (
    <div className="flex items-center justify-between p-4 border-b border-b-gray-20">
      <div className="flex items-center gap-3">
        <Profile src={profileUrl} name={name}>
          <ProfileImage />
          <ProfileName />
        </Profile>
      </div>

      <div className="flex gap-3 items-center">
        {/* TODO 디자인 나오면 컴포넌트 분리하기  */}
        <Text as="button" typography="label" onClick={handleDeleteClick}>
          삭제
        </Text>

        <Link to={`/friends/${friend.userId}/calendar`}>&gt;</Link>
      </div>
    </div>
  )
}
