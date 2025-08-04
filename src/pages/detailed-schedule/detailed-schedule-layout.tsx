import { useQueryErrorResetBoundary } from '@tanstack/react-query'
import { format } from 'date-fns'
import { ErrorBoundary } from 'react-error-boundary'
import { Outlet, useNavigate, useParams } from 'react-router'

import { ErrorFallback } from '@/shared/ui'
import { DetailedScheduleHeader } from '@/shared/ui/detailed-schedule'

export default function DetailedScheduleLayout() {
  const navigate = useNavigate()
  const { date } = useParams()
  const { reset } = useQueryErrorResetBoundary()
  const formattedDate = date ? format(new Date(date), 'M월 d일') : ''

  return (
    <main className={'bg-[#f8f8f8] overflow-y-auto h-[calc(100vh-57px)] scrollbar-hide'}>
      <ErrorBoundary
        onReset={reset}
        FallbackComponent={({ error, resetErrorBoundary }) => (
          <ErrorFallback error={error} resetErrorBoundary={resetErrorBoundary} navigate={navigate} />
        )}
      >
        <DetailedScheduleHeader date={formattedDate} />
        <div className="p-4 h-[calc(100vh-111px)]">
          <Outlet />
        </div>
      </ErrorBoundary>
    </main>
  )
}
