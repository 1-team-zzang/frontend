import Text from '../text/text'

import type { ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
}

/**
 * 바텀 시트 헤더의 제목 컴포넌트
 *
 * 바텀 시트의 제목을 표시하는 컴포넌트입니다.
 * Text 컴포넌트를 사용하여 일관된 타이포그래피를 적용합니다.
 *
 * @example
 * ```tsx
 * <BottomSheetHeaderTitle>바텀 시트 제목</BottomSheetHeaderTitle>
 * ```
 */
export default function BottomSheetHeaderTitle({ children, className }: Props) {
  return (
    <Text typography="b1-heading" className={className}>
      {children}
    </Text>
  )
}
