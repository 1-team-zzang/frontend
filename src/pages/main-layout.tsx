import { Outlet } from 'react-router'

import GNBWrapper from '@/features/auth/gnb/ui/gnb-wrapper'

export default function MainLayout() {
  return (
    <>
      <GNBWrapper />
      <main className="mx-4">
        <Outlet />
      </main>
    </>
  )
}
