import { Navigate, Outlet } from 'react-router'

import { useUserStore } from '@/entities/user/models/use-user-store'

export default function PrivateRoute() {
  const user = useUserStore((state) => !!state.user)

  return user ? <Outlet /> : <Navigate to="/" />
}
