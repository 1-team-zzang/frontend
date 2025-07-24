import { Outlet } from 'react-router'

import GNBWrapper from '@/features/auth/gnb/ui/gnb-wrapper'

export default function MainLayout() {
  return (
    <>
      <GNBWrapper />
      <Outlet />
    </>
  )
}
