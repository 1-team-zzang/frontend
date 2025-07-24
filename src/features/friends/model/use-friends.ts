import { useQuery } from '@tanstack/react-query'

import { getFriends } from '../api/friend.API'

import { friendQueryKeys } from './query-key'

function useFriends() {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: friendQueryKeys.all,
    queryFn: () => getFriends(),
  })

  const friends = data?.friends ?? []
  // 페이지네이션 or 무한스크롤 처리해야함 / page를 넘기는게맞나?
  const page = data?.page
  const totalPages = data?.totalPages

  return { friends, page, totalPages, isLoading, error, refetch }
}

export default useFriends
