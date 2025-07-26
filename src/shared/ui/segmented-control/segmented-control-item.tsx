import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/shared/utils'

import { useSegmentedControlContext } from './segmented-control-context'

import type { ButtonHTMLAttributes } from 'react'

const itemVariants = cva(
  'flex items-center justify-center rounded-full px-3 py-[0.125rem] font-semibold text-sm cursor-pointer transition-colors',
  {
    variants: {
      isSelected: {
        true: 'bg-primary-30 text-gray-95',
        false: 'bg-gray-5 text-gray-60',
      },
    },
    defaultVariants: {
      isSelected: false,
    },
  },
)

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof itemVariants> {
  value: string
}

/**
 * SegmentedControl의 개별 탭 버튼 컴포넌트입니다.
 *
 * 이 컴포넌트는 클릭 시 해당 값이 선택되도록 하고, 현재 선택된 탭에 따라 스타일이 변경됩니다.
 *
 * @example
 * ```tsx
 * <SegmentedControlItem
 *   value="tab1"
 *   className="custom-styles"
 *   onClick={() => console.log('Tab clicked')}
 * >
 *   첫 번째 탭
 * </SegmentedControlItem>
 * ```
 *
 * @param props - 컴포넌트 props
 * @param props.children - 탭에 표시될 내용
 * @param props.className - 추가 CSS 클래스
 * @param props.value - 탭의 고유 값
 * @param props.restProps - 기타 HTML button 속성들
 * @returns JSX.Element
 */
export default function SegmentedControlItem({ children, className, value: propValue, ...restProps }: Props) {
  const { selectedValue, setSelectedValue } = useSegmentedControlContext()
  const isSelected = selectedValue === propValue

  return (
    <button
      className={cn(itemVariants({ isSelected }), className)}
      onClick={() => setSelectedValue(propValue)}
      role="tab"
      aria-selected={isSelected}
      aria-controls={`panel-${propValue}`}
      id={`tab-${propValue}`}
      {...restProps}
    >
      {children}
    </button>
  )
}
