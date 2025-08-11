import { Suspense } from 'react'

import { ShareDetailedSchedule } from '@/features/detailed-schedule/ui'

import DetailedScheduleSkeleton from '../detailed-schedule-skeleton'

export default function ShareDetailedScheduleListPage() {
  return (
    <Suspense fallback={<DetailedScheduleSkeleton />}>
      <ShareDetailedSchedule />
    </Suspense>
  )
}
