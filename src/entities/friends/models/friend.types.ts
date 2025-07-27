export interface Friend {
  friendRequestId: number
  userId: number
  name: string
  email: string
  profileUrl: string | null
}

export type Friends = Friend[]
