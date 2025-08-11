import { useQueryErrorResetBoundary } from '@tanstack/react-query'
import { Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'

import { IconCheck } from '@/shared/assets'
import { Text } from '@/shared/ui'

import UserList from './user-list'
import UserListSkeleton from './user-list-skeleton'

import type { FriendSearchType } from '../model'

interface Props {
  searchType: FriendSearchType
  searchQuery: string
}

export default function FriendSearchResult({ searchType, searchQuery }: Props) {
  const { reset } = useQueryErrorResetBoundary()

  const boundaryKey = `${searchType}:${searchQuery}`

  return (
    <ErrorBoundary
      key={boundaryKey}
      onReset={reset}
      fallbackRender={({ resetErrorBoundary }) => (
        <div className="p-2 h-64 mt-2 flex items-center justify-center">
          <div>
            <Text as="span" typography="label">
              다시시도{' '}
            </Text>
            <button onClick={resetErrorBoundary} className="rounded-full border border-gray-20 p-2">
              <IconCheck />
            </button>
          </div>
        </div>
      )}
    >
      <Suspense fallback={<UserListSkeleton />}>
        {searchQuery ? (
          <UserList searchQuery={searchQuery} searchType={searchType} />
        ) : (
          <div className="p-4 text-gray-60 h-64 flex items-center justify-center">검색어를 입력하세요</div>
        )}
      </Suspense>
    </ErrorBoundary>
  )
}
