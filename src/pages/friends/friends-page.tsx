import { useQueryErrorResetBoundary } from '@tanstack/react-query'
import { Suspense, useState } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { useNavigate } from 'react-router'

import { EditModeProvider } from '@/features/friends/model/edit-mode-context'
import AddFriendButton from '@/features/friends/ui/add-friend-button'
import FriendList from '@/features/friends/ui/friend-list'
import FriendRequestListButton from '@/features/friends/ui/friend-request-list-button'
import { IconAppointmentArrowLeft } from '@/shared/assets'
import { Text } from '@/shared/ui'
import { ErrorFallback } from '@/shared/ui/error-fallback'
import Header from '@/shared/ui/header/header'

import FriendsPageSkeleton from './friends-page-skeleton'

export default function FriendsPage() {
  const navigate = useNavigate()
  const { reset } = useQueryErrorResetBoundary()
  const [isEditMode, setIsEditMode] = useState<boolean>(false)

  return (
    <EditModeProvider value={{ isEditMode, onEditModeChange: setIsEditMode }}>
      <Header
        onNavigate={
          <div>
            {isEditMode ? (
              <button onClick={() => setIsEditMode(false)} className="hover:underline hover:underline-offset-4">
                <Text as="span" typography="label">
                  취소
                </Text>
              </button>
            ) : (
              <div className="flex items-center gap-2">
                <button onClick={() => navigate(-1)}>
                  <IconAppointmentArrowLeft />
                </button>
                <button onClick={() => setIsEditMode(true)} className="hover:underline hover:underline-offset-4">
                  <Text as="span" typography="label">
                    친구 관리
                  </Text>
                </button>
              </div>
            )}
          </div>
        }
        onClick={<AddFriendButton />}
      >
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
    </EditModeProvider>
  )
}
