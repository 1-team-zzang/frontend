import { Navigate, Outlet } from 'react-router'

import useAuthenticate from '@/shared/hooks/use-authenticate'

export default function PrivateRoute() {
  return useAuthenticate() ? <Outlet /> : <Navigate to="/" />
}
