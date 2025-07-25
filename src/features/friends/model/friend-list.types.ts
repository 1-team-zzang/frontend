import type { Friend, FriendRequest, FriendUser } from '@/entities/friends/models/friend.types'

export type FriendSearchType = 'EMAIL' | 'NAME'

// NOTE 공통으로 빼면 좋을 것 같은데 어디로 빼야할지 ...?
export type PaginatedResponse<T, K extends string> = {
  page: number
  totalPages: number
} & Record<K, T[]>

export type FriendListResponse = PaginatedResponse<Friend, 'friends'>
export type FriendUsersResponse = PaginatedResponse<FriendUser, 'users'>
export type FriendRequestsResponse = PaginatedResponse<FriendRequest, 'friendRequests'>
