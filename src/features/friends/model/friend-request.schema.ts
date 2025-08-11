import z from 'zod'

import { SEARCH_CONFIG } from './search-config'

import type { FriendSearchType } from './friend-list.types'

export const makeFriendRequestSchema = (type: FriendSearchType) =>
  z.object({
    friend: SEARCH_CONFIG[type].schema(z),
  })

export type FriendRequestType = z.infer<ReturnType<typeof makeFriendRequestSchema>>
