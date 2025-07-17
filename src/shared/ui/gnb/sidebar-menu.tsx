import { IconHome } from '@/shared/assets/icons'

import MenuList from './sidebar-menu-list'

/**
 * 슬라이드 바 메뉴부분 컴포넌트
 *
 */

export default function SideBarMenu() {
  return (
    <ul>
      <MenuList text={'홈'}>
        <IconHome />
      </MenuList>
      <MenuList text={'홈'}>
        <IconHome />
      </MenuList>
    </ul>
  )
}
