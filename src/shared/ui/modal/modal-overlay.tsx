import { cn } from '@/shared/utils'

import { useModalContext } from './modal-context'

import type { HTMLAttributes } from 'react'

/**
 * 모달의 배경 오버레이 컴포넌트입니다.
 *
 * 모달 뒤의 어두운 배경을 제공하며, 클릭 시 모달을 닫습니다.
 * 모달이 열려있을 때만 렌더링됩니다.
 *
 * @example
 * ```tsx
 * <ModalOverlay className="bg-black/50" />
 *
 * // 커스텀 스타일링
 * <ModalOverlay
 *   className="bg-black/60 backdrop-blur-sm"
 *   onClick={customCloseHandler}
 * />
 * ```
 *
 * @param props - ModalOverlay 컴포넌트의 props
 * @param props.className - 추가 CSS 클래스
 * @param props.restProps - 기타 HTML div 속성들
 *
 * @returns 모달 배경 오버레이 또는 null
 */
export default function ModalOverlay({ className, ...restProps }: HTMLAttributes<HTMLDivElement>) {
  const { isOpen, onOpenChange } = useModalContext()

  if (!isOpen) {
    return null
  }

  return (
    <div
      className={cn('fixed w-full h-full left-0 top-0 bg-black/40 z-50', className)}
      onClick={() => onOpenChange(false)}
      onKeyDown={() => onOpenChange(false)}
      role="button"
      aria-label="Overlay"
      tabIndex={0}
      {...restProps}
    />
  )
}
