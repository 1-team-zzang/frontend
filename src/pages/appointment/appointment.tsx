import { Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'

import { AppointmentHeader, AppointmentList } from '@/features/appointment/ui'

import AppointmentListSkeleton from './appointment-list-skeleton'

export default function Appointment() {
  return (
    <main>
      <AppointmentHeader>내 약속</AppointmentHeader>
      <ErrorBoundary fallback={<div>Error</div>}>
        <Suspense fallback={<AppointmentListSkeleton count={5} />}>
          <AppointmentList />
        </Suspense>
      </ErrorBoundary>
    </main>
  )
}
