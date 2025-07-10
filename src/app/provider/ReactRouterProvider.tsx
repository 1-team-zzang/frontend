import { RouterProvider } from 'react-router'

import { router } from './ReactRouterProvider.routes'

/**
 * Provides the application's routing context using the configured router.
 *
 * Renders the `RouterProvider` component with the application's router, enabling route-based navigation throughout the app.
 */
export default function ReactRouterProvider() {
  return <RouterProvider router={router} />
}
