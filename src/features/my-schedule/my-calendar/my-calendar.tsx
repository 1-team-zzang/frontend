import { format } from 'date-fns'
import { useNavigate } from 'react-router'

import { IconCalendarAdd } from '@/shared/assets/icons'
import { DateCellContent } from '@/shared/ui/calendar'
import AddScheduleButton from '@/shared/ui/calendar/ui/add-schedule-button'
import CalendarUI from '@/widget/ui/calendar-ui'

import { useDateSchedules } from '../hooks/use-date-schedules'

export default function MyCalendar() {
  const navigate = useNavigate()

  const { scheduleMap } = useDateSchedules()

  const goToCreateSchedule = () => {
    navigate('/my/schedule/create')
  }

  return (
    <CalendarUI
      disablePastDateStyling={true}
      renderDateCellContent={(date) => DateCellContent({ scheduleMap, date, isMine: true })}
      onDateClick={(date) => {
        const dateStr = format(date, 'yyyy-MM-dd')
        navigate(`/my/detailed-schedule/date/${dateStr}`)
      }}
      showShareButton={true}
    >
      <AddScheduleButton onClick={goToCreateSchedule}>
        <IconCalendarAdd />
      </AddScheduleButton>
    </CalendarUI>
  )
}
