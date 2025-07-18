import { IconLogout, IconSetting } from '@/shared/assets/icons'

import MenuList from './sidebar-menu-list'

/**
 *
 * 슬라이드바 하단 설정/로그아웃 부분
 */

export default function SideBarMenuFooter() {
  return (
    <div>
      <MenuList text={'설정'}>
        <IconSetting />
      </MenuList>
      <MenuList text={'로그아웃'}>
        <IconLogout />
      </MenuList>
    </div>
  )
}
