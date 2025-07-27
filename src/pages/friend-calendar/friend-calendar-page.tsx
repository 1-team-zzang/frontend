import { Outlet } from 'react-router'

import FriendCalendar from '@/features/friend-schedule/ui/friend-calendar'

export default function FriendCalendarPage() {
  return (
    <>
      <Outlet /> <FriendCalendar />
    </>
  )
}
