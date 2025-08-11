import { Navigate, Outlet } from 'react-router'

import { useUserStore } from '@/entities/user'

export default function PasswordChangeRoute() {
  const { user } = useUserStore()
  const isKakaoLogin = user?.loginTypes[0] === 'KAKAO'

  return isKakaoLogin ? <Navigate to="/settings" /> : <Outlet />
}
