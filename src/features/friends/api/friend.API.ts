import axiosInstance from '@/shared/api/axios-instance'

import type { FriendListResponse } from '../model/friend-list.types'

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
