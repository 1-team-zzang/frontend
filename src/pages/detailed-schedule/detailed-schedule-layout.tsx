import { format } from 'date-fns'
import { Outlet, useParams } from 'react-router'

import { DetailedScheduleHeader } from '@/shared/ui/detailed-schedule'

export default function DetailedScheduleLayout() {
  const { date } = useParams()
  const formattedDate = date ? format(new Date(date), 'M월 d일') : ''

  return (
    <main className="bg-[#f8f8f8] overflow-y-auto h-[calc(100vh-57px)] scrollbar-hide">
      <DetailedScheduleHeader date={formattedDate} />
      <div className="p-4">
        <Outlet />
      </div>
    </main>
  )
}
