import type { ReactNode } from 'react'

/**

 * 슬라이드 바 메뉴부분 컴포넌트

 *

 */

export default function SidebarMenu({ children }: { children: ReactNode }) {
  return <ul>{children}</ul>
}
