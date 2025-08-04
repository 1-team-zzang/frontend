import { Suspense } from 'react'

import { MyDetailedScheduleList } from '@/features/my-schedule'

import DetailedScheduleListSkeleton from '../detailed-schedule-list-skeleton'

export default function MyDetailedScheduleListPage() {
  return (
    <Suspense fallback={<DetailedScheduleListSkeleton />}>
      <MyDetailedScheduleList />
    </Suspense>
  )
}
