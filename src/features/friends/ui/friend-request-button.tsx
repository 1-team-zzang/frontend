import { Button } from '@/shared/ui'

import { useFriendRequestMutation } from '../model'

import type { ButtonHTMLAttributes } from 'react'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  friendId: number
}

export default function FriendRequestButton({ friendId, ...restProps }: Props) {
  const friendRequestMutation = useFriendRequestMutation()
  const handleClick = () => {
    friendRequestMutation.mutate(friendId)
  }
  return (
    // TODO 스타일 지정
    <Button type="button" intent="outlined" onClick={handleClick} className="w-fit px-4 py-1" {...restProps}>
      친구 요청
    </Button>
  )
}
