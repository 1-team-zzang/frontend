import { Outlet } from 'react-router'

import { IconCalendarAdd } from '@/shared/assets/icons'
import AddScheduleButton from '@/shared/ui/calendar/ui/add-schedule-button'

export default function DetailedScheduleLayout() {
  return (
    <main className="bg-[#f8f8f8]">
      <Outlet />
      <AddScheduleButton>
        <IconCalendarAdd />
      </AddScheduleButton>
    </main>
  )
}
