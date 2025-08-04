import { axiosInstance } from '@/shared/api'

import type { FriendListResponse, FriendRequestsResponse, FriendUsersResponse } from '../model'

// GET 친구 목록
export async function getFriends(page = 1, size = 10): Promise<FriendListResponse> {
  const res = await axiosInstance.get('/friends', {
    params: { page, size },
  })

  return res.data.data
}

// DELETE 친구 삭제
export async function deleteFriend(friendRequestId: number): Promise<void> {
  await axiosInstance.delete(`/friends/${friendRequestId}`)
}

// GET 친구 요청 전 쿼리에 맞는 유저 목록들을 불러오는 api
export async function getFriendsUsers(
  searchType: 'EMAIL' | 'NAME',
  query: string,
  page = 1,
  size = 10,
): Promise<FriendUsersResponse> {
  const res = await axiosInstance.get('/friends/users', {
    params: {
      searchType,
      query,
      page,
      size,
    },
  })

  return res.data.data
}

// GET 친구 요청 목록 확인
export async function getFriendRequests(page = 1, size = 10): Promise<FriendRequestsResponse> {
  const res = await axiosInstance.get('/friends/requests', {
    params: {
      page,
      size,
    },
  })

  return res.data.data
}

// POST 친구 요청 보내기
export async function postFriendRequest(friendId: number): Promise<void> {
  await axiosInstance.post('/friends/requests', { friendId })
}

// PUT 친구 요청 수락/거절
export async function putFriendRequest(status: 'ACCEPT' | 'REJECT', friendRequestId: number): Promise<void> {
  await axiosInstance.put('/friends/requests', {
    status,
    friendRequestId,
  })
}
