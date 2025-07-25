import { useQuery } from '@tanstack/react-query'

import { getFriendsUsers } from '../api/friend.API'

import { friendQueryKeys } from './friend.query'

import type { FriendSearchType } from './friend-list.types'

function useFriendsUsers(searchType: FriendSearchType, query: string, page: number) {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: friendQueryKeys.search(searchType, query, page),
    queryFn: () => getFriendsUsers(searchType, query, page),
    enabled: !!query,
  })

  const friendsUsers = data?.users ?? []
  const totalPages = data?.totalPages

  return { friendsUsers, page, totalPages, isLoading, error, refetch }
}

export default useFriendsUsers
