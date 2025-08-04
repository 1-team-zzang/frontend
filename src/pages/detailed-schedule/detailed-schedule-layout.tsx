import { format } from 'date-fns'
import { Outlet, useNavigate, useParams } from 'react-router'

import { IconCalendarAdd } from '@/shared/assets/icons'
import AddScheduleButton from '@/shared/ui/calendar/ui/add-schedule-button'
import { DetailedScheduleHeader } from '@/shared/ui/detailed-schedule'

export default function DetailedScheduleLayout() {
  const navigate = useNavigate()
  const { date } = useParams()
  const formattedDate = date ? format(new Date(date), 'M월 d일') : ''

  const goToCreateSchedule = () => {
    navigate(`/my/detailed-schedule/create?date=${date}`)
  }

  return (
    <main className="bg-[#f8f8f8] overflow-y-auto h-[calc(100vh-57px)] scrollbar-hide">
      <DetailedScheduleHeader date={formattedDate} />
      <div className="p-4">
        <Outlet />
        <AddScheduleButton onClick={goToCreateSchedule}>
          <IconCalendarAdd />
        </AddScheduleButton>
      </div>
    </main>
  )
}
