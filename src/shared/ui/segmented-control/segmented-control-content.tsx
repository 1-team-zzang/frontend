import { cn } from '@/shared/utils'

import { useSegmentedControlContext } from './segmented-control-context'

import type { HTMLAttributes } from 'react'

interface Props extends HTMLAttributes<HTMLDivElement> {
  value: string
}

/**
 * SegmentedControl의 콘텐츠 컴포넌트입니다.
 *
 * 이 컴포넌트는 현재 선택된 탭의 값과 일치할 때만 렌더링됩니다.
 *
 * @example
 * ```tsx
 * <SegmentedControlContent value="tab1" className="content-styles">
 *   <div>첫 번째 탭의 콘텐츠입니다.</div>
 *   <p>여러 줄의 콘텐츠도 표시할 수 있습니다.</p>
 * </SegmentedControlContent>
 *
 * <SegmentedControlContent value="tab2">
 *   <div>두 번째 탭의 콘텐츠입니다.</div>
 * </SegmentedControlContent>
 * ```
 *
 * @param props - 컴포넌트 props
 * @param props.value - 이 콘텐츠가 표시될 탭의 값
 * @param props.children - 표시될 콘텐츠
 * @param props.className - 추가 CSS 클래스
 * @returns JSX.Element | null - 선택된 탭과 일치하면 JSX.Element, 아니면 null
 */
export default function SegmentedControlContent({ value, children, className }: Props) {
  const { selectedValue } = useSegmentedControlContext()

  const isRender = value === selectedValue

  if (!isRender) {
    return null
  }

  return <div className={cn('', className)}>{children}</div>
}
