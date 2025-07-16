import { cn } from '@/shared/utils'

import type { HTMLAttributes } from 'react'

/**
 * 바텀 시트의 헤더 영역 컴포넌트
 *
 * 바텀 시트의 상단 헤더를 담는 컨테이너입니다.
 * 제목과 버튼들을 포함할 수 있으며, 중앙 정렬된 레이아웃을 제공합니다.
 *
 * @example
 * ```tsx
 * <BottomSheetHeader>
 *   <BottomSheetHeaderTitle>바텀 시트 제목</BottomSheetHeaderTitle>
 *   <BottomSheetHeaderButton>닫기</BottomSheetHeaderButton>
 * </BottomSheetHeader>
 * ```
 */
export default function BottomSheetHeader({ children, className, ...restProps }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('flex justify-center items-center relative', className)} {...restProps}>
      {children}
    </div>
  )
}
