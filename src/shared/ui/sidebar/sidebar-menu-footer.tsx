import type { ReactNode } from 'react'

/**
 *
 * 슬라이드바 하단 설정/로그아웃 부분
 */

export default function SidebarMenuFooter({ children }: { children: ReactNode }) {
  return <div className="flex flex-col">{children}</div>
}
