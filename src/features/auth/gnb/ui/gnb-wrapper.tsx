import { useUserStore } from '@/entities/user/models/use-user-store'
import NotificationBell from '@/features/notification/ui/notification-bell'
import { GNB } from '@/shared/ui/gnb'
import Hamburger from '@/shared/ui/gnb/hamburger'

import LoginSelectButton from '../../signin/ui/login-select-button'

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
