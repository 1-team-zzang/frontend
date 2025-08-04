import { useUserStore } from '@/entities/user'
import NotificationBell from '@/features/notification/ui/notification-bell'
import { GNB, Hamburger } from '@/shared/ui'

import { LoginSelectButton } from '../../signin/ui'

import AuthSidebar from './auth-sidebar'

export default function GNBWrapper() {
  const isLoggedin = useUserStore((state) => !!state.user)

  const rightSlot = isLoggedin ? (
    <div className="flex items-center gap-4">
      <NotificationBell />
      <Hamburger />
    </div>
  ) : (
    <LoginSelectButton />
  )
  const sidebar = isLoggedin ? <AuthSidebar /> : null

  return <GNB rightSlot={rightSlot} sidebar={sidebar} />
}
