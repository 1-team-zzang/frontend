import type { FriendSearchType } from './index'

export const friendQueryKeys = {
  all: ['friends'] as const,
  listAll: () => [...friendQueryKeys.all, 'list'],
  list: (page: number) => [...friendQueryKeys.all, 'list', page] as const,
  search: (searchType: FriendSearchType, query: string, size: number) =>
    [...friendQueryKeys.all, 'search', searchType, query, size] as const,
  requestList: (page: number) => [...friendQueryKeys.all, 'request-list', page],
}
