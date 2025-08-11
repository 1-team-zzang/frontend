import { Suspense } from 'react'

import { FriendDetailedSchedule } from '@/features/detailed-schedule/ui'

import DetailedScheduleSkeleton from '../detailed-schedule-skeleton'

export default function FriendDetailedSchedulePage() {
  return (
    <Suspense fallback={<DetailedScheduleSkeleton />}>
      <FriendDetailedSchedule />
    </Suspense>
  )
}
