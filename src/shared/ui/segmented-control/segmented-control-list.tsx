import { cn } from '@/shared/utils'

import type { HTMLAttributes } from 'react'

/**
 * SegmentedControl의 탭 버튼들을 감싸는 컨테이너 컴포넌트입니다.
 *
 * 이 컴포넌트는 SegmentedControlItem들을 그룹화하고, 전체적인 레이아웃과 스타일을 제공합니다.
 *
 * @example
 * ```tsx
 * <SegmentedControlList className="custom-container-styles">
 *   <SegmentedControlItem value="tab1">첫 번째 탭</SegmentedControlItem>
 *   <SegmentedControlItem value="tab2">두 번째 탭</SegmentedControlItem>
 *   <SegmentedControlItem value="tab3">세 번째 탭</SegmentedControlItem>
 * </SegmentedControlList>
 * ```
 *
 * @param props - 컴포넌트 props (HTML div 요소의 모든 속성 상속)
 * @param props.children - SegmentedControlItem 컴포넌트들
 * @param props.className - 추가 CSS 클래스
 * @param props.restProps - 기타 HTML div 속성들
 * @returns JSX.Element
 */
export default function SegementedControlList({ children, className, ...restProps }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('flex items-center bg-gray-5 rounded-2xl p-1 w-fit', className)} {...restProps}>
      {children}
    </div>
  )
}
