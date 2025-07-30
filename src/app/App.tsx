import Toast from '@/shared/ui/toast/toast'

import QueryProvider from './provider/QueryProvider'
import ReactRouterProvider from './provider/ReactRouterProvider'

export default function App() {
  return (
    <QueryProvider>
      <ReactRouterProvider />
      <Toast />
    </QueryProvider>
  )
}
