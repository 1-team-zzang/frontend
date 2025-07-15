import { useControllableState } from '@/shared/hooks'

import { SegmentedControlProvider } from './segmented-control-context'

import type { ReactNode } from 'react'

interface Props {
  children: ReactNode
  value?: string
  defaultValue?: string
  onValueChange?: (value: string) => void
}

/**
 * SegmentedControl의 최상위 컨테이너 컴포넌트입니다.
 *
 * 이 컴포넌트는 SegmentedControl의 상태를 관리하고, 하위 컴포넌트들에게 컨텍스트를 제공합니다.
 * controlled와 uncontrolled 모드를 모두 지원합니다.
 *
 * @example
 * ```tsx
 * // Controlled mode
 * <SegmentedControl value={selectedValue} onValueChange={setSelectedValue}>
 *   <SegmentedControlList>
 *     <SegmentedControlItem value="tab1">탭 1</SegmentedControlItem>
 *     <SegmentedControlItem value="tab2">탭 2</SegmentedControlItem>
 *   </SegmentedControlList>
 * </SegmentedControlRoot>
 *
 * // Uncontrolled mode
 * <SegmentedControl defaultValue="tab1">
 *   <SegmentedControlList>
 *     <SegmentedControlItem value="tab1">탭 1</SegmentedControlItem>
 *     <SegmentedControlItem value="tab2">탭 2</SegmentedControlItem>
 *   </SegmentedControlList>
 * </SegmentedControl>
 * ```
 */
export default function SegmentedControlRoot({ children, value, defaultValue, onValueChange }: Props) {
  const [selectedValue, setSelectedValue] = useControllableState({
    prop: value,
    defaultProp: defaultValue || '',
    onChange: onValueChange,
  })

  return <SegmentedControlProvider value={{ selectedValue, setSelectedValue }}>{children}</SegmentedControlProvider>
}
