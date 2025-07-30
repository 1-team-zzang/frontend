import { ToastList } from '@/shared/ui/toast'

import QueryProvider from './provider/QueryProvider'
import ReactRouterProvider from './provider/ReactRouterProvider'

export default function App() {
  return (
    <QueryProvider>
      <ReactRouterProvider />
      <ToastList />
    </QueryProvider>
  )
}
