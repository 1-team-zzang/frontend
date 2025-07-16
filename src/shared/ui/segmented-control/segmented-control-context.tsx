import { createContextScope } from '@/shared/utils'

const createSegmentedControlContext = createContextScope()

export interface SegmentedControlContextValue {
  selectedValue: string
  setSelectedValue: (value: string) => void
}

/**
 * SegmentedControl의 컨텍스트를 생성합니다.
 *
 * @returns [SegmentedControlProvider, useSegmentedControlContext] - Provider 컴포넌트와 훅
 */
export const [SegmentedControlProvider, useSegmentedControlContext] =
  createSegmentedControlContext<SegmentedControlContextValue>()
