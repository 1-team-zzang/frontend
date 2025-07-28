import { useInfiniteQuery } from '@tanstack/react-query'

import { getFriendsUsers } from '../api/friend.API'

import { friendQueryKeys, type FriendSearchType } from './index'

function useFriendsUsers(searchType: FriendSearchType, query: string, size: number) {
  return useInfiniteQuery({
    queryKey: friendQueryKeys.search(searchType, query, size),
    queryFn: ({ pageParam }) => getFriendsUsers(searchType, query, pageParam, size),
    getNextPageParam: (lastPage) => {
      const currentPage = lastPage.page
      const totalPages = lastPage.totalPages
      return currentPage < totalPages ? currentPage + 1 : undefined
    },
    select: (data) => {
      const friendsUsers = data.pages.flatMap((page) => page.users)
      return {
        friendsUsers,
        page: data.pages[data.pages.length - 1]?.page,
        totalPages: data.pages[data.pages.length - 1]?.totalPages,
      }
    },
    initialPageParam: 1,
    enabled: !!query,
  })
}

export default useFriendsUsers
