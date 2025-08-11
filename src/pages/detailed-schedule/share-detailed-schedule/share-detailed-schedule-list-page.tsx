import { Suspense } from 'react'

import { ShareDetailedScheduleList } from '@/features/detailed-schedule/ui'

import DetailedScheduleListSkeleton from '../detailed-schedule-list-skeleton'

export default function ShareDetailedScheduleListPage() {
  return (
    <Suspense fallback={<DetailedScheduleListSkeleton />}>
      <ShareDetailedScheduleList />
    </Suspense>
  )
}
