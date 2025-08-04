import { Outlet } from 'react-router'

import GNBWrapper from '@/features/auth/gnb/ui/gnb-wrapper'

export default function MainLayout() {
  return (
    <div className="flex justify-center lg:px-8 bg-gray-5 h-[100vh]">
      <div className="w-full max-w-[640px] bg-white relative overflow-hidden">
        <GNBWrapper />
        <Outlet />
      </div>
    </div>
  )
}
