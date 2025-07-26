import AddFriendButton from '@/features/friends/ui/add-friend-button'
import FriendList from '@/features/friends/ui/friend-list'
import FriendRequestListButton from '@/features/friends/ui/friend-request-list-button'
import Header from '@/shared/ui/header/header'

export default function FriendsPage() {
  return (
    <>
      <Header leftButton={<div />} rightButton={<AddFriendButton />}>
        캘메이트
      </Header>
      <div className="px-5 py-3">
        <FriendRequestListButton />
      </div>
      <FriendList />
    </>
  )
}
