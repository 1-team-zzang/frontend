import { Link } from 'react-router'

import { IconCalendar } from '@/shared/assets'
import { Profile, ProfileImage, ProfileName } from '@/shared/ui'

import { useEditModeContext } from '../model/edit-mode-context'

import DeleteFriendModal from './delete-friend-modal'

import type { Friend } from '@/entities/friends'

export default function FriendItem({ friend }: { friend: Friend }) {
  const { profileUrl, name, friendRequestId } = friend

  const { isEditMode } = useEditModeContext()

  return (
    <div className="flex items-center justify-between p-4 border-b border-b-gray-20">
      <div className="flex items-center gap-3">
        <Profile src={profileUrl} name={name}>
          <ProfileImage />
          <ProfileName />
        </Profile>
      </div>

      <div className="flex gap-3 items-center">
        {isEditMode ? (
          <DeleteFriendModal name={name} friendRequestId={friendRequestId} />
        ) : (
          <Link
            to={{
              pathname: `/friends/${friend.userId}/calendar`,
              search: new URLSearchParams({ userName: name }).toString(),
            }}
          >
            <IconCalendar />
          </Link>
        )}
      </div>
    </div>
  )
}
