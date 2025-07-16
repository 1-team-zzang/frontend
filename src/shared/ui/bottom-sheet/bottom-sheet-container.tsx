import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/shared/utils'

import { useBottomSheetContext } from './bottom-sheet-context'

import type { HTMLAttributes } from 'react'

const containerVariants = cva(
  'fixed bottom-0 left-0 w-full h-2/5 bg-white rounded-t-[1.5rem] shadow-[0_-4px_12px_0_rgba(0,0,0,0.08)] px-6 pt-8',
  {
    variants: {
      isOpen: {
        true: 'translate-y-0',
        false: 'translate-y-full',
      },
    },
    defaultVariants: {
      isOpen: false,
    },
  },
)

interface Props extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof containerVariants> {}

/**
 * 바텀 시트의 메인 컨테이너 컴포넌트
 *
 * 바텀 시트의 시각적 프레임을 제공하며, 열림/닫힘 상태에 따른 애니메이션을 처리합니다.
 * 접근성을 위한 ARIA 속성들이 포함되어 있습니다.
 *
 * @example
 * ```tsx
 * <BottomSheetContainer>
 *   <BottomSheetHandleBar />
 *   <BottomSheetHeader>
 *     <BottomSheetHeaderTitle>제목</BottomSheetHeaderTitle>
 *   </BottomSheetHeader>
 *   <BottomSheetContent>
 *     내용
 *   </BottomSheetContent>
 * </BottomSheetContainer>
 * ```
 */
export default function BottomSheetContainer({ children, className, ...restProps }: Props) {
  const { isOpen } = useBottomSheetContext()

  return (
    <div className={cn(containerVariants({ isOpen }), className)} {...restProps}>
      {children}
    </div>
  )
}
