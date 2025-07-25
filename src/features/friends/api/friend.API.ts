import axiosInstance from '@/shared/api/axios-instance'

import type { FriendListResponse } from '../model/friend-list.types'

export async function getFriends(): Promise<FriendListResponse> {
  const res = await axiosInstance.get('/friends')

  return res.data
}

export async function deleteFriend(friendRequestId: number): Promise<void> {
  await axiosInstance.delete(`/friends/${friendRequestId}`)
}
