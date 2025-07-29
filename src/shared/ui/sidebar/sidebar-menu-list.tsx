import { Link } from 'react-router'

import { useGNBContext } from '../gnb/gnb-conext'

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
  const { handleCloseSidebar } = useGNBContext()
  const handleButtonClick = () => {
    onClick?.()
    handleCloseSidebar()
  }
  return (
    <li className="list-none h-[3.625rem] p-5 rounded-lg cursor-pointer hover:bg-gray-1 active:bg-primary-30 ">
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
    </li>
  )
}
