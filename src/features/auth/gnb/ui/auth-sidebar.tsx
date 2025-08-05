import { IconCalendarCheck, IconCalendarDay, IconKakaoLogo, IconLogout, IconSetting } from '@/shared/assets'
import { SidebarMenu, SidebarMenuFooter, SidebarMenuList, Sidebar, SidebarMenuHeader } from '@/shared/ui'

import { useLogoutMutation } from '../../logout/model'

export default function AuthSidebar() {
  const logoutMutation = useLogoutMutation()

  return (
    <Sidebar>
      <div>
        <SidebarMenuHeader />
        <SidebarMenu>
          <SidebarMenuList id="my-calendar" icon={<IconCalendarDay />} href="/">
            내 캘린더
          </SidebarMenuList>
          <SidebarMenuList id="my-appointments" icon={<IconCalendarCheck />} href="/appointments">
            내 약속
          </SidebarMenuList>
          <SidebarMenuList id="friends" icon={<IconKakaoLogo />} href="/friends">
            캘메이트
          </SidebarMenuList>
        </SidebarMenu>
      </div>
      <SidebarMenuFooter>
        <SidebarMenuList icon={<IconLogout />} onClick={() => logoutMutation.mutate()}>
          로그아웃
        </SidebarMenuList>
        <SidebarMenuList icon={<IconSetting />} href="/my/settings">
          설정
        </SidebarMenuList>
      </SidebarMenuFooter>
    </Sidebar>
  )
}
