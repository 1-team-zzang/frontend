import { IconCalendarCheck, IconCalendarDay, IconKakaoLogo, IconLogout, IconSetting } from '@/shared/assets/icons'
import { SidebarMenu, SidebarMenuFooter, SidebarMenuList, Sidebar, SidebarMenuHeader } from '@/shared/ui/sidebar'

import useLogoutMutation from '../../logout/model/use-logout-mutation'

export default function AuthSidebar() {
  const logoutMutation = useLogoutMutation()

  return (
    <Sidebar>
      <div>
        <SidebarMenuHeader />
        <SidebarMenu>
          {/* TODO 나머지들 페이지 prop 추가 */}
          <SidebarMenuList icon={<IconCalendarDay />}>내 캘린더</SidebarMenuList>
          <SidebarMenuList icon={<IconCalendarCheck />}>내 약속</SidebarMenuList>
          <SidebarMenuList icon={<IconKakaoLogo />}>캘메이트</SidebarMenuList>
        </SidebarMenu>
      </div>
      <SidebarMenuFooter>
        <SidebarMenuList icon={<IconLogout />} onClick={() => logoutMutation.mutate()}>
          로그아웃
        </SidebarMenuList>
        <SidebarMenuList icon={<IconSetting />}>설정</SidebarMenuList>
      </SidebarMenuFooter>
    </Sidebar>
  )
}
