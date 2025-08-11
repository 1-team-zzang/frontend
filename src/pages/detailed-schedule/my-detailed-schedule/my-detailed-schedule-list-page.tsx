import { Suspense } from 'react'

import { MyDetailedScheduleList } from '@/features/my-calendar/ui'

import DetailedScheduleListSkeleton from '../detailed-schedule-list-skeleton'

export default function MyDetailedScheduleListPage() {
  return (
    <Suspense fallback={<DetailedScheduleListSkeleton />}>
      <MyDetailedScheduleList />
    </Suspense>
  )
}
