import { useQueryErrorResetBoundary } from '@tanstack/react-query'
import { Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { useNavigate } from 'react-router'

import { AppointmentDetail } from '@/features/appointment/ui'
import { ErrorFallback } from '@/shared/ui/error-fallback'

import AppointmentDetailSkeleton from './appointment-detail-skeleton'

export default function AppointmentDetailPage() {
  const navigate = useNavigate()
  const { reset } = useQueryErrorResetBoundary()

  return (
    <main>
      <ErrorBoundary
        onReset={reset}
        fallbackRender={({ error, resetErrorBoundary }) => (
          <ErrorFallback error={error} resetErrorBoundary={resetErrorBoundary} navigate={navigate} />
        )}
      >
        <Suspense fallback={<AppointmentDetailSkeleton />}>
          <AppointmentDetail />
        </Suspense>
      </ErrorBoundary>
    </main>
  )
}
