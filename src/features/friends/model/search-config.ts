import type { FriendSearchType } from './friend-list.types'

// FriendSearchType = 'EMAIL' | 'NAME'

export const SEARCH_CONFIG: Record<
  FriendSearchType,
  {
    placeholder: string
    schema: (z: typeof import('zod').z) => import('zod').ZodString
  }
> = {
  EMAIL: { placeholder: '이메일 검색', schema: (z) => z.string().email('이메일 형식으로 입력하세요') },
  NAME: { placeholder: '이름 검색', schema: (z) => z.string().min(2, '2글자 이상 입력해주세요') },
}
