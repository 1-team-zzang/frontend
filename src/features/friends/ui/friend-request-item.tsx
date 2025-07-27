import { IconCheck, IconClose } from '@/shared/assets/icons'
import Text from '@/shared/ui/text/text'

import { useUpdateFriendRequestByStatusMutation } from '../model'

import type { FriendRequest } from '@/entities/friends/models/friend.types'

export default function FriendRequestItem({ friendRequest }: { friendRequest: FriendRequest }) {
  const updateFriendRequestMutation = useUpdateFriendRequestByStatusMutation(friendRequest.friendRequestId)
  const handleAcceptClick = () => {
    updateFriendRequestMutation.mutate('ACCEPT')
  }
  const handleRejectClick = () => {
    updateFriendRequestMutation.mutate('REJECT')
  }
  const { name, email } = friendRequest
  return (
    <div className="py-3 px-6 flex items-center justify-between bg-gray-1 rounded-xl shadow-sm">
      <div className="flex flex-col gap-1">
        <Text as="span" typography="b2-heading" className="text-gray-95">
          {name}
        </Text>
        <Text as="span" typography="b2-normal" className="text-gray-80">
          {email}
        </Text>
      </div>
      <div className="flex gap-3">
        <Text as="button" typography="b2-heading" className="text-primary-80" onClick={handleAcceptClick}>
          <IconCheck />
        </Text>
        <Text as="button" typography="b2-heading" className="text-system-warning" onClick={handleRejectClick}>
          <IconClose width={24} height={24} />
        </Text>
      </div>
    </div>
  )
}
