import { useQuery } from '@tanstack/react-query'

import { getFriends } from '../api/friend.API'

import { friendQueryKeys } from './friend.query'

function useFriends(page: number) {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: friendQueryKeys.list(page),
    queryFn: () => getFriends(page),
  })

  const friends = data?.friends ?? []
  const totalPages = data?.totalPages

  return { friends, page, totalPages, isLoading, error, refetch }
}

export default useFriends
