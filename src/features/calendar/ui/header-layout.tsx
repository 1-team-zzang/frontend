import { HeaderMonthLabel } from '@/entities/calendar/ui'

import type { ReactNode } from 'react'

/**
 *
 * 캘린더 상단에 고정되는 헤더 영역 (화면에 보이는 월 표시 등)
 * 페이지별로 위치 다르게 표시 가능
 *
 * @example
 * <HeaderContainer>
 *  left - <button>◀</button>
 *  center - <h2>2025년 8월</h2>
 *  right - <button>▶</button>
 * </HeaderContainer>
 */

interface Props {
  left?: ReactNode
  center?: ReactNode
  right?: ReactNode
}

export default function HeaderLayout({ left, center, right }: Props) {
  return (
    <div className="z-10 bg-white flex justify-between items-center px-5 py-[0.625rem]">
      <div>{left}</div>
      <div>{center ?? <HeaderMonthLabel />}</div>
      <div>{right}</div>
    </div>
  )
}
