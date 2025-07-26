import { Link } from 'react-router'

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
}

export default function SidebarMenuList({ icon, children, href, onClick }: Prop) {
  const Element = href ? Link : 'button'

  return (
    <li className="list-none h-[3.625rem] p-5 rounded-lg cursor-pointer hover:bg-gray-1 active:bg-primary-30 ">
      <Element to={href!} onClick={onClick} className="flex items-center gap-2">
        {icon}

        {children}
      </Element>
    </li>
  )
}
