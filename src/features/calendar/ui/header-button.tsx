import { Text } from '@/shared/ui'

import type { ButtonHTMLAttributes, ReactNode } from 'react'

/**
 * 캘린더 헤더에 사용하는 버튼(공유,뒤로가기 등 공통 버튼 컴포넌트)
 */

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

export default function HeaderButton({ children, ...restProps }: Props) {
  return (
    <Text as="button" typography="b2-normal" {...restProps}>
      {children}
    </Text>
  )
}
