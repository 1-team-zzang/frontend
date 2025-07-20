import { IconHome } from '@/shared/assets/icons'

import Text from '../text/text'

import MenuList from './sidebar-menu-list'

/**

 * 슬라이드 바 메뉴부분 컴포넌트

 *

 */

export default function SideBarMenu() {
  return (
    <ul>
      <MenuList icon={<IconHome />}>
        <a href="/">
          <Text as="span" typography={'b2-heading'}>
            홈
          </Text>
        </a>
      </MenuList>
    </ul>
  )
}
