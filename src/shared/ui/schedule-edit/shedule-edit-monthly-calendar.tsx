import getMonthDates from '@/shared/ui/calendar/util/get-month-dates'
import { range } from '@/shared/ui/calendar/util/range'

import ScheduleEditCalendarCell from './schedule-calandar-cell'

interface MonthlyCalendarProps {
  year: number
  month: number
  onSelectDate: (date: Date) => void
  selectedDate?: Date
  today: Date
}

export default function ScheduleEditMonthlyCalendar({
  year,
  month,
  onSelectDate,
  selectedDate,
  today,
}: MonthlyCalendarProps) {
  const date = new Date(year, month, 1)
  const { firstDayOfMonth, LastDayOfMonth, remainingDaysInWeek } = getMonthDates(date)
  const weekdays = ['일', '월', '화', '수', '목', '금', '토']
  return (
    <div className="grid grid-cols-7 font-semibold text-[0.8125rem] text-gray-80 leading-normal">
      {weekdays.map((day) => (
        <span className="flex p-2.5 justify-center items-center" key={day}>
          {day}
        </span>
      ))}

      {range(firstDayOfMonth).map((day) => (
        <div key={`empty-${day}`} />
      ))}

      {range(LastDayOfMonth).map((day) => {
        const currentDate = new Date(year, month, day)
        const isToday = today.toDateString() === currentDate.toDateString()
        const isSelected = selectedDate?.toDateString() === currentDate.toDateString()

        return (
          <ScheduleEditCalendarCell
            key={day}
            year={year}
            month={month}
            date={day}
            isSelected={isSelected}
            isToday={isToday}
            onClick={() => onSelectDate(currentDate)}
          />
        )
      })}

      {range(remainingDaysInWeek).map((day) => (
        <div key={`empty-${day}`} />
      ))}
    </div>
  )
}
