import { format } from 'date-fns'
import { useNavigate } from 'react-router'

import { IconCalendarAdd } from '@/shared/assets/icons'
import AddScheduleButton from '@/shared/ui/calendar/ui/add-schedule-button'
import { renderMyScheduleCellContent } from '@/shared/ui/calendar/ui/date-cell-content'
import CalendarUI from '@/widget/ui/calendar-ui'

import { useDateSchedules } from '../hooks/use-date-schedules'

export default function MyCalendar() {
  const navigate = useNavigate()

  const { scheduleMap } = useDateSchedules()

  return (
    <CalendarUI
      disablePastDateStyling={true}
      renderDateCellContent={(date) => renderMyScheduleCellContent({ scheduleMap, date })}
      onDateClick={(date) => {
        const dateStr = format(date, 'yyyy-MM-dd')
        navigate(`/my-calendar/${dateStr}`)
      }}
    >
      <AddScheduleButton>
        <IconCalendarAdd />
      </AddScheduleButton>
    </CalendarUI>
  )
}
