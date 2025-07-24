import type { Friend } from '@/entities/friends/models/friend.types'

export interface FriendListResponse {
  friends: Friend[]
  page: number
  totalPages: number
}
