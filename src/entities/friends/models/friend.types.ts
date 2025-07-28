interface FriendBase {
  name: string
  email: string
  profileUrl: string | null
}

export interface Friend extends FriendBase {
  friendRequestId: number
  userId: number
}

export type Friends = Friend[]

export interface FriendUser extends FriendBase {
  id: number
  isFriend: boolean
  isRequested: boolean
}

export interface FriendRequest extends FriendBase {
  friendRequestId: number
}
