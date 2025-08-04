import type { ReactNode } from 'react'

/**
 *
 * 캘린더 상단에 고정되는 헤더 영역 (화면에 보이는 월 표시 등)
 *
 *
 * @example
 * <CalendarHeader>
 *   <button>◀</button>
 *   <h2>2025년 8월</h2>
 *   <button>▶</button>
 * </CalendarHeader>
 */

export default function HeaderContainer({ children }: { children: ReactNode }) {
  return (
    <div className="sticky top-0 z-10 bg-white flex items-center justify-between px-5 py-[0.625rem]">{children}</div>
  )
}
