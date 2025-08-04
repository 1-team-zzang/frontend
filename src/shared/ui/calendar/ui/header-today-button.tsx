import { useScrollToCurrentMonth } from '../..'
import Text from '../../text/text'

import type { ButtonHTMLAttributes, ReactNode } from 'react'

/**
 * 캘린더 헤더에 사용하는 버튼
 * 누르면 이번달 달력으로 이동
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
