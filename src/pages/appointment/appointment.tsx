import { Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'

import { AppointmentHeader, AppointmentList } from '@/features/appointment/ui'

export default function Appointment() {
  return (
    <main>
      <AppointmentHeader>내 약속</AppointmentHeader>
      <ErrorBoundary fallback={<div>Error</div>}>
        <Suspense fallback={<div>Loading...</div>}>
          <AppointmentList />
        </Suspense>
      </ErrorBoundary>
    </main>
  )
}
