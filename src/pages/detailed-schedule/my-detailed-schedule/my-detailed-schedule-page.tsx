import { Suspense } from 'react'

import { MyDetailedSchedule } from '@/features/my-schedule'

import DetailedScheduleSkeleton from '../detailed-schedule-skeleton'

export default function MyDetailedSchedulePage() {
  return (
    <Suspense fallback={<DetailedScheduleSkeleton />}>
      <MyDetailedSchedule />
    </Suspense>
  )
}
