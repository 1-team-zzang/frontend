import { useUserStore } from '@/entities/user/models/use-user-store'
import { GNB } from '@/shared/ui/gnb'
import Hamburger from '@/shared/ui/gnb/hamburger'

import LoginSelectButton from '../../signin/ui/login-select-button'

import AuthSidebar from './auth-sidebar'

export default function GNBWrapper() {
  const isLoggedin = useUserStore((state) => !!state.user)

  const rightSlot = isLoggedin ? <Hamburger /> : <LoginSelectButton />
  const sidebar = isLoggedin ? <AuthSidebar /> : null

  return <GNB rightSlot={rightSlot} sidebar={sidebar} />
}
