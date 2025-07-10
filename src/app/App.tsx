import Calendar from '../shared/calendar/calendar'
import QueryProvider from './provider/QueryProvider'
import ReactRouterProvider from './provider/ReactRouterProvider'

export default function App() {
  return (
    <QueryProvider>
      <ReactRouterProvider />
      <Calendar />
    </QueryProvider>
  )
}
