import { Link } from 'react-router'

import { IconAppointmentArrowLeft } from '@/shared/assets/icons'
import { Profile, ProfileImage, ProfileName } from '@/shared/ui/profile'

import DeleteFriendModal from './delete-friend-modal'

import type { Friend } from '@/entities/friends/models/friend.types'

export default function FriendItem({ friend }: { friend: Friend }) {
  const { profileUrl, name, friendRequestId } = friend

  return (
    <div className="flex items-center justify-between p-4 border-b border-b-gray-20">
      <div className="flex items-center gap-3">
        <Profile src={profileUrl} name={name}>
          <ProfileImage />
          <ProfileName />
        </Profile>
      </div>

      <div className="flex gap-3 items-center">
        <DeleteFriendModal name={name} friendRequestId={friendRequestId} />
        <Link to={`/friends/${friend.userId}/calendar`}>
          <IconAppointmentArrowLeft className="rotate-180" />
        </Link>
      </div>
    </div>
  )
}
