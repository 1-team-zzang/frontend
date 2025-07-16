import { Calendar, CalendarHeader, CalendarScrollWrapper } from '@/shared/ui/calendar'
import WeekdayHeader from '@/shared/ui/calendar/weekday-header'

import QueryProvider from './provider/QueryProvider'
import ReactRouterProvider from './provider/ReactRouterProvider'

export default function App() {
  return (
    <QueryProvider>
      <Calendar>
        <CalendarHeader />
        <WeekdayHeader />
        <CalendarScrollWrapper />
      </Calendar>
      <ReactRouterProvider />
    </QueryProvider>
  )
}
