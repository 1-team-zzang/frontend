import type { FriendSearchType } from './friend-list.types'

export const friendQueryKeys = {
  all: ['friends'] as const,
  listAll: () => [...friendQueryKeys.all, 'list'],
  list: (page: number) => [...friendQueryKeys.all, 'list', page] as const,
  search: (searchType: FriendSearchType, query: string, page: number) =>
    [...friendQueryKeys.all, 'search', searchType, query, page] as const,
  requestList: (page: number) => [...friendQueryKeys.all, 'request-list', page],
}
