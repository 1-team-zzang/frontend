import { cn } from '@/shared/utils'

import Text from '../text/text'

import { useBottomSheetContext } from './bottom-sheet-context'

import type { ButtonHTMLAttributes } from 'react'

interface Props extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick?: (...args: any[]) => void
  textClassName?: string
}

/**
 * 바텀 시트 헤더의 액션 버튼 컴포넌트
 *
 * 바텀 시트 헤더에 위치하는 액션 버튼입니다.
 * 클릭 시 자동으로 바텀 시트가 닫히며, 추가적인 onClick 핸들러도 실행됩니다.
 *
 * @example
 * ```tsx
 * <BottomSheetHeaderButton onClick={() => console.log('저장됨')}>
 *   저장
 * </BottomSheetHeaderButton>
 * ```
 */
export default function BottomSheetHeaderButton({ children, className, textClassName, onClick, ...restProps }: Props) {
  const { setIsOpen } = useBottomSheetContext()

  const handleMergeClick = () => {
    onClick?.()
    setIsOpen(false)
  }

  return (
    <button className={cn('absolute right-0', className)} onClick={handleMergeClick} {...restProps}>
      <Text typography="b2-normal" as="span" className={textClassName}>
        {children}
      </Text>
    </button>
  )
}
