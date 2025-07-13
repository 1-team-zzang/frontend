import createScopedContext from '../utils/use-custom-context'
import CalendarCells from './calendar-cells'
import CalendarHeader from './calendar-header'
import useCalendar from './hooks/useCalendar'
import useCurrentMonth from './hooks/useCurrentMonth'
import useSelectedDate from './hooks/useSelectedDate'
import WeekdayHeader from './weekday-header'

interface Props {
  currentMonth: Date
  onNextMonth: () => void
  onPrevMonth: () => void
  selectedDate: Date
  handleSelectedDate: (date: Date) => void
  currentMonthAllDates: Date[]
}

const CalendarContex = createScopedContext()
const [CalendarProvider, useCalendarContext] = CalendarContex<Props>()

export { useCalendarContext }

export default function Calendar({ children }: { children: React.ReactNode }) {
  const { currentMonth, onNextMonth, onPrevMonth } = useCurrentMonth()
  const currentMonthAllDates = useCalendar(currentMonth)
  const { selectedDate, handleSelectedDate } = useSelectedDate()

  const providerValue = {
    currentMonth,
    onNextMonth,
    onPrevMonth,
    currentMonthAllDates,
    selectedDate,
    handleSelectedDate,
  }
  return (
    <CalendarProvider value={providerValue}>
      <div>{children}</div>
    </CalendarProvider>
  )
}

Calendar.Header = CalendarHeader
Calendar.Weekdays = WeekdayHeader
Calendar.Cells = CalendarCells
