import { IconClose } from '@/shared/assets/icons'
import { cn } from '@/shared/utils'

import { useModalContext } from './modal-context'

import type { ButtonHTMLAttributes } from 'react'

/**
 * 모달을 닫는 버튼 컴포넌트입니다.
 *
 * X 아이콘과 함께 모달을 닫는 기능을 제공합니다.
 * 접근성을 위해 aria-label이 포함되어 있습니다.
 *
 * @example
 * ```tsx
 * <ModalCloseButton />
 *
 * // 커스텀 스타일링
 * <ModalCloseButton className="absolute top-4 right-4 hover:bg-gray-100" />
 * ```
 *
 * @param props - ModalCloseButton 컴포넌트의 props
 * @param props.className - 추가 CSS 클래스
 * @param props.restProps - 기타 HTML button 속성들 (onClick 제외)
 *
 * @returns 모달 닫기 버튼
 */
export default function ModalCloseButton({
  className,
  ...restProps
}: Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick' | 'children'>) {
  const { onOpenChange } = useModalContext()

  return (
    <button
      type="button"
      aria-label="Close modal"
      className={cn('absolute top-4 right-4', className)}
      onClick={() => onOpenChange(false)}
      {...restProps}
    >
      <IconClose className="w-8 h-8" />
    </button>
  )
}
