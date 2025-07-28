import { useQueryErrorResetBoundary } from '@tanstack/react-query'
import { Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { useNavigate } from 'react-router'

import AddFriendButton from '@/features/friends/ui/add-friend-button'
import FriendList from '@/features/friends/ui/friend-list'
import FriendRequestListButton from '@/features/friends/ui/friend-request-list-button'
import { ErrorFallback } from '@/shared/ui/error-fallback'
import Header from '@/shared/ui/header/header'

import FriendsPageSkeleton from './friends-page-skeleton'

export default function FriendsPage() {
  const navigate = useNavigate()
  const { reset } = useQueryErrorResetBoundary()
  return (
    <>
      <Header onNavigate={<div> </div>} onClick={<AddFriendButton />}>
        캘메이트
      </Header>
      <ErrorBoundary
        onReset={reset}
        fallbackRender={({ error, resetErrorBoundary }) => (
          <ErrorFallback error={error} resetErrorBoundary={resetErrorBoundary} navigate={navigate} />
        )}
      >
        <Suspense fallback={<FriendsPageSkeleton />}>
          <div className="h-[calc(100vh-109px)]">
            <div className="px-5 py-3">
              <FriendRequestListButton />
            </div>
            <FriendList />
          </div>
        </Suspense>
      </ErrorBoundary>
    </>
  )
}
