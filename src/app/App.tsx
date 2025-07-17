import { Calendar, CalendarHeader, CalendarScrollWrapper } from '@/widgets/calendar'
import QueryProvider from './provider/QueryProvider'
import ReactRouterProvider from './provider/ReactRouterProvider'

export default function App() {
  return (
    <QueryProvider>
      <Calendar>
        <CalendarHeader />
        <CalendarScrollWrapper />
      </Calendar>
      <ReactRouterProvider />
    </QueryProvider>
  )
}
