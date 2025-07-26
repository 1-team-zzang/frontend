import { useQueryErrorResetBoundary } from '@tanstack/react-query'
import { Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { useNavigate } from 'react-router'

import { AppointmentHeader, AppointmentList } from '@/features/appointment/ui'
import { ErrorFallback } from '@/shared/ui/error-fallback'

import AppointmentListSkeleton from './appointment-list-skeleton'

export default function AppointmentListPage() {
  const navigate = useNavigate()
  const { reset } = useQueryErrorResetBoundary()

  return (
    <main>
      <AppointmentHeader>내 약속</AppointmentHeader>
      <ErrorBoundary
        onReset={reset}
        FallbackComponent={({ error, resetErrorBoundary }) => (
          <ErrorFallback error={error} resetErrorBoundary={resetErrorBoundary} navigate={navigate} />
        )}
      >
        <Suspense fallback={<AppointmentListSkeleton count={5} />}>
          <AppointmentList />
        </Suspense>
      </ErrorBoundary>
    </main>
  )
}
