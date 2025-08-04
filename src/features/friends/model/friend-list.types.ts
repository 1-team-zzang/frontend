import type { Friend, FriendRequest, FriendUser } from '@/entities/friends'
import type { PaginatedResponse } from '@/shared/types'

export type FriendSearchType = 'EMAIL' | 'NAME'

export type FriendListResponse = PaginatedResponse<Friend, 'friends'>
export type FriendUsersResponse = PaginatedResponse<FriendUser, 'users'>
export type FriendRequestsResponse = PaginatedResponse<FriendRequest, 'friendRequests'>
