import { Suspense } from 'react'

import FriendDetailedScheduleList from '@/features/friend-schedule/ui/friend-detailed-schedule-list'

import DetailedScheduleListSkeleton from '../detailed-schedule-list-skeleton'

export default function FriendDetailedScheduleListPage() {
  return (
    <Suspense fallback={<DetailedScheduleListSkeleton />}>
      <FriendDetailedScheduleList />
    </Suspense>
  )
}
