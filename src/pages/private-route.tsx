import { Navigate, Outlet } from 'react-router'

import { useUserStore } from '@/entities/user/models/use-user-store'

export default function PrivateRoute() {
  const user = useUserStore((state) => !!state.user)
  const hasToken = !!localStorage.getItem('token')

  return user || hasToken ? <Outlet /> : <Navigate to="/" />
}
