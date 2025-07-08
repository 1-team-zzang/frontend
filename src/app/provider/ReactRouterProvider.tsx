import { RouterProvider } from 'react-router'

import { router } from './ReactRouterProvider.routes'

export default function ReactRouterProvider() {
  return <RouterProvider router={router} />
}
