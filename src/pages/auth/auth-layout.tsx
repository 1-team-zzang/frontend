import { Outlet, Navigate } from 'react-router'

import { useUserStore } from '@/entities/user'
import { GNB } from '@/shared/ui'

export default function AuthLayout() {
  const { user } = useUserStore()

  return user ? (
    <Navigate to="/" />
  ) : (
    <div className="flex justify-center lg:px-8 bg-gray-5 h-[100vh]">
      <div className="w-full max-w-[640px] bg-white relative overflow-hidden">
        <GNB rightSlot={<div />} sidebar={<div />} />
        <Outlet />
      </div>
    </div>
  )
}
