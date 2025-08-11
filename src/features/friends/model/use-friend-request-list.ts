import { useQuery } from '@tanstack/react-query'

import { getFriendRequests } from '../api'

import { friendQueryKeys } from './friend.query'

function useFriendRequestList(page: number, size = 10) {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: friendQueryKeys.requestList(page),
    queryFn: () => getFriendRequests(page, size),
  })

  const friendRequestList = data?.friendRequests ?? []
  const totalPages = data?.totalPages
  const friendRequestCount = friendRequestList.length

  return { friendRequestList, friendRequestCount, totalPages, error, isLoading, refetch }
}

export default useFriendRequestList
