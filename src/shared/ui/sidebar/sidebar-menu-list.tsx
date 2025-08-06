import { Link } from 'react-router'

import { useGNBContext } from '../gnb/gnb-conext'
import Text from '../text/text'

import type { ReactNode } from 'react'

/**

 * 슬라이드 바 메뉴 각 리스트 1개

 *

 */

interface Prop {
  children: ReactNode
  icon: ReactNode
  href?: string
  onClick?: () => void
  id?: string
}

export default function SidebarMenuList({ icon, children, href, onClick, id }: Prop) {
  const { handleCloseSidebar } = useGNBContext()
  const handleButtonClick = () => {
    onClick?.()
    handleCloseSidebar()
  }
  return (
    <Text
      as="li"
      typography="b2-heading"
      id={id}
      className="list-none h-[3.625rem] p-5 rounded-lg cursor-pointer hover:bg-gray-1 active:bg-primary-1 "
    >
      {href ? (
        <Link to={href} onClick={handleCloseSidebar} className="flex items-center gap-2">
          {icon}
          {children}
        </Link>
      ) : (
        <button onClick={handleButtonClick} className="flex items-center gap-2">
          {icon}
          {children}
        </button>
      )}
    </Text>
  )
}
