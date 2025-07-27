import { format } from 'date-fns'
import { Outlet, useParams } from 'react-router'

import { IconCalendarAdd } from '@/shared/assets/icons'
import { DetailedScheduleHeader } from '@/shared/ui/calendar'
import AddScheduleButton from '@/shared/ui/calendar/ui/add-schedule-button'

export default function DetailedScheduleLayout() {
  const { date } = useParams()
  const formattedDate = date ? format(new Date(date), 'M월 d일') : ''

  return (
    <main className="bg-[#f8f8f8] h-screen">
      <DetailedScheduleHeader date={formattedDate} />
      <div className="p-4">
        <Outlet />
        <AddScheduleButton>
          <IconCalendarAdd />
        </AddScheduleButton>
      </div>
    </main>
  )
}
