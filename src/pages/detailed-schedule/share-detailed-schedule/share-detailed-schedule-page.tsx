import { Suspense } from 'react'

import { ShareDetailedSchedule } from '@/features/share-schedule'

import DetailedScheduleSkeleton from '../detailed-schedule-skeleton'

export default function ShareDetailedScheduleListPage() {
  return (
    <Suspense fallback={<DetailedScheduleSkeleton />}>
      <ShareDetailedSchedule />
    </Suspense>
  )
}
