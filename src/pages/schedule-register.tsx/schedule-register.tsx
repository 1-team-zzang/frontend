import { Outlet } from 'react-router'

import ScheduleRegister from '@/features/schedule-register/ui/schedule-register'

export default function ShareCalendarPage() {
  return (
    <>
      <Outlet />
      <ScheduleRegister />
    </>
  )
}
