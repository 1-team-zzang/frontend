import type { ReactNode } from 'react'

/**

 * 슬라이드 바 메뉴 각 리스트 1개

 *

 */

interface Prop {
  children: ReactNode

  icon: ReactNode
}

//icon 부분 children으로 받긴 했는데 분리하면 좋을지 아니면 다른방법이 있을지!

export default function SideBarMenuList({ icon, children }: Prop) {
  return (
    <li className="flex items-center h-[3.625rem] p-5 rounded-lg gap-2 cursor-pointer hover:bg-primary-30">
      {icon}

      {children}
    </li>
  )
}
