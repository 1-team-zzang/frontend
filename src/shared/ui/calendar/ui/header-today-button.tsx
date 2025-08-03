import { useScrollToCurrentMonth } from '../..'
import Text from '../../text/text'

import type { ButtonHTMLAttributes, ReactNode } from 'react'

/**
 * 캘린더 헤더에 사용하는 버튼(오늘, 공유 등 공통 버튼 컴포넌트)
 */

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

export default function HeaderTodayButton({ children, ...restProps }: Props) {
  const scrollToCurrentMonth = useScrollToCurrentMonth()
  return (
    <Text as="button" typography="b2-normal" onClick={scrollToCurrentMonth} {...restProps}>
      {children}
    </Text>
  )
}
