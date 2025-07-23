import getMonthDates from '../util/get-month-dates'
import { range } from '../util/range'

import CalendarCell from './calendar-cell'

interface Prop {
  month: number
  year: number
}

export default function MonthlyCalendar({ month, year }: Prop) {
  const date = new Date(year, month, 1)
  const { firstDayOfMonth, daysInMonth } = getMonthDates(date)

  return (
    <div className="grid grid-cols-7">
      {range(firstDayOfMonth).map((day) => (
        <div className="h-20" key={`empty-${day}`} />
      ))}

      {range(daysInMonth).map((day) => (
        <CalendarCell key={day} year={year} month={month} date={day} showMonthLabel={day === 1} />
      ))}
    </div>
  )
}
