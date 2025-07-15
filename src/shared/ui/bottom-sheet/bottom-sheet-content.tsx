import { cn } from '@/shared/utils'

import type { HTMLAttributes } from 'react'

/**
 * 바텀 시트의 메인 콘텐츠 영역 컴포넌트
 *
 * 바텀 시트 내부의 실제 콘텐츠를 담는 컨테이너입니다.
 * 기본적으로 상단 패딩이 적용되어 있어 핸들바와 적절한 간격을 유지합니다.
 *
 * @example
 * ```tsx
 * <BottomSheetContent>
 *   <p>바텀 시트의 메인 콘텐츠입니다.</p>
 *   <button>액션 버튼</button>
 * </BottomSheetContent>
 * ```
 */
export default function BottomSheetContent({ className, children, ...restProps }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('pt-5', className)} {...restProps}>
      {children}
    </div>
  )
}
