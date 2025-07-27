import { Outlet } from 'react-router'

import ShareCalendar from '@/features/share-schedule/share-calendar/share-calendar'

export default function ShareCalendarPage() {
  return (
    <>
      <Outlet />
      <ShareCalendar />
    </>
  )
}
