import { Outlet } from 'react-router'

import ShareCalendar from '@/features/share-schedule/ui/share-calendar'

export default function ShareCalendarPage() {
  return (
    <>
      <Outlet />
      <ShareCalendar />
    </>
  )
}
