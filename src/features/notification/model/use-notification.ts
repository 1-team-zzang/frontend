import { useSuspenseInfiniteQuery } from '@tanstack/react-query'

import { getNotification } from '../api'

import { notificationQueryKeys } from './notification.query'

export default function useNotification(size = 10) {
  return useSuspenseInfiniteQuery({
    queryKey: notificationQueryKeys.list(),
    queryFn: ({ pageParam }) => getNotification(pageParam, size),
    getNextPageParam: (lastPage) => {
      const currentPage = lastPage.page
      const totalPages = lastPage.totalPages
      return currentPage < totalPages ? currentPage + 1 : undefined
    },
    select: (data) => {
      const notifications = data.pages.flatMap((page) => page.notifications)
      return {
        notifications,
        page: data.pages[data.pages.length - 1]?.page,
        totalPages: data.pages[data.pages.length - 1]?.totalPages,
      }
    },
    initialPageParam: 1,
  })
}
