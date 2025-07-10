import QueryProvider from './provider/QueryProvider'
import ReactRouterProvider from './provider/ReactRouterProvider'

/**
 * Composes the application's main providers, wrapping the router with query context.
 *
 * Serves as the root component, ensuring that routing and data-fetching contexts are available to all descendants.
 */
export default function App() {
  return (
    <QueryProvider>
      <ReactRouterProvider />
    </QueryProvider>
  )
}
