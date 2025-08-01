import { useSuspenseInfiniteQuery } from '@tanstack/react-query'

import { getFriends } from '../api/friend.API'

import { friendQueryKeys } from './friend.query'

function useFriends({ size }: { size: number }) {
  return useSuspenseInfiniteQuery({
    queryKey: friendQueryKeys.list(1),
    queryFn: ({ pageParam }) => getFriends(pageParam, size),
    getNextPageParam: (lastPage) => {
      const currentPage = lastPage.page
      const totalPages = lastPage.totalPages
      return currentPage < totalPages ? currentPage + 1 : undefined
    },
    select: (data) => {
      const friends = data.pages.flatMap((page) => page.friends)
      return {
        friends,
        page: data.pages[data.pages.length - 1]?.page,
        totalPages: data.pages[data.pages.length - 1]?.totalPages,
      }
    },
    initialPageParam: 1,
  })
}

export default useFriends
