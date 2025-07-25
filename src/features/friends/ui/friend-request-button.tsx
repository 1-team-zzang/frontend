import Button from '@/shared/ui/button/button.tsx'

import useFriendRequestMutation from '../model/use-friend-request-mutation'

export default function FriendRequestButton({ friendId }: { friendId: number }) {
  const friendRequestMutation = useFriendRequestMutation()
  const handleClick = () => {
    friendRequestMutation.mutate(friendId)
  }
  return (
    // TODO 스타일 지정
    <Button type="button" intent="outlined" onClick={handleClick} className="w-fit px-4 py-1">
      친구 요청
    </Button>
  )
}
