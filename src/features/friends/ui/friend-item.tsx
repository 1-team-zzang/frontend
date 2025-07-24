import { Link } from 'react-router'

import { Profile, ProfileImage, ProfileName } from '@/shared/ui/profile'

import type { Friend } from '@/entities/friends/models/friend.types'

export default function FriendItem({ friend }: { friend: Friend }) {
  const { profileUrl, name } = friend
  return (
    <div className="flex items-center justify-between p-4 border-b border-b-gray-20">
      <div className="flex items-center gap-3">
        <Profile src={profileUrl} name={name}>
          <ProfileImage />
          <ProfileName />
        </Profile>
      </div>

      <div className="flex gap-3 items-center">
        {/* TODO 삭제하는 핸들러함수 */}
        <button>삭제</button>
        <Link to={`/friends/${friend.userId}/calendar`}>&gt;</Link>
      </div>
    </div>
  )
}
